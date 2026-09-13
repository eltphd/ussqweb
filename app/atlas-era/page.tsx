import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';
import Venture from '@/components/Venture';
import { Section, Eyebrow, Coord, Button, Card } from '@/components/ui';

const pipelineSteps = [
  {
    num: '01',
    label: 'Learn',
    program: 'Atlas Academy',
    href: '/atlas',
    body: 'Worldskool + BASE Framework curriculum for learners ages 14–21. Designed for neurodivergent, culturally complex, and mobile learners.',
  },
  {
    num: '02',
    label: 'Create',
    program: 'Altered Earth Press',
    href: '/earth',
    body: 'Publishing, expression, and storytelling. What you learn becomes what you make, and what you make is your contribution.',
  },
  {
    num: '03',
    label: 'Work',
    program: 'BASEops',
    href: '/baseops',
    body: 'Workforce development network connecting business owners, community members, justice-involved individuals, and adolescents 14+ to economic opportunity.',
  },
];

const rightNow = [
  'Educators in Costa Rica, Portugal, and Georgia are running trauma-informed learning communities outside traditional school walls.',
  'Black homeschooling families are building rigorous, culturally grounded curricula on kitchen tables and in community spaces.',
  'Mentors are connecting with adolescents through workshops, studios, apprenticeships, and maker spaces.',
  'Researchers are producing evidence the mainstream education system continues to ignore.',
];

const timelineRows = [
  {
    phase: 'Now',
    period: '2025–26',
    status: 'Active',
    body: 'Pilot network active. US-Squared anchor site operating. Atlas Academy Cohort 4 forming. BASEops workforce pilot underway.',
  },
  {
    phase: 'Near',
    period: '2026–28',
    body: 'Costa Rica anchor site open. ERA member directory live with 50+ vetted programs and educators. First international network cohort. Community governance forming.',
  },
  {
    phase: 'Mid',
    period: '2028–30',
    body: 'Multi-site network across 3+ countries. Community-owned governance operational. Research output feeding back to member communities. First ERA alumni as mentors.',
  },
  {
    phase: 'Horizon',
    period: '2030+',
    body: 'A global association of worldschooling educators, families, and programs — governed by members, resourced by outcomes, accountable to the children at its center. DAO-structured community treasury supporting scholars who cannot otherwise access network resources.',
  },
];

const resourceTags = ['Financial Literacy', 'Parent & Caregiver Tools', 'Research-Backed', 'Free Download'];

const ctaCards = [
  {
    label: 'I am an educator',
    body: 'Worldschooling teachers, alternative educators, homeschool co-op leaders, curriculum designers — you belong in this network.',
  },
  {
    label: 'I am a family',
    body: 'Worldschooling, homeschooling, and hybrid-learning families navigating education outside traditional systems.',
  },
  {
    label: 'I run a program',
    body: 'Youth programs, community learning spaces, mentorship organizations, and alternative education initiatives.',
  },
];

export default function AtlasERAPage() {
  return (
    <Venture venture="atlas">
      <Navigation />
      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground">
          <div className="contours" aria-hidden="true" />
          <div className="hero-mark" aria-hidden="true">
            ERA
          </div>
          <div className="container" style={{ position: 'relative' }}>
            <AnimateOnScroll>
              <Eyebrow>Atlas ERA · The Education Research Association</Eyebrow>
              <h1 className="display-1" style={{ maxWidth: '14ch', marginBottom: 28 }}>
                The network already exists. <em>It just hasn&apos;t been connected yet.</em>
              </h1>
              <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
              <p className="lede measure" style={{ marginBottom: 36 }}>
                For decades, educators, mentors, families, and programs have been quietly building something the system
                refused to build for them — culturally grounded, identity-affirming, learner-centered education.
                They&apos;ve been doing it in living rooms, community centers, co-ops, studios, and backyards across
                the country and around the world. The Atlas ERA exists to find them. Map them. Connect them.
              </p>
              <div className="cluster" style={{ gap: 14 }}>
                <Button href="/connect">Join the Network →</Button>
                <Button href="#pipeline" variant="ghost">
                  Learn About the Pipeline
                </Button>
              </div>
              <div style={{ marginTop: 56 }}>
                <Coord />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── The Diagnosis ──────────────────────────────────────────── */}
        <Section band="paper">
          <AnimateOnScroll>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 24 }}>
              School was never <em>a building.</em>
            </h2>
            <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="body measure" style={{ marginBottom: 64 }}>
              It was always supposed to be a relationship — between a learner and the world, between a young person
              and the knowledge that would let them move through life with power and purpose. But somewhere along the
              way, education became a place you go. A building you enter and exit. A system that decides who belongs
              and who doesn&apos;t, what counts and what doesn&apos;t, whose brilliance gets measured and whose gets
              managed. For Black, neurodivergent, gender-expansive, economically mobile, and culturally complex
              learners, those walls were never built to hold them. The system&apos;s failures aren&apos;t accidental.
              They are structural. But here&apos;s what the system doesn&apos;t want you to know: the people building
              something better have already been at work.
            </p>
          </AnimateOnScroll>

          {/* ── The Worldskool Pipeline ────────────────────────────── */}
          <div id="pipeline">
            <AnimateOnScroll delay={0.05}>
              <Eyebrow>The Worldskool Pipeline</Eyebrow>
              <p className="lede measure-narrow" style={{ marginBottom: 40 }}>
                These are not separate programs. They are one arc — learn who you are, create from that knowing, build
                economic power from what you create.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="grid-auto">
                {pipelineSteps.map((step) => (
                  <Card key={step.num} plain>
                    <span className="kicker" style={{ display: 'block', marginBottom: 12 }}>
                      {step.num} · {step.label}
                    </span>
                    <h3 className="display-3" style={{ marginBottom: 12 }}>
                      {step.program}
                    </h3>
                    <p className="small muted" style={{ marginBottom: 20 }}>
                      {step.body}
                    </p>
                    <Button href={step.href} variant="link">
                      Learn More →
                    </Button>
                  </Card>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </Section>

        {/* ── The Reality ────────────────────────────────────────────── */}
        <Section band="ground">
          <AnimateOnScroll>
            <Eyebrow>The Reality</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 32 }}>
              The network <em>already exists.</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <span className="kicker" style={{ display: 'block', marginBottom: 24 }}>
              Right now:
            </span>
            <ul className="stack" style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: '62ch', gap: 20 }}>
              {rightNow.map((item) => (
                <li key={item} className="body" style={{ borderLeft: '1px solid var(--brass-600)', paddingLeft: 18 }}>
                  {item}
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </Section>

        {/* ── The Long Arc ───────────────────────────────────────────── */}
        <Section band="paper">
          <AnimateOnScroll>
            <Eyebrow>The Long Arc</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 20 }}>
              This is a <em>generational build.</em>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="lede measure" style={{ marginBottom: 48 }}>
              We are in the early phase. The work right now is scouting — finding the people already building this,
              documenting what they&apos;ve created, and beginning to weave the connections that will eventually form
              a living, self-sustaining network.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="row-list">
              {timelineRows.map((row) => (
                <div key={row.phase} className="row">
                  <span className="row-num">{row.period}</span>
                  <span>
                    <span className="cluster" style={{ gap: 12 }}>
                      <span className="row-title">{row.phase}</span>
                      {row.status ? <span className="chip">{row.status}</span> : null}
                    </span>
                    <span className="row-desc" style={{ display: 'block' }}>
                      {row.body}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── ERA Member Resource ────────────────────────────────────── */}
        <Section band="bone">
          <AnimateOnScroll>
            <div style={{ maxWidth: 720 }}>
              <Eyebrow>ERA Member Resource · Free Download</Eyebrow>
              <h2 className="display-2" style={{ marginBottom: 12 }}>
                The Job Math <em>Conversation</em>
              </h2>
              <p className="h-lede muted" style={{ marginBottom: 20 }}>
                How to Help Your Teen Work Smarter This Summer
              </p>
              <p className="body measure" style={{ marginBottom: 32 }}>
                Research-backed guidance for trusted adults. This 9-slide deck gives you the data, the scripts, and the
                strategy to help a teen make a smarter first-job decision — without pressure or directive framing.
                Includes conversation starters, what to avoid, and how to find opportunities in your city.{' '}
                <strong style={{ fontWeight: 500 }}>Built for any caregiver. Works anywhere in the U.S.</strong>
              </p>
              <a
                href="/downloads/SparentScience_LifeguardDeck.pptx"
                download
                className="btn btn-primary"
                aria-label="Download the free Job Math Conversation guide for caregivers and educators — 9-slide PowerPoint"
              >
                Download the Free Guide →
              </a>
              <div className="cluster" style={{ gap: 8, marginTop: 28 }}>
                {resourceTags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── Join the Network CTA ───────────────────────────────────── */}
        <Section band="ground">
          <hr className="rule" style={{ marginBottom: 48 }} />
          <AnimateOnScroll>
            <Eyebrow>Join the Network</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 24 }}>
              Are you <em>part of this?</em>
            </h2>
            <p className="lede measure" style={{ marginBottom: 48 }}>
              If you are doing this work — if you are building something outside the walls, connecting learners to
              their own brilliance, designing education that refuses to confine — we want to find you. We are actively
              scouting. If you are an educator, mentor, program director, worldschooling family, or community
              organization doing this kind of work, reach out.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="grid-auto" style={{ marginBottom: 48 }}>
              {ctaCards.map((card) => (
                <Card key={card.label}>
                  <h3 className="display-3" style={{ marginBottom: 14 }}>
                    {card.label}
                  </h3>
                  <p className="small muted">{card.body}</p>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <Button href="mailto:executive@us-squared.org">Express Interest →</Button>
          </AnimateOnScroll>
        </Section>

        <Footer />
      </main>
    </Venture>
  );
}
