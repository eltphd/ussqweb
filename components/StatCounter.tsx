'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface StatCounterProps {
  value: string;
  label: string;
}

function parseValue(value: string): { numeric: number; suffix: string } {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return { numeric: 0, suffix: value };
  return { numeric: parseInt(match[1].replace(/,/g, ''), 10), suffix: match[2] || '' };
}

const formatNumber = (n: number) => n.toLocaleString('en-US');

/**
 * Renders the final value in the server markup, so the figure is correct with
 * JavaScript off, before hydration, and for crawlers. The count-up runs only
 * once the element is in view and only when motion is allowed.
 */
export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' });
  const reduceMotion = useReducedMotion();
  const { numeric, suffix } = parseValue(value);
  const [displayValue, setDisplayValue] = useState(numeric);

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const duration = 900;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * numeric));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    setDisplayValue(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, numeric, reduceMotion]);

  return (
    <div ref={ref} className="stat">
      <div className="stat-value" aria-label={`${value} ${label}`}>
        <span aria-hidden="true">
          {formatNumber(displayValue)}
          {suffix}
        </span>
      </div>
      <div className="stat-label" aria-hidden="true">{label}</div>
    </div>
  );
}
