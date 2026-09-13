'use client';

import { useEffect, useState } from 'react';
import { useInViewOnce, useReducedMotion } from '@/lib/motion';

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
 * once the element is in view and only when motion is allowed, and always
 * lands on the exact final value.
 */
export default function StatCounter({ value, label }: StatCounterProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>('-40px 0px');
  const reduceMotion = useReducedMotion();
  const { numeric, suffix } = parseValue(value);
  const [displayValue, setDisplayValue] = useState(numeric);

  useEffect(() => {
    if (!inView || reduceMotion || numeric === 0) return;
    const duration = 900;
    let start = 0;
    let frame = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(progress >= 1 ? numeric : Math.round(eased * numeric));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const settle = window.setTimeout(() => setDisplayValue(numeric), duration + 50);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      setDisplayValue(numeric);
    };
  }, [inView, numeric, reduceMotion]);

  return (
    <div ref={ref} className="stat">
      <div className="stat-value">
        <span aria-hidden="true">
          {formatNumber(displayValue)}
          {suffix}
        </span>
        <span className="sr-only">{value}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
