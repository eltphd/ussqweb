'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';

export default function ConnectForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="notice" role="status">
        Thank you for reaching out. We&apos;ll be in touch within 3–5 business days.
      </div>
    );
  }

  return (
    <form
      className="stack"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="field">
        <label htmlFor="connect-name" className="label">
          Full Name
        </label>
        <input
          id="connect-name"
          className="input"
          type="text"
          placeholder="Your name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
          autoComplete="name"
        />
      </div>

      <div className="field">
        <label htmlFor="connect-email" className="label">
          Email
        </label>
        <input
          id="connect-email"
          className="input"
          type="email"
          placeholder="your@email.com"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
          autoComplete="email"
        />
      </div>

      <div className="field">
        <label htmlFor="connect-role" className="label">
          I Am A
        </label>
        <select
          id="connect-role"
          className="select"
          value={formState.role}
          onChange={(e) => setFormState({ ...formState, role: e.target.value })}
          required
        >
          <option value="">Select your role</option>
          <option value="funder">Funder / Partner</option>
          <option value="youth">Youth Applicant</option>
          <option value="educator">Educator / Mentor</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="connect-message" className="label">
          Message
        </label>
        <textarea
          id="connect-message"
          className="textarea"
          placeholder="Tell us what you're looking for..."
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          required
          rows={5}
        />
      </div>

      <div className="cluster">
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
