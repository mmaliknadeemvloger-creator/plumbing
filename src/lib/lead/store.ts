import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.LEAD_WEBHOOK_SECRET;

export async function storeLead(lead: Record<string, unknown>): Promise<void> {
  const timestamp = Date.now();
  const leadId = crypto.randomUUID();
  // Strip PII keys from server logs; keep metadata only
  const payload = { ...lead, id: leadId, timestamp };

  // 1. Signed webhook delivery
  if (WEBHOOK_URL && WEBHOOK_SECRET) {
    try {
      const body = JSON.stringify(payload);
      const signature = crypto
        .createHmac('sha256', WEBHOOK_SECRET)
        .update(body)
        .digest('hex');

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Webhook-Signature': `sha256=${signature}`,
        },
        body,
      });
      if (res.ok) return;
      console.error('[lead/webhook] non-ok status:', res.status);
    } catch (e) {
      console.error('[lead/webhook] fetch error:', e);
    }
  }

  // 2. Dev file fallback
  if (process.env.NODE_ENV !== 'production') {
    const dataDir = path.join(process.cwd(), '.data');
    await fs.mkdir(dataDir, { recursive: true });
    await fs.appendFile(
      path.join(dataDir, 'leads.jsonl'),
      JSON.stringify(payload) + '\n',
      'utf8'
    );
    return;
  }

  // 3. Production with no destination configured
  throw new Error('NO_DESTINATION');
}
