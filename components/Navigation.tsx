'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Atlas ERA', href: '/atlas-era' },
  { label: 'Atlas Academy', href: '/atlas' },
  { label: 'Feelings Unplugged', href: '/feelings-unplugged' },
  { label: 'Research', href: '/research' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled || menuOpen ? 'var(--ground)' : 'transparent',
          borderBottom: `1px solid ${scrolled ? 'var(--brass-600)' : 'transparent'}`,
          color: 'var(--on-ground)',
          transition: 'background-color var(--motion-base) ease, border-color var(--motion-base) ease',
        }}
      >
        <div
          className="container"
          style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}
        >
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 12, flexShrink: 0 }}>
            <span className="mark">US²</span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 19,
                letterSpacing: '-0.005em',
                whiteSpace: 'nowrap',
              }}
            >
              US-Squared Research Institute
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className="kicker"
                  style={{
                    textDecoration: 'none',
                    color: active ? 'var(--on-ground)' : 'var(--on-ground-muted)',
                    borderBottom: `1px solid ${active ? 'var(--brass-600)' : 'transparent'}`,
                    paddingBottom: 4,
                    transition: 'color var(--motion-fast) ease',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/connect" className="btn btn-primary" style={{ minHeight: 40, padding: '8px 16px' }}>
              Connect
            </Link>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              padding: '8px 12px',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span className="kicker" style={{ color: 'var(--on-ground)' }}>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'var(--ground)',
            color: 'var(--on-ground)',
            display: 'flex',
            flexDirection: 'column',
            padding: '96px 24px 40px',
          }}
        >
          <nav aria-label="Mobile" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 380,
                  fontSize: 32,
                  lineHeight: 1.1,
                  textDecoration: 'none',
                  padding: '18px 0',
                  borderBottom: '1px solid var(--line)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <span>{link.label}</span>
                <span className="row-num">{String(i + 1).padStart(2, '0')}</span>
              </Link>
            ))}
            <Link href="/connect" onClick={() => setMenuOpen(false)} className="btn btn-primary mt-4">
              Connect
            </Link>
          </nav>
          <div className="coord" style={{ marginTop: 'auto' }}>
            EIN 92-3221304 · 501(c)(3)
          </div>
        </div>
      )}
    </>
  );
}
