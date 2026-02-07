// Very small in-memory rate limiter suitable for single-instance deployments.
// For production on serverless / multi-instance, switch to Upstash Redis or similar.

type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

function getClientIp(req: Request): string {
  // Works behind many proxies; not perfect.
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return "unknown";
}

export async function rateLimit(
  req: Request,
  opts: { limit: number; windowMs: number }
): Promise<{ ok: boolean; remaining: number; resetAt: number }> {
  const ip = getClientIp(req);
  const key = `rl:${ip}`;

  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + opts.windowMs;
    store.set(key, { count: 1, resetAt });
    return { ok: true, remaining: opts.limit - 1, resetAt };
  }

  if (existing.count >= opts.limit) {
    return { ok: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  store.set(key, existing);
  return { ok: true, remaining: opts.limit - existing.count, resetAt: existing.resetAt };
}
