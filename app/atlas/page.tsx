import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import AtlasTestimonials, { type Testimonial } from '@/components/AtlasTestimonials';
import Venture from '@/components/Venture';
import Footer from '@/components/Footer';
import { Section, Eyebrow, Coord, Button } from '@/components/ui';

const weekData = [
  { week: '01', title: 'Who Am I?', body: 'Identity mapping, values, and the stories we carry.' },
  { week: '02', title: 'Where Am I From?', body: 'Family systems, cultural roots, and community.' },
  { week: '03', title: 'What Do I Know?', body: 'Knowledge inventory, skills, and lived expertise.' },
  { week: '04', title: 'What Blocks Me?', body: 'Systemic barriers, internalized limits, and design.' },
  { week: '05', title: 'Who Do I Trust?', body: 'Relationships, networks, and community building.' },
  { week: '06', title: 'What Do I Build?', body: 'Project design, prototyping, and iteration.' },
  { week: '07', title: 'How Do I Advocate?', body: 'Voice, policy, storytelling, and public speaking.' },
  { week: '08', title: 'Who Came Before?', body: 'Movement history, mentors, and legacy.' },
  { week: '09', title: 'What Is My Future?', body: 'Visioning, goal mapping, and resource planning.' },
  { week: '10', title: 'Closing Ceremony', body: 'Portfolio presentation, community celebration, next steps.' },
];

const testimonials: Testimonial[] = [
  {
    quote: 'Atlas Academy gave me permission to take up space I never knew I was allowed to have.',
    name: '[Placeholder Name]',
    role: 'Atlas Academy Cohort 2 Graduate',
  },
  {
    quote: 'I came in thinking I had nothing to offer. I left with a portfolio, a plan, and a community.',
    name: '[Placeholder Name]',
    role: 'Atlas Academy Cohort 3 Graduate',
  },
  {
    quote: "This wasn't just a program. It was the first time adults actually asked what I thought.",
    name: '[Placeholder Name]',
    role: 'Atlas Academy Cohort 1 Graduate',
  },
];

const eligibility = ['Ages 14–21', 'Free to Apply', 'No prerequisites or experience required'];
const timeline = ['Applications open: May 2026', 'Decisions sent: June 2026', 'Cohort 4 begins: July 2026'];
const resourceTags = ['Financial Literacy', 'Career Readiness', 'Ages 14–21', 'Free Download'];

export default function AtlasPage() {
  return (
    <Venture venture="atlas">
      <Navigation />
      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground">
          <div className="contours" aria-hidden="true" />
          <div className="hero-mark" aria-hidden="true">
            A
          </div>
          <div className="container" style={{ position: 'relative' }}>
            {/* Atlas ERA repositioning notice */}
            <p className="small muted hairline-bottom measure" style={{ paddingBottom: 20, marginBottom: 40 }}>
              Atlas Academy is a curriculum artifact and legacy program of{' '}
              <strong style={{ color: 'var(--on-ground)' }}>Atlas ERA — The Education Research Association</strong>. The
              broader Atlas ERA network is now the organizational home for our field-building, credentialing, and
              community connection work.{' '}
              <Link href="/atlas-era" className="btn-link">
                Learn more about Atlas ERA →
              </Link>
            </p>

            <div className="grid-split-rev" style={{ alignItems: 'center' }}>
              <AnimateOnScroll>
                <Eyebrow>A US-Squared Program · 03</Eyebrow>
                <h1 className="display-1" style={{ maxWidth: '10ch', marginBottom: 28 }}>
                  Atlas <em>Academy</em>
                </h1>
                <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
                <p className="lede measure-narrow" style={{ marginBottom: 36 }}>
                  Your map. Your future. On your terms.
                </p>
                <div className="cluster" style={{ gap: 14 }}>
                  <Button href="#apply">Apply Now →</Button>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <PhotoPlaceholder label="Youth in Atlas Academy Session" aspectRatio="4/3" />
              </AnimateOnScroll>
            </div>

            <div style={{ marginTop: 56 }}>
              <Coord />
            </div>
          </div>
        </section>

        {/* ── 10-week program overview ───────────────────────────────── */}
        <Section id="program" band="paper">
          <AnimateOnScroll>
            <Eyebrow>Program Structure</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 16 }}>
              10 weeks. <em>One map.</em>
            </h2>
            <p className="lede measure" style={{ marginBottom: 48 }}>
              Each cohort meets weekly. Sessions are 2 hours, facilitated by trained mentors. Youth build toward a
              final portfolio presentation in Week 10.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <ol className="row-list" style={{ listStyle: 'none' }}>
              {weekData.map((w) => (
                <li key={w.week} className="row">
                  <span className="row-num">
                    <span className="sr-only">Week </span>
                    {w.week}
                  </span>
                  <span>
                    <span className="row-title" style={{ display: 'block' }}>
                      {w.title}
                    </span>
                    <span className="row-desc" style={{ display: 'block' }}>
                      {w.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </AnimateOnScroll>
        </Section>

        {/* ── Testimonials ───────────────────────────────────────────── */}
        <Section id="alumni" band="raised">
          <AnimateOnScroll>
            <Eyebrow>From Cohort Alumni</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              In their <em>words.</em>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <AtlasTestimonials testimonials={testimonials} />
          </AnimateOnScroll>
        </Section>

        {/* ── Free resource ──────────────────────────────────────────── */}
        <Section id="free-resource" band="bone">
          <AnimateOnScroll>
            <div style={{ maxWidth: 720 }}>
              <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
              <Eyebrow>Free Resource · Atlas Academy</Eyebrow>
              <h2 className="display-2" style={{ marginBottom: 16 }}>
                Securing the Bag &amp; <em>Saving Your Summer</em>
              </h2>
              <p className="lede" style={{ marginBottom: 20 }}>
                The Math Behind the Lifeguard Hustle
              </p>
              <p className="body measure" style={{ marginBottom: 32 }}>
                This financial literacy guide breaks down exactly how teen lifeguarding pays 2.7× more per hour than
                minimum wage jobs — while working fewer hours. Includes the full certification breakdown, test prep
                tips, and how to find your local opportunity anywhere in the U.S.{' '}
                <strong>13 slides. Built for any teen, any city.</strong>
              </p>
              <a
                href="/downloads/AtlasAcademy_LifeguardDeck.pptx"
                download
                className="btn btn-primary"
                aria-label="Download the free Securing the Bag & Saving Your Summer financial literacy guide for teens — 13-slide PowerPoint"
              >
                Download the Free Guide →
              </a>
              <div className="cluster" style={{ gap: 8, marginTop: 24, marginBottom: 16 }}>
                {resourceTags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="small muted">
                A US-Squared Research Institute Resource&nbsp;&nbsp;·&nbsp;&nbsp;Atlas Academy&nbsp;&nbsp;·&nbsp;&nbsp;us-squared.org
              </p>
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── Application ────────────────────────────────────────────── */}
        <Section id="apply" band="paper">
          <AnimateOnScroll>
            <Eyebrow>Cohort 4 · Summer 2026</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              Apply to <em>Atlas Academy.</em>
            </h2>
          </AnimateOnScroll>

          <div className="grid-2" style={{ maxWidth: 860, marginBottom: 48 }}>
            <AnimateOnScroll delay={0.05}>
              <h3 className="display-3" style={{ marginBottom: 16 }}>
                Eligibility
              </h3>
              <ul className="stack" style={{ listStyle: 'none', gap: 8 }}>
                {eligibility.map((item) => (
                  <li key={item} className="small" style={{ paddingLeft: 16, borderLeft: '1px solid var(--brass-600)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h3 className="display-3" style={{ marginBottom: 16 }}>
                Timeline
              </h3>
              <ul className="stack" style={{ listStyle: 'none', gap: 8 }}>
                {timeline.map((item) => (
                  <li key={item} className="small" style={{ paddingLeft: 16, borderLeft: '1px solid var(--brass-600)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.15}>
            <Button href="/connect">Apply for Cohort 4 →</Button>
          </AnimateOnScroll>
        </Section>

        {/* ── Questions ──────────────────────────────────────────────── */}
        <Section id="questions" band="ground">
          <AnimateOnScroll>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 20 }}>
              Have a <em>question?</em>
            </h2>
            <p className="lede measure-narrow">
              Send it our way —{' '}
              <a href="mailto:executive@us-squared.org" className="btn-link">
                executive@us-squared.org
              </a>
            </p>
          </AnimateOnScroll>
        </Section>

        <Footer />
      </main>
    </Venture>
  );
}
