import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ConnectForm from '@/components/ConnectForm';
import Footer from '@/components/Footer';
import { Section, Eyebrow, Coord, Button, Card } from '@/components/ui';

const ctaTiles = [
  { label: 'Partner With Us', sub: 'Funders, fiscal sponsors, program partners', href: '#contact-form' },
  { label: 'Apply to a Program', sub: 'Atlas Academy, Altered Earth Press', href: '/atlas' },
  { label: 'Support Our Work', sub: 'Donations, grants, in-kind', href: '#access-fund' },
  { label: 'Contact Us', sub: 'General inquiries, media, speaking', href: '#contact-form' },
];

const directContact = [
  { label: 'Email', value: 'executive@us-squared.org', href: 'mailto:executive@us-squared.org' },
  { label: 'Address', value: 'Columbus, Ohio' },
  { label: 'EIN', value: '92-3221304' },
  { label: 'Status', value: '501(c)(3) Nonprofit' },
];

export default function ConnectPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground">
          <div className="contours" aria-hidden="true" />
          <div className="container" style={{ position: 'relative' }}>
            <Eyebrow>Connect</Eyebrow>
            <h1 className="display-1" style={{ maxWidth: '12ch', marginBottom: 28 }}>
              Let&apos;s build <em>something real.</em>
            </h1>
            <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
            <p className="lede measure" style={{ marginBottom: 36 }}>
              Whether you&apos;re a funder, partner, youth applicant, educator, or just someone who believes in this
              work — we want to hear from you.
            </p>
            <div className="cluster" style={{ gap: 14 }}>
              <Button href="#contact-form">Send a message</Button>
              <Button href="#access-fund" variant="ghost">
                Support the work
              </Button>
            </div>
            <div style={{ marginTop: 56 }}>
              <Coord />
            </div>
          </div>
        </section>

        {/* ── How can we help ────────────────────────────────────────── */}
        <Section id="how-can-we-help" band="paper">
          <AnimateOnScroll>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              How can we <em>help?</em>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="grid-2" style={{ maxWidth: 860, gap: 16 }}>
              {ctaTiles.map((t) => (
                <Link key={t.label} href={t.href} className="tile">
                  <span className="display-3" style={{ display: 'block', marginBottom: 6 }}>
                    {t.label} →
                  </span>
                  <span className="kicker">{t.sub}</span>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── Brilliance Forward Access Fund ─────────────────────────── */}
        <Section id="access-fund" band="ground">
          <hr className="rule mb-6" />
          <AnimateOnScroll>
            <Eyebrow>Giving Category</Eyebrow>
            <h2 className="display-2" style={{ maxWidth: '14ch', marginBottom: 24 }}>
              Brilliance Forward <em>Access Fund</em>
            </h2>
            <p className="lede measure-narrow" style={{ marginBottom: 16 }}>
              Your gift places a copy of Feelings Unplugged in the hands of a young person who cannot afford one.
            </p>
            <p className="body muted measure-narrow" style={{ marginBottom: 32 }}>
              Every dollar goes directly to subsidized copies and distribution. No overhead, no middleman. This is a
              named giving category of US-Squared Research Institute — a 501(c)(3) nonprofit. All contributions are
              tax-deductible to the extent allowed by law.
            </p>
            <div className="cluster" style={{ gap: 14 }}>
              <Button href="mailto:executive@us-squared.org?subject=Brilliance Forward Access Fund — Donation">
                Give to the Access Fund →
              </Button>
              <Button href="/feelings-unplugged" variant="ghost">
                Learn About Feelings Unplugged →
              </Button>
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── Contact form + direct contact ──────────────────────────── */}
        <Section id="contact-form" band="raised">
          <div className="grid-split-rev">
            <div>
              <AnimateOnScroll>
                <Eyebrow>Send a Message</Eyebrow>
                <h2 className="display-2" style={{ marginBottom: 32 }}>
                  Get in <em>touch</em>
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <ConnectForm />
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={0.15}>
              <h3 className="display-3" style={{ marginBottom: 24 }}>
                Direct Contact
              </h3>
              <div className="stack" style={{ gap: 20 }}>
                {directContact.map((item) => (
                  <div key={item.label}>
                    <span className="kicker" style={{ display: 'block', marginBottom: 4 }}>
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="body">
                        {item.value}
                      </a>
                    ) : (
                      <span className="body">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <Card className="mt-6">
                <p className="small muted">
                  US-Squared Research Institute is a 501(c)(3) nonprofit. EIN 92-3221304. All contributions are
                  tax-deductible to the extent allowed by law.
                </p>
              </Card>
            </AnimateOnScroll>
          </div>
        </Section>

        <Footer />
      </main>
    </>
  );
}
