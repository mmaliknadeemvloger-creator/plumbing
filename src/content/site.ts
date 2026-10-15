/* ─── Site-wide business facts ───────────────────────────────
 * Reads from env vars. Empty/unset = hidden or placeholder.
 * ──────────────────────────────────────────────────────────── */

const env = (key: string) => process.env[key] ?? '';

// ── Brand ────────────────────────────────────────────────
export const BRAND = 'Elite Plumbing & Drain' as const;
export const BRAND_FULL = 'Elite Plumbing & Drain' as const;
export const BRAND_SHORT = 'Elite Plumbing' as const;
export const BRAND_DOMAIN = 'eliteplumbingdrain.com' as const;

export const BRAND_PROMISE = [
  'Upfront pricing — no surprise charges',
  'Licensed, background-checked plumbers',
  'Cleanup included on every job',
] as const;

export const DISCLOSURE =
  'Elite Plumbing connects you with independent licensed plumbers across the United States. ' +
  'When you request service, your information is routed to qualified, background-checked plumbers serving your local area.';

// ── Contact ──────────────────────────────────────────────
const TEMP_PHONE = '(619) 782-6581';
const TEMP_PHONE_E164 = '+16197826581';

export const PHONE = env('NEXT_PUBLIC_BUSINESS_PHONE') || TEMP_PHONE;
export const PHONE_E164 = env('NEXT_PUBLIC_BUSINESS_PHONE_E164') || TEMP_PHONE_E164;
export const PPC_PHONE = env('NEXT_PUBLIC_PPC_TRACKING_PHONE') || PHONE;
export const EMAIL = env('NEXT_PUBLIC_BUSINESS_EMAIL');
export const HOURS = env('NEXT_PUBLIC_BUSINESS_HOURS') || '24/7 Dispatch Available';
export const LICENSE = env('NEXT_PUBLIC_LICENSE_NUMBER');
export const OFFICE_ADDRESS = env('NEXT_PUBLIC_OFFICE_ADDRESS');

/** true only if 24/7 dispatch is actually staffed */
export const IS_24_7 = env('NEXT_PUBLIC_EMERGENCY_24_7') !== 'false';

/** Phone is real (not a 555 placeholder) — safe for structured data */
export const PHONE_IS_REAL = !PHONE.includes('555-01');

// ── URLs ─────────────────────────────────────────────────
export const SITE_URL =
  env('NEXT_PUBLIC_SITE_URL') || `https://${BRAND_DOMAIN}`;

export const GOOGLE_REVIEW_URL = env('NEXT_PUBLIC_GOOGLE_REVIEW_URL');
export const GOOGLE_PROFILE_URL = env('NEXT_PUBLIC_GOOGLE_PROFILE_URL');

// ── Analytics ────────────────────────────────────────────
export const GTM_ID = env('NEXT_PUBLIC_GTM_ID');
export const GOOGLE_VERIFICATION = env('NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION');
export const BING_VERIFICATION = env('NEXT_PUBLIC_BING_SITE_VERIFICATION');

// ── Lead delivery ────────────────────────────────────────
export const LEAD_WEBHOOK_URL = env('LEAD_WEBHOOK_URL');
export const LEAD_WEBHOOK_SECRET = env('LEAD_WEBHOOK_SECRET');

// ── Market ───────────────────────────────────────────────
export const PRIMARY_COUNTRY = 'United States';
export const SERVICE_AREA_LABEL = 'Serving Homes & Businesses Across the USA';

// ── Default SEO Keywords ─────────────────────────────────
export const DEFAULT_KEYWORDS = [
  'Plumbing Services USA',
  'Plumbing and Drain Services',
  'Professional Plumber',
  'Emergency Plumber',
  'Plumbing Repair Services',
  'Drain Cleaning Services',
  'Sewer Line Repair',
  'Water Heater Repair',
  'Leak Detection Services',
  'Residential Plumbing Services',
  'Commercial Plumbing Services',
  '24 Hour Emergency Plumber',
  'Clogged Drain Repair',
  'Pipe Repair and Replacement',
  'Toilet Repair Services',
  'Faucet Repair and Installation',
  'Garbage Disposal Repair',
  'Water Leak Repair',
  'Hydro Jetting Services',
  'local plumbers near me',
] as const;


