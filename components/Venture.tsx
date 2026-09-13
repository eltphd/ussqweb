'use client';

import { useEffect } from 'react';

export type VentureKey = 'ussq' | 'atlas' | 'ma' | 'fu' | 'press' | 'sparent';

interface VentureProps {
  venture: VentureKey;
  children: React.ReactNode;
}

/**
 * Scopes a sub-brand route to its own ground/signal pair while the chassis
 * holds. The wrapper carries data-venture for server rendering (no flash);
 * the effect mirrors it onto <html> so the document background matches and
 * restores the institute's pair when the route unmounts.
 */
export default function Venture({ venture, children }: VentureProps) {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.dataset.venture;
    root.dataset.venture = venture;
    return () => {
      root.dataset.venture = previous ?? 'ussq';
    };
  }, [venture]);

  return (
    <div className="venture" data-venture={venture}>
      {children}
    </div>
  );
}
