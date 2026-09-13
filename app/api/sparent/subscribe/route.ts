import { NextResponse } from 'next/server';
import { EMAIL_RE, rateLimited, recordSignup } from '@/lib/sparent-signups';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TOPIC_KEYS = new Set(['identity', 'mental-health', 'race-culture', 'relationships', 'grief', 'boundaries']);

export async function POST(req: Request) {
  let body: { email?: unknown; page?: unknown; topics?: unknown; website?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Send an email address.' }, { status: 400 });
  }

  // Honeypot: real people never see this field. A filled one gets a quiet "ok".
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === 'string' ? body.email.trim() : '';
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'That email address doesn’t look right.' }, { status: 400 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many tries. Give it a minute and try again.' }, { status: 429 });
  }

  const page = typeof body.page === 'string' && body.page.startsWith('/') ? body.page : undefined;
  const topics = Array.isArray(body.topics)
    ? body.topics.filter((t): t is string => typeof t === 'string' && TOPIC_KEYS.has(t)).slice(0, 6)
    : [];

  try {
    await recordSignup({ email, page, topics });
  } catch (err) {
    console.error('[sparent/subscribe]', err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: 'The list didn’t answer. Try once more, or email executive@us-squared.org.' },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
