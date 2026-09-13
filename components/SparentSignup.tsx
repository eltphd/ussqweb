'use client';

import { useState } from 'react';

export default function SparentSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="notice" role="status">
        Thank you. You&apos;re on the list.
      </div>
    );
  }

  return (
    <form
      className="form-subscribe"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="sparent-email" className="sr-only">
        Email address
      </label>
      <input
        id="sparent-email"
        className="input"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
      />
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  );
}
