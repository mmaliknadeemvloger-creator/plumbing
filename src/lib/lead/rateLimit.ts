const ipRequests = new Map<string, { count: number; windowStart: number }>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

export function checkRateLimit(ipHash: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = ipRequests.get(ipHash);

  if (!record) {
    ipRequests.set(ipHash, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (now - record.windowStart > WINDOW_MS) {
    ipRequests.set(ipHash, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((record.windowStart + WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count += 1;
  return { allowed: true };
}
