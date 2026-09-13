import type { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatCounter from '@/components/StatCounter';
import Footer from '@/components/Footer';
import { Section, Eyebrow, Coord, Button, Card } from '@/components/ui';

// ─── Publications ────────────────────────────────────────────────────────────
const publications: {
  type: string;
  title: string;
  citation: ReactNode;
  notes: string;
  link: string | null;
}[] = [
  {
    type: 'Journal Article · 2023',
    title: 'Ten Frequently Asked Questions About Latent Transition Analysis',
    citation: (
      <>
        Nylund-Gibson, K., Garber, A. C., Carter, D. B., Chan, M., Arch, D. A. N., Simon, O., Whaling, K., Tartt,
        E., &amp; Lawrie, S. I. (2023). Ten frequently asked questions about latent transition analysis.{' '}
        <i>Psychological Methods, 28</i>(2), 284–300.{' '}
        <a href="https://doi.org/10.1037/met0000486" target="_blank" rel="noopener noreferrer" className="mono">
          https://doi.org/10.1037/met0000486
        </a>
      </>
    ),
    notes:
      'Foundational methodological reference for latent transition analysis — the statistical approach underlying research on adolescent mental health profiles and trajectory shifts.',
    link: 'https://doi.org/10.1037/met0000486',
  },
  {
    type: 'Doctoral Dissertation · 2023',
    title: 'Unraveling Hopelessness: A Latent Class Analysis of Black Adolescent Student Experiences',
    citation: (
      <>
        Tartt, E. L. (2023). <i>Unraveling hopelessness: A latent class analysis of Black adolescent student experiences</i>{' '}
        [Doctoral dissertation, University of California, Santa Barbara]. eScholarship.
      </>
    ),
    notes:
      'Using CDC 2021 ABES data, identified three classes of Black adolescents by exposure to racial discrimination, each with distinct patterns of school experience, hopelessness, and mental health — challenging deficit-based narratives and informing the BASE Framework.',
    link: null,
  },
  {
    type: 'Book / Practice Publication · 2026',
    title: 'Feelings Unplugged: A Guided Journal for Understanding Your Emotions',
    citation:
      'Tartt, E. L. (2026). Feelings Unplugged. US-Squared Research Institute. Available via IngramSpark and direct from the author.',
    notes:
      'A BASE Framework companion publication translating peer-reviewed research on adolescent emotional suppression into an accessible guide for youth and the adults who support them.',
    link: '/feelings-unplugged',
  },
];

// ─── The BASE Framework ──────────────────────────────────────────────────────
const baseFramework = [
  {
    letter: 'B',
    word: 'Brilliance',
    body:
      'Every young person arrives with a form of genius. Our programs are designed to surface, name, and build on that brilliance — not remediate deficits.',
  },
  {
    letter: 'A',
    word: 'Authenticity',
    body:
      'Youth are most engaged and resilient when allowed to show up as their full selves. Authenticity is not a soft skill — it is a developmental necessity.',
  },
  {
    letter: 'S',
    word: 'Self-Expression',
    body:
      'Art, writing, movement, and voice are not supplements to learning — they are the primary vehicles through which young people process, integrate, and share their experiences.',
  },
  {
    letter: 'E',
    word: 'Empowerment',
    body:
      'Programs must transfer agency, not create dependency. Everything we build is designed to make itself unnecessary — because self-determination is the goal.',
  },
];

export default function ResearchPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground">
          <div className="contours" aria-hidden="true" />
          <div className="hero-mark" aria-hidden="true">
            7K+
          </div>
          <div className="container" style={{ position: 'relative' }}>
            <Eyebrow>Research &amp; Impact</Eyebrow>
            <h1 className="display-1" style={{ maxWidth: '12ch', marginBottom: 28 }}>
              The data behind <em>the work.</em>
            </h1>
            <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
            <p className="lede measure" style={{ marginBottom: 36 }}>
              US-Squared programs are built on peer-reviewed research, longitudinal data, and the lived experiences of
              the 7,000+ young people whose stories shaped our framework.
            </p>
            <div className="cluster" style={{ gap: 14 }}>
              <Button href="#publications">Read the publications</Button>
              <Button href="#base" variant="ghost">
                The BASE Framework
              </Button>
            </div>
            <div style={{ marginTop: 56 }}>
              <Coord />
            </div>
          </div>
        </section>

        {/* ── Impact stats ───────────────────────────────────────────── */}
        <Section band="ground" tight>
          <AnimateOnScroll>
            <div className="grid-4 hairline-top" style={{ paddingTop: 40 }}>
              <StatCounter value="7,000+" label="Youth Studied in Peer-Reviewed Research" />
              <StatCounter value="5" label="Institute properties" />
              <StatCounter value="20+" label="Years in Education" />
              <StatCounter value="3+" label="Peer-Reviewed Studies" />
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── Publications ───────────────────────────────────────────── */}
        <Section id="publications" band="paper">
          <AnimateOnScroll>
            <Eyebrow>Publications</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 48 }}>
              Peer-reviewed <em>work.</em>
            </h2>
          </AnimateOnScroll>

          <div className="grid-3">
            {publications.map((pub, i) => (
              <AnimateOnScroll key={pub.title} delay={i * 0.05}>
                <Card>
                  <span className="kicker" style={{ display: 'block', marginBottom: 12 }}>
                    {pub.type}
                  </span>
                  <h3 className="display-3" style={{ marginBottom: 14 }}>
                    {pub.title}
                  </h3>
                  <p className="small muted" style={{ marginBottom: 14 }}>
                    {pub.citation}
                  </p>
                  <p className="body small" style={{ marginBottom: pub.link ? 20 : 0 }}>
                    {pub.notes}
                  </p>
                  {pub.link && (
                    <Button href={pub.link} variant="link">
                      Learn More →
                    </Button>
                  )}
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Section>

        {/* ── The BASE Framework ─────────────────────────────────────── */}
        <Section id="base" band="ground">
          <AnimateOnScroll>
            <Eyebrow>The Framework</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 16 }}>
              The BASE <em>Framework.</em>
            </h2>
            <p className="lede measure-narrow" style={{ marginBottom: 48 }}>
              Four principles derived from dissertation research and 20+ years of educational practice. BASE is the
              conceptual spine running through every US-Squared program.
            </p>
          </AnimateOnScroll>

          <div className="grid-2">
            {baseFramework.map((item, i) => (
              <AnimateOnScroll key={item.letter} delay={i * 0.06}>
                <Card plain>
                  <span className="display-1" aria-hidden="true" style={{ display: 'block', marginBottom: 16 }}>
                    {item.letter}
                  </span>
                  <hr className="rule" style={{ maxWidth: 80, marginBottom: 20 }} />
                  <h3 className="display-3" style={{ marginBottom: 12 }}>
                    {item.word}
                  </h3>
                  <p className="body muted" style={{ maxWidth: '48ch' }}>
                    {item.body}
                  </p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Section>

        {/* ── Impact brief ───────────────────────────────────────────── */}
        <Section id="brief" band="bone">
          <AnimateOnScroll>
            <Eyebrow>Impact Brief</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 20 }}>
              Download <em>the brief.</em>
            </h2>
            <p className="lede measure-narrow" style={{ marginBottom: 32 }}>
              One-page summary of our research, outcomes, and program data. Ideal for funders, partners, and program
              evaluators.
            </p>
            <div className="cluster" style={{ gap: 14 }}>
              {/* TODO: Enable Download Impact Brief once PDF asset is ready — see Part 3 Asset list */}
              <Button type="button" disabled aria-disabled="true" style={{ cursor: 'not-allowed', opacity: 0.6 }}>
                Coming Soon
              </Button>
              <Button href="/connect" variant="ghost">
                Contact for Partnership
              </Button>
            </div>
          </AnimateOnScroll>
        </Section>

        <Footer />
      </main>
    </>
  );
}
