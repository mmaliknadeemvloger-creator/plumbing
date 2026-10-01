export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  channel: 'paid' | 'organic' | 'direct' | 'social' | 'referral';
  capturedAt: number;
}

const STORAGE_KEY = 'elite_attribution';
const EXPIRY_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export function captureAttribution() {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const data: Partial<AttributionData> = {};

  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'] as const;
  type UtmKey = typeof utmKeys[number];
  utmKeys.forEach((key: UtmKey) => {
    const val = urlParams.get(key);
    if (val) (data as Record<string, unknown>)[key] = val;
  });

  if (Object.keys(data).length > 0) {
    let channel: AttributionData['channel'] = 'direct';
    if (data.gclid || data.gbraid || data.wbraid || data.utm_medium === 'cpc' || data.utm_medium === 'paid') {
      channel = 'paid';
    } else if (data.utm_medium === 'social') {
      channel = 'social';
    } else if (data.utm_medium === 'organic') {
      channel = 'organic';
    } else if (data.utm_source) {
      channel = 'referral';
    }

    data.channel = channel;
    data.capturedAt = Date.now();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } else if (!localStorage.getItem(STORAGE_KEY) && document.referrer) {
    const ref = document.referrer;
    let channel: AttributionData['channel'] = 'referral';
    if (ref.includes('google.com') || ref.includes('bing.com') || ref.includes('yahoo.com')) {
      channel = 'organic';
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      utm_source: new URL(ref).hostname,
      channel,
      capturedAt: Date.now()
    }));
  }
}

export function getAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  try {
    const data = JSON.parse(stored) as AttributionData;
    if (Date.now() - data.capturedAt > EXPIRY_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}
