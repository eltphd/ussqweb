'use client';

import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'ERA Network', href: '/atlas-era' },
  { label: 'Feelings Unplugged', href: '/feelings-unplugged' },
  { label: 'Sparent Science', href: '/sparent' },
  { label: 'Research', href: '/research' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 80));
  }, [scrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? '#0E0E0E' : 'transparent',
          borderBottom: scrolled ? '3px solid #D4A017' : '3px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '22px',
              color: '#F4F1EC',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            US² | Atlas ERA
          </Link>

          {/* Desktop Nav */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '28px' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#A8A8A8',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#F4F1EC'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#A8A8A8'; }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/connect"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F4F1EC',
                backgroundColor: '#D4A017',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: 0,
                display: 'inline-block',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#e03000'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#D4A017'; }}
            >
              Join the Network
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: '#F4F1EC',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: '#F4F1EC',
                transition: 'opacity 0.2s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: '#F4F1EC',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#0E0E0E',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '80px 32px 48px',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '32px',
                  color: '#F4F1EC',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid #1A1A1A',
                  paddingBottom: '20px',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/connect"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '32px',
                color: '#F4F1EC',
                backgroundColor: '#D4A017',
                textDecoration: 'none',
                padding: '12px 24px',
                display: 'inline-block',
                marginTop: '8px',
                letterSpacing: '0.05em',
              }}
            >
              Join the Network
            </Link>
          </nav>
          <div
            style={{
              marginTop: 'auto',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '10px',
              color: '#555555',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            EIN 92-3221304 · 501(c)(3) Nonprofit
          </div>
        </div>
      )}
    </>
  );
}
