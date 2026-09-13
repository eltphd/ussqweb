'use client';

import { useState } from 'react';

export default function BaseopsSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="notice" role="status" style={{ maxWidth: 480 }}>
        Thank you! Check your inbox for the BASEops playbook.
      </div>
    );
  }

  return (
    <form
      className="form-subscribe"
      style={{ maxWidth: 480 }}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="baseops-email" className="sr-only">
        Email address
      </label>
      <input
        id="baseops-email"
        className="input"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
      />
      <button type="submit" className="btn btn-primary">
        Download Free →
      </button>
    </form>
  );
}
