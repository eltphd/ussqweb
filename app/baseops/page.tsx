import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatCounter from '@/components/StatCounter';
import BaseopsSignup from '@/components/BaseopsSignup';
import Footer from '@/components/Footer';
import { Section, Eyebrow, Coord, Button, Card } from '@/components/ui';

const modules = [
  {
    num: '01',
    title: 'Grant Systems',
    body: 'Grant tracking spreadsheets, narrative templates, budget justification formats, reporting calendars, and funder relationship CRM built for small-to-mid-size nonprofits.',
  },
  {
    num: '02',
    title: 'Impact Measurement',
    body: 'Logic model templates, pre/post survey tools, data collection workflows, and dashboard frameworks for communicating your work to funders, boards, and your community.',
  },
];

const audiences = ['Community-Based Organizations', 'Small-to-Mid Nonprofits', 'Fiscal Sponsor Projects', 'Early-Stage Orgs'];

export default function BASEopsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground" id="top">
          <div className="contours" aria-hidden="true" />
          <div className="hero-mark" aria-hidden="true">
            B
          </div>
          <div className="container" style={{ position: 'relative' }}>
            <Eyebrow>A US-Squared System · 01</Eyebrow>
            <h1 className="display-1" style={{ maxWidth: '12ch', marginBottom: 28 }}>
              BASEops
            </h1>
            <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
            <p className="lede measure" style={{ marginBottom: 24 }}>
              The scaffold beneath every mission.
            </p>
            <p className="body measure" style={{ marginBottom: 16 }}>
              BASEops is the workforce development network of the worldskool ecosystem. We connect business owners,
              community members, justice-involved individuals, and young people ages 14+ to skill-building pathways
              and economic opportunity. BASEops is where brilliance meets livelihood — the bridge between who you are
              and what you can build.
            </p>
            <p className="body measure" style={{ marginBottom: 36 }}>
              The Learn arm:{' '}
              <Link href="/atlas" className="btn-link">
                Atlas Academy →
              </Link>
            </p>
            <div className="cluster" style={{ gap: 14 }}>
              <Button href="#get-access">Get the playbook</Button>
              <Button href="#modules" variant="ghost">
                See the modules
              </Button>
            </div>
            <div className="grid-stats-3 hairline-top" style={{ marginTop: 48, paddingTop: 32 }}>
              <StatCounter value="40+" label="Orgs using BASEops toolkits" />
            </div>
            <div style={{ marginTop: 48 }}>
              <Coord />
            </div>
          </div>
        </section>

        {/* ── Modules ────────────────────────────────────────────────── */}
        <Section id="modules" band="raised">
          <AnimateOnScroll>
            <Eyebrow>Toolkits</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              The <em>Modules</em>
            </h2>
          </AnimateOnScroll>

          <div className="grid-2">
            {modules.map((mod, i) => (
              <AnimateOnScroll key={mod.num} delay={0.05 * (i + 1)}>
                <Card>
                  <span className="kicker" style={{ display: 'block', marginBottom: 14 }}>
                    Module {mod.num}
                  </span>
                  <h3 className="display-3" style={{ marginBottom: 14 }}>
                    {mod.title}
                  </h3>
                  <p className="small muted" style={{ marginBottom: 22 }}>
                    {mod.body}
                  </p>
                  <Button href="#get-access" variant="link">
                    Download →
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Section>

        {/* ── Who it's for ───────────────────────────────────────────── */}
        <Section id="who-its-for" band="paper">
          <AnimateOnScroll>
            <Eyebrow>Built For</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              Who it&apos;s <em>for</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="grid-4" style={{ marginBottom: 48 }}>
              {audiences.map((org) => (
                <Card key={org} plain>
                  <span className="display-3" style={{ display: 'block' }}>
                    {org}
                  </span>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <blockquote className="pull measure">
              &ldquo;BASEops transformed how we manage grants. We finally have systems that match the scale of our
              ambitions.&rdquo;
              <cite>— [Placeholder Name, Org]</cite>
            </blockquote>
          </AnimateOnScroll>
        </Section>

        {/* ── Get access ─────────────────────────────────────────────── */}
        <Section id="get-access" band="ground">
          <AnimateOnScroll>
            <Eyebrow>Free Access</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 16 }}>
              Get the <em>playbook</em>
            </h2>
            <p className="lede measure-narrow" style={{ marginBottom: 36 }}>
              Download the free BASEops playbook. Zero cost. Built for lean community organizations.
            </p>
            <BaseopsSignup />
          </AnimateOnScroll>

          <div className="mt-8">
            <Link href="/" className="btn btn-link">
              ← Back to US Squared
            </Link>
          </div>
        </Section>

        <Footer />
      </main>
    </>
  );
}
