import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';
import { Section, Eyebrow, Coord, Button, Card } from '@/components/ui';

const credentials = [
  'UCSB · PhD in Education 2023',
  'GWU · MA Educational Technology',
  '20+ Years in Education',
  'Quantitative Methods · LCA',
  'AI in Education',
];

const orgFacts = [
  { label: 'EIN', value: '92-3221304' },
  { label: 'Status', value: '501(c)(3) Nonprofit' },
  { label: 'Founded', value: '2020' },
  { label: 'Location', value: 'Columbus, Ohio' },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground">
          <div className="contours" aria-hidden="true" />
          <div className="container" style={{ position: 'relative' }}>
            <Eyebrow>Who We Are</Eyebrow>
            <h1 className="display-1" style={{ maxWidth: '12ch', marginBottom: 28 }}>
              About <em>US-Squared.</em>
            </h1>
            <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
            <p className="lede measure" style={{ marginBottom: 36 }}>
              A justice-centered research institute protecting the brilliance of young people through worldskool,
              research, and systems that hold them.
            </p>
            <div className="cluster" style={{ gap: 14 }}>
              <Button href="/research">View the research</Button>
              <Button href="/connect" variant="ghost">
                Connect with the institute
              </Button>
            </div>
            <div style={{ marginTop: 56 }}>
              <Coord />
            </div>
          </div>
        </section>

        {/* ── Mission ────────────────────────────────────────────────── */}
        <Section id="mission" band="paper">
          <div className="grid-split">
            <AnimateOnScroll>
              <Eyebrow>About the Institute</Eyebrow>
              <h2 className="display-2" style={{ marginBottom: 28 }}>
                Our <em>mission.</em>
              </h2>
              <hr className="rule" style={{ maxWidth: 120 }} />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="body measure" style={{ marginBottom: 20 }}>
                US-Squared Research Institute exists to protect the brilliance of adolescents — especially Black and
                Brown young people — by building the justice-centered programs, tools, and systems that ensure they
                don&apos;t have to choose between being themselves and being safe.
              </p>
              <p className="body measure" style={{ marginBottom: 20 }}>
                We believe that brilliance is not earned through suffering — it is inherent. And we believe that
                organizations, educators, and communities have a responsibility to build the infrastructure that allows
                that brilliance to flourish.
              </p>
              <p className="body measure">
                Our work is grounded in peer-reviewed research, community accountability, and a relentless commitment
                to the young people who deserve better than what they&apos;ve been given.
              </p>
            </AnimateOnScroll>
          </div>
        </Section>

        {/* ── Leadership ─────────────────────────────────────────────── */}
        <Section id="leadership" band="ground">
          <AnimateOnScroll>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 48 }}>
              Who <em>leads us.</em>
            </h2>
          </AnimateOnScroll>

          <div className="grid-leadership">
            <AnimateOnScroll delay={0.05}>
              <div className="photo" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/downloads/erica image.webp"
                  alt="Dr. Erica L. Tartt, PhD — Founder & Research Director, US-Squared Research Institute"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 860px) 100vw, 33vw"
                  priority
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <Card>
                <h3 className="display-3" style={{ marginBottom: 8 }}>
                  Dr. Erica L. Tartt, PhD
                </h3>
                <span className="kicker" style={{ display: 'block', marginBottom: 28 }}>
                  Founder &amp; Research Director
                </span>

                <p className="body" style={{ marginBottom: 16 }}>
                  Dr. Tartt holds a PhD in Education from the University of California, Santa Barbara (2023),
                  where her research focused on culture, development, and quantitative methods. Her dissertation
                  applied Latent Class Analysis to CDC data from 7,000+ Black adolescents, identifying three classes
                  of student experience shaped by exposure to racial discrimination and directly challenging
                  deficit-based frameworks in youth research.
                </p>
                <p className="body" style={{ marginBottom: 16 }}>
                  She is an education researcher, instructional technologist, and AI-in-education strategist with
                  nearly two decades spanning K–12 classrooms, higher education faculty development, and nonprofit
                  innovation. Her specializations include Latent Class Analysis, mixture modeling, and
                  mixed-methods research design — tools she uses to prove what communities already know.
                </p>
                <p className="body" style={{ marginBottom: 16 }}>
                  Dr. Tartt does not run programs — she designs the conditions that make them possible. Her work
                  begins where the research ends: identifying the structural gaps between brilliance and economic
                  power, then building the networks across education, publishing, and workforce that close them.
                  She is the architect of ecosystems. The delivery belongs to the people inside them.
                </p>
                <p className="body">
                  She is currently building Atlas ERA — The Education Research Association — a global
                  field-building network that connects education practitioners, funds their work, and credentials
                  the brilliance happening in communities the traditional system cannot see.
                </p>

                <div className="cluster hairline-top" style={{ gap: 8, marginTop: 28, paddingTop: 24 }}>
                  {credentials.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </AnimateOnScroll>
          </div>
        </Section>

        {/* ── Organization ───────────────────────────────────────────── */}
        <Section id="organization" band="bone">
          <AnimateOnScroll>
            <Eyebrow>Organization</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 48 }}>
              By the <em>numbers.</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="grid-4">
              {orgFacts.map((fact) => (
                <Card key={fact.label} plain>
                  <span className="kicker" style={{ display: 'block', marginBottom: 12 }}>
                    {fact.label}
                  </span>
                  <span className="display-3" style={{ display: 'block' }}>
                    {fact.value}
                  </span>
                </Card>
              ))}
            </div>

            <p className="small muted hairline-top" style={{ marginTop: 32, paddingTop: 20 }}>
              <Coord>Columbus, Ohio · executive@us-squared.org</Coord>
            </p>
          </AnimateOnScroll>
        </Section>

        {/* ── Partners & Funders ─────────────────────────────────────── */}
        <Section id="support" band="ground">
          <AnimateOnScroll>
            <Eyebrow>Support</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 32 }}>
              Our partners <em>&amp; funders.</em>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <Card plain>
              <span className="kicker" style={{ display: 'block', marginBottom: 12 }}>
                Coming Soon
              </span>
              <p className="small muted" style={{ maxWidth: '62ch' }}>
                Partner and funder logos will appear here. Interested in supporting our work?{' '}
                <Link href="/connect" className="btn-link">
                  Get in touch.
                </Link>
              </p>
            </Card>
          </AnimateOnScroll>
        </Section>

        <Footer />
      </main>
    </>
  );
}
