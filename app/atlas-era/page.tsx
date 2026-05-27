'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#B5142A' }: { text: string; color?: string }) {
  return (
    <div
      style={{
        fontFamily: 'Barlow Condensed, sans-serif',
        fontWeight: 900,
        fontSize: '10px',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color,
        marginBottom: '16px',
      }}
    >
      {text}
    </div>
  );
}

const timelineRows = [
  {
    phase: 'NOW',
    period: '2025–26',
    body: 'Pilot network active. US-Squared anchor site operating. Atlas Academy Cohort 4 forming. BASEops workforce pilot underway. ERA member directory in development.',
  },
  {
    phase: 'NEAR',
    period: '2026–28',
    body: 'Costa Rica anchor site open. ERA member directory live with 50+ vetted programs and educators. First international network cohort. Community governance forming.',
  },
  {
    phase: 'MID',
    period: '2028–30',
    body: 'Multi-site network across 3+ countries. Community-owned governance operational. Research output feeding back to member communities. First ERA alumni as mentors.',
  },
  {
    phase: 'HORIZON',
    period: '2030+',
    body: 'A global association of worldschooling educators, families, and programs — governed by members, resourced by outcomes, accountable to the children at its center. DAO-structured community treasury supporting scholars who cannot otherwise access network resources.',
  },
];

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
    <>
      <Navigation />
      <main>

        {/* ── Section 1: Hero ────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: '#0E0E0E',
            minHeight: '100svh',
            display: 'flex',
            alignItems: 'center',
            padding: '100px 0 80px',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '4px solid #B5142A',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-4vw',
              top: '50%',
              transform: 'translateY(-50%)',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '28vw',
              color: 'rgba(181,20,42,0.03)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            ERA
          </div>

          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <AnimateOnScroll>
              <Eyebrow text="Atlas ERA · The Education Research Association" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  color: '#F4F1EC',
                  lineHeight: 0.95,
                  letterSpacing: '0.02em',
                  marginBottom: '28px',
                  maxWidth: '900px',
                }}
              >
                The network already exists.
                <br />
                <span style={{ color: '#B5142A' }}>It just hasn&apos;t been connected yet.</span>
              </h1>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#888888',
                  maxWidth: '640px',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                }}
              >
                For decades, educators, mentors, families, and programs have been quietly building something the system
                refused to build for them — culturally grounded, identity-affirming, learner-centered education.
                They&apos;ve been doing it in living rooms, community centers, co-ops, studios, and backyards across
                the country and around the world. The Atlas ERA exists to find them. Map them. Connect them.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  href="/connect"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#B5142A',
                    color: '#0E0E0E',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Join the Network →
                </Link>
                <a
                  href="#pipeline"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '2px solid #2A2A2A',
                    color: '#888888',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Learn About the Pipeline
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Section 2: The Diagnosis ───────────────────────────────────── */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="The Problem" color="#B5142A" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '32px',
                  lineHeight: 0.95,
                }}
              >
                School was never a building.
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div style={{ height: '3px', backgroundColor: '#B5142A', marginBottom: '32px', maxWidth: '200px' }} />
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '18px',
                  color: '#0E0E0E',
                  lineHeight: 1.8,
                  maxWidth: '800px',
                }}
              >
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
          </div>
        </section>

        {/* ── Section 3: The Reality ─────────────────────────────────────── */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="The Reality" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '32px',
                  lineHeight: 0.95,
                }}
              >
                The network already exists.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 600,
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#B5142A',
                  marginBottom: '24px',
                }}
              >
                Right now:
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  marginBottom: '64px',
                  maxWidth: '800px',
                }}
              >
                {[
                  'Educators in Costa Rica, Portugal, and Georgia are running trauma-informed learning communities outside traditional school walls.',
                  'Black homeschooling families are building rigorous, culturally grounded curricula on kitchen tables and in community spaces.',
                  'Mentors are connecting with adolescents through workshops, studios, apprenticeships, and maker spaces.',
                  'Researchers are producing evidence the mainstream education system continues to ignore.',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      borderLeft: '3px solid #B5142A',
                      paddingLeft: '20px',
                      paddingTop: '12px',
                      paddingBottom: '12px',
                      backgroundColor: '#1A1A1A',
                      paddingRight: '20px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '16px',
                        color: '#888888',
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* ── Pipeline ──────────────────────────────────────────────── */}
            <div id="pipeline">
              <AnimateOnScroll delay={0.05}>
                <Eyebrow text="The Worldskool Pipeline" />
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#555555',
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    marginBottom: '40px',
                  }}
                >
                  These are not separate programs. They are one arc — learn who you are, create from that knowing,
                  build economic power from what you create.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2px',
                  }}
                >
                  {[
                    {
                      label: 'LEARN',
                      program: 'Atlas Academy',
                      href: '/atlas',
                      arrow: '→',
                      body: 'Worldskool + BASE Framework curriculum for learners ages 14–21. Designed for neurodivergent, culturally complex, and mobile learners.',
                    },
                    {
                      label: 'CREATE',
                      program: 'Altered Earth Press',
                      href: '/earth',
                      arrow: '→',
                      body: 'Publishing, expression, and storytelling. What you learn becomes what you make, and what you make is your contribution.',
                    },
                    {
                      label: 'WORK',
                      program: 'BASEops',
                      href: '/baseops',
                      arrow: null,
                      body: 'Workforce development network connecting business owners, community members, justice-involved individuals, and adolescents 14+ to economic opportunity.',
                    },
                  ].map((step) => (
                    <div
                      key={step.label}
                      style={{
                        backgroundColor: '#1A1A1A',
                        borderTop: '4px solid #B5142A',
                        padding: '32px 28px',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 900,
                          fontSize: '10px',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: '#B5142A',
                          marginBottom: '8px',
                        }}
                      >
                        {step.label}
                      </div>
                      <h3
                        style={{
                          fontFamily: 'Bebas Neue, sans-serif',
                          fontSize: '32px',
                          color: '#F4F1EC',
                          letterSpacing: '0.03em',
                          marginBottom: '16px',
                        }}
                      >
                        {step.program}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Barlow, sans-serif',
                          fontSize: '14px',
                          color: '#888888',
                          lineHeight: 1.7,
                          marginBottom: '20px',
                        }}
                      >
                        {step.body}
                      </p>
                      <Link
                        href={step.href}
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 900,
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#B5142A',
                          textDecoration: 'none',
                        }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Section 6: The Long Arc ────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="The Long Arc" color="#B5142A" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '24px',
                  lineHeight: 0.95,
                }}
              >
                This is a generational build.
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#444444',
                  maxWidth: '680px',
                  lineHeight: 1.7,
                  marginBottom: '48px',
                }}
              >
                We are in the early phase. The work right now is scouting — finding the people already building this,
                documenting what they&apos;ve created, and beginning to weave the connections that will eventually form
                a living, self-sustaining network.
              </p>
            </AnimateOnScroll>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {timelineRows.map((row, i) => (
                <AnimateOnScroll key={row.phase} delay={i * 0.06}>
                  <div
                    style={{
                      backgroundColor: '#0E0E0E',
                      borderLeft: '6px solid #B5142A',
                      padding: '28px 32px',
                      display: 'grid',
                      gridTemplateColumns: '120px 1fr',
                      gap: '24px',
                      alignItems: 'start',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: 'Bebas Neue, sans-serif',
                          fontSize: '28px',
                          color: '#B5142A',
                          letterSpacing: '0.05em',
                          lineHeight: 1,
                          marginBottom: '4px',
                        }}
                      >
                        {row.phase}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 600,
                          fontSize: '11px',
                          letterSpacing: '0.12em',
                          color: '#555555',
                          textTransform: 'uppercase',
                        }}
                      >
                        {row.period}
                      </div>
                    </div>
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '15px',
                        color: '#888888',
                        lineHeight: 1.7,
                      }}
                    >
                      {row.body}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 7: Join the Network CTA ───────────────────────────── */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0', borderTop: '4px solid #B5142A' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Join the Network" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '24px',
                  lineHeight: 0.95,
                }}
              >
                Are you part of this?
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#888888',
                  maxWidth: '680px',
                  lineHeight: 1.7,
                  marginBottom: '48px',
                }}
              >
                If you are doing this work — if you are building something outside the walls, connecting learners to
                their own brilliance, designing education that refuses to confine — we want to find you. The ERA member
                directory opens in 2026. In the meantime, we are actively scouting. If you are an educator, mentor,
                program director, worldschooling family, or community organization doing this kind of work, reach out.
              </p>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '2px',
                marginBottom: '32px',
              }}
            >
              {ctaCards.map((card, i) => (
                <AnimateOnScroll key={card.label} delay={i * 0.06}>
                  <div
                    style={{
                      backgroundColor: '#1A1A1A',
                      borderTop: '4px solid #B5142A',
                      padding: '32px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '28px',
                        color: '#F4F1EC',
                        letterSpacing: '0.03em',
                        lineHeight: 1.1,
                      }}
                    >
                      {card.label}
                    </div>
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '14px',
                        color: '#888888',
                        lineHeight: 1.7,
                        flex: 1,
                      }}
                    >
                      {card.body}
                    </p>
                    <Link
                      href="/connect"
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '11px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#B5142A',
                        textDecoration: 'none',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Express Interest →
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.2}>
              <p
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#555555',
                  textAlign: 'center',
                }}
              >
                ERA Member Directory — Coming 2026
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
