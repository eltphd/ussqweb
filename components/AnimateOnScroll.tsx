'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({ children, delay = 0, className }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
