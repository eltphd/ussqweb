import Link from 'next/link';
import type { ReactNode } from 'react';

type Band = 'ground' | 'raised' | 'paper' | 'bone' | 'ink';

export function Section({
  id,
  band = 'ground',
  tight = false,
  className = '',
  children,
}: {
  id?: string;
  band?: Band;
  tight?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${tight ? 'band-tight' : 'band'} band-${band} ${className}`.trim()}>
      <div className="container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`eyebrow ${className}`.trim()}>{children}</span>;
}

export function Coord({ children = '39.9612° N · 82.9988° W' }: { children?: ReactNode }) {
  return <span className="coord">{children}</span>;
}

type ButtonVariant = 'primary' | 'ghost' | 'link';

export function Button({
  href,
  variant = 'primary',
  block = false,
  className = '',
  children,
  ...rest
}: {
  href?: string;
  variant?: ButtonVariant;
  block?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>) {
  const cls = `btn btn-${variant} ${block ? 'btn-block' : ''} ${className}`.trim();
  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    return external ? (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function Card({ children, className = '', plain = false }: { children: ReactNode; className?: string; plain?: boolean }) {
  return <div className={`${plain ? 'card-plain' : 'card'} ${className}`.trim()}>{children}</div>;
}

export function Meter({ value, label, direction }: { value: number; label: string; direction?: 'up' | 'down' | 'steady' }) {
  const arrow = direction === 'up' ? '↑' : direction === 'down' ? '↓' : direction === 'steady' ? '→' : '';
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="stack" style={{ gap: 8 }}>
      <div className="label" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{label}</span>
        <span className="mono">{arrow} {pct}%</span>
      </div>
      <div className="meter" role="img" aria-label={`${label}: ${pct} percent${direction ? `, trending ${direction}` : ''}`}>
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
