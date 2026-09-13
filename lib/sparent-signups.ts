// Server-only. Records a Sparent Science signup in Supabase.
//
// The table is public.sparent_subscribers on the grant_intelligence project.
// The publishable key can only insert (an insert-only, shape-checked policy;
// no select, update or delete), so nothing about the list can be read from
// here. A repeat signup trips the unique index (23505); that is treated as
// success so subscribing twice is quiet. ON CONFLICT is deliberately not
// used: it would need SELECT on the table, which anon does not have.

const SUPABASE_URL = process.env.SPARENT_SUPABASE_URL || 'https://owfeewglgqxzcibzmzeq.supabase.co';
const SUPABASE_KEY = process.env.SPARENT_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_zFcVKjq4lwBoISUagf_KrA_F_3eHPq6';

export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export interface SignupInput {
  email: string;
  page?: string;
  topics?: string[];
}

export async function recordSignup(input: SignupInput): Promise<void> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/sparent_subscribers`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      email: input.email.trim(),
      source: 'site',
      page: input.page?.slice(0, 200) ?? null,
      topics: input.topics ?? [],
    }),
    cache: 'no-store',
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    // 23505 = unique_violation: already on the list.
    if (res.status === 409 && detail.includes('23505')) return;
    throw new Error(`Supabase ${res.status}: ${detail.slice(0, 300)}`);
  }
}

// A small per-instance limiter. Enough to blunt a script; the database
// policy and the unique index do the real work.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}
