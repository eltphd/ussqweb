import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatCounter from '@/components/StatCounter';
import SparentSignup from '@/components/SparentSignup';
import Footer from '@/components/Footer';
import { Section, Eyebrow, Coord, Button, Card } from '@/components/ui';

// ─── The institute's properties ──────────────────────────────────────────────
// The institute leads; its properties sit beneath it (brief §5.2, confirmed).
const domains = [
  {
    num: '01',
    name: 'Research & Evidence',
    descriptor: 'Proving what communities already know',
    body:
      'Peer-reviewed research, longitudinal data, and the BASE Framework — the pedagogical counter-architecture to every institution that told a young person their brilliance was a problem.',
    href: '/research',
  },
  {
    num: '02',
    name: 'Atlas ERA Network',
    descriptor: 'Connecting practitioners across the world',
    body:
      'The Education Research Association: the field-building network connecting education researchers, practitioners, and community leaders across global contexts — credentialing brilliance wherever schools are not.',
    href: '/atlas-era',
  },
  {
    num: '03',
    name: 'Atlas Academy',
    descriptor: 'A worldschool for adolescent learners',
    body:
      'The institute’s learning property: cohort-based, BASE-aligned programming for adolescents whose brilliance the conventional classroom was never designed to see.',
    href: '/atlas',
  },
  {
    num: '04',
    name: 'Altered Earth Press',
    descriptor: 'Publishing community-centered stories',
    body:
      'The publishing imprint of US-Squared. Real stories from adolescents and the adults who hold them — grounded in the BASE Framework and rooted in lived experience.',
    href: '/earth',
  },
  {
    num: '05',
    name: 'Sparent Science',
    descriptor: 'Tools for the adults who hold young people',
    body:
      'Research-backed tools for the educators, mentors, caregivers, and coaches who surround young people. A monthly newsletter and podcast with Dr. Erica L. Tartt, PhD.',
    href: '/sparent',
  },
];

const sparentTopics = ['Identity', 'Mental Health', 'Race & Culture', 'Relationships', 'Grief', 'Boundaries'];

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ── Hero: the institute leads ──────────────────────────────── */}
        <section className="hero band-ground" id="top">
          <div className="contours" aria-hidden="true" />
          <div className="hero-mark" aria-hidden="true">
            US²
          </div>
          <div className="container" style={{ position: 'relative' }}>
            <Eyebrow>US-Squared Research Institute · 501(c)(3) · Columbus, Ohio</Eyebrow>
            <h1 className="display-1" style={{ maxWidth: '12ch', marginBottom: 28 }}>
              Protecting adolescent <em>brilliance.</em>
            </h1>
            <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
            <p className="lede measure" style={{ marginBottom: 36 }}>
              US-Squared Research Institute is a justice-centered research institute. We study, fund, and credential
              the brilliance already happening in communities the traditional system cannot see — through Atlas ERA,
              Atlas Academy, Altered Earth Press, Sparent Science, and Feelings Unplugged.
            </p>
            <div className="cluster" style={{ gap: 14 }}>
              <Button href="#domains">Explore the work</Button>
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
          <div className="grid-split" style={{ marginBottom: 64 }}>
            <AnimateOnScroll>
              <Eyebrow>Mission</Eyebrow>
              <h2 className="display-2">
                We find the people <em>already doing the work.</em>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="body measure" style={{ marginBottom: 20 }}>
                The embargo on brilliance is structural. Young people are not failing — they are being failed by
                institutions that were never designed to see them. US-Squared doesn&apos;t build another institution.
                We build the research, the network, and the tools that connect the ones already fighting back.
              </p>
              <p className="body measure">
                We fund practitioners. We affirm communities. We credential learning wherever it actually happens — not
                just in the buildings we control.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.15}>
            <div className="grid-stats-3 hairline-top" style={{ paddingTop: 40 }}>
              <StatCounter value="22,000+" label="Lives touched through network partnerships" />
              <StatCounter value="7,000+" label="Adolescents studied in peer-reviewed research" />
              <StatCounter value="20+" label="Years in education research and practice" />
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── The institute's properties ─────────────────────────────── */}
        <Section id="domains" band="ground">
          <AnimateOnScroll>
            <Eyebrow>The Institute</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 16 }}>
              Five properties. <em>One institute.</em>
            </h2>
            <p className="lede measure-narrow" style={{ marginBottom: 48 }}>
              Each property connects practitioners, funds their work, and credentials the brilliance already happening
              in communities the traditional system cannot see.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="row-list">
              {domains.map((d) => (
                <Link key={d.num} href={d.href} className="row">
                  <span className="row-num">{d.num}</span>
                  <span>
                    <span className="row-title" style={{ display: 'block' }}>
                      {d.name}
                    </span>
                    <span className="row-desc" style={{ display: 'block' }}>
                      {d.body}
                    </span>
                  </span>
                  <span className="row-aside">{d.descriptor} →</span>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── Sparent Science ────────────────────────────────────────── */}
        <Section id="sparent" band="bone">
          <AnimateOnScroll>
            <Eyebrow>A US-Squared newsletter · 05</Eyebrow>
          </AnimateOnScroll>
          <div className="grid-split">
            <div>
              <AnimateOnScroll>
                <h2 className="display-2" style={{ marginBottom: 20 }}>
                  Sparent <em>Science</em>
                </h2>
                <p className="body measure-narrow" style={{ marginBottom: 24 }}>
                  Monthly research-backed tools for the educators, mentors, caregivers, and coaches who surround young
                  people.
                </p>
                <div className="cluster" style={{ gap: 8, marginBottom: 28 }}>
                  {sparentTopics.map((topic) => (
                    <span key={topic} className="chip">
                      {topic}
                    </span>
                  ))}
                </div>
                <SparentSignup />
                <p className="small" style={{ marginTop: 18 }}>
                  <Link href="/sparent" className="btn-link" style={{ color: 'var(--ink-900)' }}>
                    Read the journal →
                  </Link>
                </p>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={0.1}>
              <Card>
                <span className="kicker" style={{ display: 'block', marginBottom: 18 }}>
                  Coming next · Vol. 03 · Issue 12
                </span>
                <h3 className="display-3" style={{ marginBottom: 14 }}>
                  When Your Teenager Won&apos;t Talk
                </h3>
                <p className="body small muted" style={{ marginBottom: 22 }}>
                  Adolescent silence is data, not rejection. This issue breaks down the science of teen withdrawal and
                  gives you three evidence-based approaches for reconnecting without pressure.
                </p>
                <div style={{ borderLeft: '1px solid var(--brass-600)', paddingLeft: 18 }}>
                  <span className="kicker" style={{ display: 'block', marginBottom: 8 }}>
                    Try this
                  </span>
                  <p className="small">
                    Ask one open question today — not &ldquo;How was school?&rdquo; but &ldquo;What&apos;s something
                    you&apos;re thinking about?&rdquo; Then wait.
                  </p>
                </div>
              </Card>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.15}>
            <p className="small muted hairline-top" style={{ marginTop: 40, paddingTop: 24, maxWidth: '62ch' }}>
              Looking for a hands-on tool to pair with this month&apos;s issue?{' '}
              <Link href="/feelings-unplugged" className="btn-link" style={{ color: 'var(--ink-900)' }}>
                Feelings Unplugged
              </Link>{' '}
              is a BASE Framework companion guide for the young people in your care.
            </p>
          </AnimateOnScroll>
        </Section>

        {/* ── Research ───────────────────────────────────────────────── */}
        <Section id="research" band="ground">
          <AnimateOnScroll>
            <Eyebrow>Research &amp; Impact</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 16 }}>
              The data behind <em>the work.</em>
            </h2>
            <p className="lede measure" style={{ marginBottom: 48 }}>
              Our programs aren&apos;t built on assumptions. They&apos;re built on peer-reviewed research, longitudinal
              data, and the lived experiences of the 7,000+ young people whose stories we&apos;ve had the honor of
              studying.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="grid-auto" style={{ marginBottom: 48 }}>
              <Card>
                <span className="kicker" style={{ display: 'block', marginBottom: 12 }}>
                  Peer-reviewed
                </span>
                <h3 className="display-3" style={{ marginBottom: 12 }}>
                  Ten FAQs About Latent Transition Analysis
                </h3>
                <p className="small muted">
                  Nylund-Gibson, K., Garber, A. C., Carter, D. B., Chan, M., Arch, D. A. N., Simon, O., Whaling, K.,
                  Tartt, E., &amp; Lawrie, S. I. (2023). Ten frequently asked questions about latent transition
                  analysis. <i>Psychological Methods, 28</i>(2), 284–300.{' '}
                  <a href="https://doi.org/10.1037/met0000486" target="_blank" rel="noopener noreferrer" className="mono">
                    doi:10.1037/met0000486
                  </a>
                </p>
              </Card>
              <Card>
                <span className="kicker" style={{ display: 'block', marginBottom: 12 }}>
                  Dissertation
                </span>
                <h3 className="display-3" style={{ marginBottom: 12 }}>
                  Unraveling Hopelessness
                </h3>
                <p className="small muted">
                  Tartt, E. L. (2023). <i>Unraveling hopelessness: A latent class analysis of Black adolescent student
                  experiences</i> [Doctoral dissertation, University of California, Santa Barbara]. eScholarship.
                </p>
              </Card>
              <Card>
                <span className="kicker" style={{ display: 'block', marginBottom: 12 }}>
                  BASE Framework
                </span>
                <h3 className="display-3" style={{ marginBottom: 12 }}>
                  Brilliance · Authenticity · Self-Expression · Empowerment
                </h3>
                <p className="small muted">
                  A justice-centered developmental framework for programs serving Black and Brown youth, derived from
                  dissertation research and community practice. The BASE Framework is the pedagogical spine of the
                  institute&apos;s work — the counter-architecture to every institution that told a young person their
                  brilliance was a problem.
                </p>
              </Card>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <blockquote className="pull measure" style={{ marginBottom: 40 }}>
              &ldquo;These young people weren&apos;t hopeless. They were under-resourced, over-surveilled, and
              under-believed. The data just confirmed what they already knew.&rdquo;
              <cite>
                Dr. Erica L. Tartt, PhD · Founder &amp; Research Director, US-Squared Research Institute
              </cite>
            </blockquote>
            <Button href="/research">View all research</Button>
          </AnimateOnScroll>
        </Section>

        {/* ── Connect ────────────────────────────────────────────────── */}
        <Section id="connect-cta" band="paper">
          <AnimateOnScroll>
            <h2 className="display-1" style={{ marginBottom: 24 }}>
              Ready to build <em>something real?</em>
            </h2>
            <hr className="rule" style={{ marginBottom: 48 }} />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="grid-2" style={{ maxWidth: 860, gap: 16 }}>
              {[
                { label: 'Join the network', sub: 'Atlas ERA membership and partnerships', href: '/connect' },
                { label: 'Support the work', sub: 'Brilliance Forward Access Fund', href: '/connect#access-fund' },
                { label: 'Partner with us', sub: 'Research, evaluation, and program design', href: '/connect#contact-form' },
                { label: 'Contact', sub: 'executive@us-squared.org', href: '/connect#contact-form' },
              ].map((t) => (
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

        <Footer />
      </main>
    </>
  );
}
