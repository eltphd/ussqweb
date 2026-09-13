'use client';

import { useInViewOnce, useReducedMotion } from '@/lib/motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * A short fade-and-lift as content enters the viewport. Content is visible in
 * the server markup and stays visible with JavaScript off or reduced motion;
 * the hidden state is only applied on the client, once the observer is live.
 */
export default function AnimateOnScroll({ children, delay = 0, className }: AnimateOnScrollProps) {
  const { ref, inView, pending } = useInViewOnce<HTMLDivElement>();
  const reduceMotion = useReducedMotion();
  const cls = ['reveal', !reduceMotion && pending ? 'reveal-pending' : '', !reduceMotion && inView ? 'reveal-in' : '', className ?? '']
    .filter(Boolean)
    .join(' ');
  return (
    <div ref={ref} className={cls} style={delay ? { transitionDelay: `${Math.min(delay, 0.2)}s` } : undefined}>
      {children}
    </div>
  );
}
