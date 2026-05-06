'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: string;
  label: string;
}

function parseValue(value: string): { numeric: number; suffix: string } {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return { numeric: 0, suffix: value };
  const numeric = parseInt(match[1].replace(/,/g, ''), 10);
  const suffix = match[2] || '';
  return { numeric, suffix };
}

function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' });
  const [displayValue, setDisplayValue] = useState(0);
  const { numeric, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * numeric));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, numeric]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(40px, 6vw, 72px)',
          color: '#D4A017',
          lineHeight: 1,
          letterSpacing: '0.02em',
        }}
      >
        {formatNumber(displayValue)}{suffix}
      </div>
      <div
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 600,
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888',
          marginTop: '6px',
        }}
      >
        {label}
      </div>
    </div>
  );
}
