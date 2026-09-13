'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const REDUCED = '(prefers-reduced-motion: reduce)';
const subscribeReduced = (onChange: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
};

/** True when the viewer prefers reduced motion. False during server rendering. */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);
}

type Reveal = 'idle' | 'pending' | 'in';

/**
 * Observes an element once. `pending` becomes true only on the client, after
 * the observer is live, so server markup (and a no-JavaScript view) is never
 * hidden; `inView` flips true the first time the element intersects.
 */
export function useInViewOnce<T extends Element>(rootMargin = '0px 0px -10% 0px') {
  const ref = useRef<T>(null);
  const [state, setState] = useState<Reveal>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState('in');
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    const frame = requestAnimationFrame(() => setState((s) => (s === 'idle' ? 'pending' : s)));
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, [rootMargin]);

  return { ref, inView: state === 'in', pending: state === 'pending' };
}
