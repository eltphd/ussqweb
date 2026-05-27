import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0E0E0E', borderTop: '3px solid #D4A017' }}>
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
              color: '#F4F1EC',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            US² | Atlas ERA
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
              { label: 'Research', href: '/research' },
              { label: 'About', href: '/about' },
              { label: 'Atlas Academy', href: '/atlas' },
              { label: 'Atlas ERA', href: '/atlas-era' },
              { label: 'Altered Earth Press', href: '/earth' },
              { label: 'Sparent Science', href: '/sparent' },
              { label: 'Feelings Unplugged', href: '/feelings-unplugged' },
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
          {/* TODO: Replace href="#" with real URLs once owner supplies them — see Part 3 Assets 3 (Instagram) and 4 (LinkedIn) */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="#" /* TODO: Replace with Instagram profile URL — Asset 3 */
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
              Instagram
            </a>
            <a
              href="#" /* TODO: Replace with LinkedIn profile URL — Asset 4 */
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
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#1A1A1A', marginBottom: '24px' }} />

        {/* Atlas ERA tagline */}
        <div
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#555555',
            marginBottom: '16px',
          }}
        >
          Atlas ERA — The Education Research Association
          <br />
          A US-Squared Research Institute Initiative
        </div>

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
              fontFamily: 'Barlow, sans-serif',
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
            Columbus, Ohio
            <br />
            executive@us-squared.org
          </p>
        </div>
      </div>
    </footer>
  );
}
