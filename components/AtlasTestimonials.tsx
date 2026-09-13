'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export default function AtlasTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <div style={{ maxWidth: 720 }}>
      <div aria-live="polite">
        <blockquote className="pull" style={{ marginBottom: 28 }}>
          &ldquo;{current.quote}&rdquo;
          <cite>
            {current.name} · {current.role}
          </cite>
        </blockquote>
      </div>

      {testimonials.length > 1 && (
      <div className="cluster" role="group" aria-label="Choose a testimonial" style={{ gap: 8 }}>
        {testimonials.map((t, i) => (
          <Button
            key={t.role}
            type="button"
            variant={i === active ? 'primary' : 'ghost'}
            aria-pressed={i === active}
            aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
            onClick={() => setActive(i)}
          >
            {String(i + 1).padStart(2, '0')}
          </Button>
        ))}
      </div>
      )}
    </div>
  );
}
