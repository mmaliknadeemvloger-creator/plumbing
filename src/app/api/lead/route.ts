import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { SITE_URL } from '@/content/site';
import { storeLead } from '@/lib/lead/store';
import { checkRateLimit } from '@/lib/lead/rateLimit';
import { createHash } from 'crypto';

const SALT = process.env.IP_SALT ?? 'steadwell-lead-salt';

const LeadSchema = z.object({
  service: z.string().min(1, 'Service is required'),
  isEmergency: z.boolean().default(false),
  zip: z.string().regex(/^\d{5}$/, 'ZIP must be 5 digits'),
  timing: z.string().optional(),
  name: z.string().min(1, 'Name is required').max(100),
  phone: z
    .string()
    .transform(v => v.replace(/\D/g, ''))
    .pipe(z.string().length(10, 'Phone must be 10 digits')),
  email: z.string().email().optional().or(z.literal('')),
  contactMethod: z.enum(['phone', 'text', 'email']).default('phone'),
  notes: z.string().max(1000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Consent required' }),
  }),
  honeypot: z.string().max(0).optional(),
  startedAt: z.number().optional(),
});

function getIpHash(req: NextRequest): string {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';
  return createHash('sha256').update(SALT + ip).digest('hex').slice(0, 16);
}

function isSameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin') ?? '';
  const referer = req.headers.get('referer') ?? '';
  const base = SITE_URL.replace(/\/$/, '');
  // Allow localhost in development
  if (process.env.NODE_ENV !== 'production') return true;
  return origin.startsWith(base) || referer.startsWith(base);
}

export async function POST(req: NextRequest) {
  // Same-origin check
  if (!isSameOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Content-Type
  const ct = req.headers.get('content-type') ?? '';
  if (!ct.includes('application/json')) {
    return NextResponse.json({ error: 'JSON only' }, { status: 415 });
  }

  // Body size limit (10 KB)
  const rawBody = await req.text();
  if (rawBody.length > 10240) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
  }

  let data: unknown;
  try {
    data = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot check (silent 200)
  if (typeof data === 'object' && data !== null) {
    const d = data as Record<string, unknown>;
    if (d.honeypot && String(d.honeypot).length > 0) {
      return NextResponse.json({ ok: true });
    }
    // Timing check: < 2500ms = bot (silent 200)
    if (typeof d.startedAt === 'number' && Date.now() - d.startedAt < 2500) {
      return NextResponse.json({ ok: true });
    }
  }

  // Rate limit
  const ipHash = getIpHash(req);
  const rateCheck = checkRateLimit(ipHash);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later or call us directly.' },
      { status: 429 }
    );
  }

  // Zod validation
  const result = LeadSchema.safeParse(data);
  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.issues.forEach(issue => {
      const key = issue.path.join('.') || '_';
      if (!errors[key]) errors[key] = issue.message;
    });
    return NextResponse.json({ errors }, { status: 422 });
  }

  // Store lead
  try {
    await storeLead({ ...result.data, ipHash });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg === 'NO_DESTINATION' && process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please call us directly.' },
        { status: 503 }
      );
    }
    // In dev, always return ok
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json({ ok: true });
    }
    console.error('[lead]', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
