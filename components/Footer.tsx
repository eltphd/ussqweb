import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', borderTop: '3px solid #FF4B1F' }}>
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '48px 24px 32px',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '40px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '22px',
              color: '#F0EDE8',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            US SQUARED
          </Link>

          {/* Nav links */}
          <nav
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            {[
              { label: 'Programs', href: '/#programs' },
              { label: 'Research', href: '/research' },
              { label: 'About', href: '/about' },
              { label: 'BASEops', href: '/baseops' },
              { label: 'Atlas Academy', href: '/atlas' },
              { label: 'Altered.Earth', href: '/earth' },
              { label: 'Sparent Science', href: '/sparent' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#555555',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Instagram', 'LinkedIn'].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#555555',
                  textDecoration: 'none',
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#1A1A1A', marginBottom: '24px' }} />

        {/* Legal */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <p
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '12px',
              color: '#555555',
              lineHeight: 1.6,
              maxWidth: '560px',
            }}
          >
            US-Squared Research Institute is a 501(c)(3) nonprofit. EIN 92-3221304. All contributions are
            tax-deductible to the extent allowed by law.
          </p>
          <p
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 600,
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#555555',
              textAlign: 'right',
            }}
          >
            51 E Hocking St · Canal Winchester, OH 43110
            <br />
            info@us-squared.org
          </p>
        </div>
      </div>
    </footer>
  );
}
