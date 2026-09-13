import Link from 'next/link';

const footerLinks = [
  { label: 'Research', href: '/research' },
  { label: 'About', href: '/about' },
  { label: 'Atlas ERA', href: '/atlas-era' },
  { label: 'Atlas Academy', href: '/atlas' },
  { label: 'Altered Earth Press', href: '/earth' },
  { label: 'Sparent Science', href: '/sparent' },
  { label: 'Feelings Unplugged', href: '/feelings-unplugged' },
  { label: 'Connect', href: '/connect' },
];

export default function Footer() {
  return (
    <footer className="band-ground" style={{ borderTop: '1px solid var(--brass-600)' }}>
      <div className="container" style={{ padding: '56px 24px 32px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 40,
          }}
        >
          <div className="stack" style={{ gap: 10 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span className="mark">US²</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 20 }}>
                US-Squared Research Institute
              </span>
            </Link>
            <span className="coord">39.9612° N · 82.9988° W · Columbus, Ohio</span>
          </div>

          <nav aria-label="Footer" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', columnGap: 32, rowGap: 12 }}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="kicker" style={{ textDecoration: 'none', color: 'var(--on-ground-muted)' }}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <hr className="hairline" style={{ marginBottom: 24 }} />

        {/* Entity attribution (brief §5.3, confirmed Sept 13): the institute is the 501(c)(3); every property is a program of it. */}
        <div className="kicker" style={{ color: 'var(--on-ground-muted)', marginBottom: 16, lineHeight: 1.8 }}>
          Atlas ERA — The Education Research Association · Atlas Academy · Altered Earth Press · Sparent Science
          <br />
          Programs of US-Squared Research Institute
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <p className="small muted" style={{ maxWidth: 560 }}>
            US-Squared Research Institute is a 501(c)(3) nonprofit. EIN 92-3221304. All contributions are
            tax-deductible to the extent allowed by law.
          </p>
          <p className="mono small muted" style={{ textAlign: 'right', lineHeight: 1.8 }}>
            Columbus, Ohio
            <br />
            <a href="mailto:executive@us-squared.org" style={{ textDecoration: 'none' }}>
              executive@us-squared.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
