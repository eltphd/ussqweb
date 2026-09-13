'use client';

import { useId, useState } from 'react';
import { usePathname } from 'next/navigation';

type State = 'idle' | 'sending' | 'done' | 'error';

/**
 * The Sparent Science signup. Posts to /api/sparent/subscribe, which records
 * the address in Supabase. The same form serves the homepage section, the
 * journal home, and the end of every issue.
 */
export default function SparentSignup({
  topics,
  buttonLabel = 'Subscribe',
}: {
  /** Topic keys to attach to this signup, e.g. the topic page the reader is on. */
  topics?: string[];
  buttonLabel?: string;
}) {
  const id = useId();
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');
  const [message, setMessage] = useState('');

  if (state === 'done') {
    return (
      <div className="notice" role="status">
        Thank you. You&apos;re on the list. The next issue arrives in your inbox first.
      </div>
    );
  }

  return (
    <form
      className="form-subscribe"
      onSubmit={async (e) => {
        e.preventDefault();
        setState('sending');
        setMessage('');
        const form = e.currentTarget;
        const website = (form.elements.namedItem('website') as HTMLInputElement | null)?.value ?? '';
        try {
          const res = await fetch('/api/sparent/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, page: pathname, topics: topics ?? [], website }),
          });
          const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
          if (res.ok && data.ok) {
            setState('done');
          } else {
            setState('error');
            setMessage(data.error || 'Something went wrong. Try once more.');
          }
        } catch {
          setState('error');
          setMessage('The connection dropped. Try once more.');
        }
      }}
    >
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <input
        id={`${id}-email`}
        className="input"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
        aria-invalid={state === 'error' ? true : undefined}
        aria-describedby={state === 'error' ? `${id}-error` : undefined}
      />
      {/* Honeypot. Hidden from people and assistive tech; bots fill it. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }}
        defaultValue=""
      />
      <button type="submit" className="btn btn-primary" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : buttonLabel}
      </button>
      {state === 'error' ? (
        <p id={`${id}-error`} className="small" role="alert" style={{ flexBasis: '100%', marginTop: 8 }}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
