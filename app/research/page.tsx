'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatCounter from '@/components/StatCounter';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#D4A017' }: { text: string; color?: string }) {
  return (
    <div
      style={{
        fontFamily: 'Barlow Condensed, sans-serif',
        fontWeight: 900,
        fontSize: '13px',
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
        {/* Hero */}
        <section
          style={{
            backgroundColor: '#0E0E0E',
            minHeight: '80svh',
            display: 'flex',
            alignItems: 'center',
            padding: '100px 0 80px',
            position: 'relative',
            overflow: 'hidden',
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
              fontSize: '32vw',
              color: 'rgba(212,160,23,0.04)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '-0.05em',
            }}
          >
            7K+
          </div>

          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <AnimateOnScroll>
              <Eyebrow text="Research & Impact" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  color: '#F4F1EC',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '24px',
                }}
              >
                {`THE DATA BEHIND\nTHE WORK.`}
              </h1>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#C0C0C0',
                  maxWidth: '580px',
                  lineHeight: 1.7,
                }}
              >
                US-Squared programs are built on peer-reviewed research, longitudinal data, and the lived experiences of
                the 7,000+ young people whose stories shaped our framework.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 2: Impact Stats */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '64px 0', borderTop: '1px solid #1A1A1A' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '48px',
                }}
              >
                <StatCounter value="7,000+" label="Youth Studied in Peer-Reviewed Research" />
                <StatCounter value="4+" label="Program Domains" />
                <StatCounter value="20+" label="Years in Education" />
                <StatCounter value="3+" label="Peer-Reviewed Studies" />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 3: Publications */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0', borderTop: '1px solid #1A1A1A' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Publications" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '48px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                }}
              >
                PEER-REVIEWED WORK
              </h2>
            </AnimateOnScroll>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {[
                {
                  type: 'Journal Article · 2023',
                  title: 'Ten Frequently Asked Questions About Latent Transition Analysis',
                  citation:
                    'Nylund-Gibson, K., Garber, A. C., Carter, D. B., Chan, M., Arch, D. A., Simon, O., ... & Lawrie, S. I. (2023). Ten frequently asked questions about latent transition analysis. Psychological Methods, 28(2), 284.',
                  notes:
                    'Foundational methodological reference for latent transition analysis — the statistical approach underlying research on adolescent mental health profiles and trajectory shifts.',
                  link: null,
                },
                {
                  type: 'Doctoral Dissertation · 2023',
                  title: 'Unraveling Hopelessness: A Latent Class Analysis of Mental Health Profiles Among Black Adolescents',
                  citation:
                    'Tartt, E. L. (2023). Unraveling Hopelessness: A latent class analysis of mental health profiles among Black adolescents. University of California, Santa Barbara. GPA: 3.98.',
                  notes:
                    'Identified four distinct mental health profiles among Black youth, challenging deficit-based narratives and informing the BASE framework.',
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
              ].map((pub, i) => (
                <AnimateOnScroll key={i} delay={i * 0.05}>
                  <div
                    style={{
                      backgroundColor: '#1A1A1A',
                      borderTop: '4px solid #D4A017',
                      padding: '32px 28px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '13px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#D4A017',
                        marginBottom: '12px',
                      }}
                    >
                      {pub.type}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '28px',
                        color: '#F4F1EC',
                        letterSpacing: '0.03em',
                        marginBottom: '12px',
                        lineHeight: 1.1,
                      }}
                    >
                      {pub.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontStyle: 'italic',
                        fontSize: '13px',
                        color: '#555555',
                        lineHeight: 1.5,
                        marginBottom: '12px',
                        paddingLeft: '2px',
                        overflow: 'visible',
                      }}
                    >
                      {pub.citation}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '14px',
                        color: '#C0C0C0',
                        lineHeight: 1.6,
                        marginBottom: pub.link ? '16px' : '0',
                      }}
                    >
                      {pub.notes}
                    </p>
                    {pub.link && (
                      <Link
                        href={pub.link}
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 900,
                          fontSize: '13px',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#D4A017',
                          textDecoration: 'none',
                        }}
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: BASE Framework */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="The Framework" color="#D4A017" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '12px',
                  lineHeight: 0.95,
                }}
              >
                THE BASE FRAMEWORK
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#444444',
                  maxWidth: '560px',
                  lineHeight: 1.6,
                  marginBottom: '48px',
                }}
              >
                Four principles derived from dissertation research and 20+ years of educational practice. BASE
                is the conceptual spine running through every US-Squared program.
              </p>
            </AnimateOnScroll>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {baseFramework.map((item, i) => (
                <AnimateOnScroll key={item.letter} delay={i * 0.06}>
                  <div
                    className="base-item-layout"
                    style={{
                      position: 'relative',
                      backgroundColor: '#0E0E0E',
                      borderLeft: '6px solid #D4A017',
                      padding: '32px 28px 32px 40px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '120px',
                        color: '#D4A017',
                        opacity: 0.08,
                        lineHeight: 1,
                        flexShrink: 0,
                        userSelect: 'none',
                        width: '80px',
                        textAlign: 'center',
                      }}
                    >
                      {item.letter}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Bebas Neue, sans-serif',
                          fontSize: '36px',
                          color: '#F4F1EC',
                          letterSpacing: '0.05em',
                          marginBottom: '10px',
                        }}
                      >
                        {item.word}
                      </div>
                      <p
                        style={{
                          fontFamily: 'Barlow, sans-serif',
                          fontSize: '15px',
                          color: '#C0C0C0',
                          lineHeight: 1.7,
                          maxWidth: '600px',
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Download CTA */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Impact Brief" color="#D4A017" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                  lineHeight: 0.95,
                }}
              >
                DOWNLOAD THE BRIEF
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#444444',
                  maxWidth: '520px',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}
              >
                One-page summary of our research, outcomes, and program data. Ideal for funders, partners, and program
                evaluators.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {/* TODO: Enable Download Impact Brief once PDF asset is ready — see Part 3 Asset list */}
                <span
                  aria-disabled="true"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#555555',
                    color: '#C0C0C0',
                    padding: '14px 28px',
                    display: 'inline-block',
                    cursor: 'not-allowed',
                    userSelect: 'none',
                  }}
                >
                  Coming Soon
                </span>
                <Link
                  href="/connect"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '2px solid #0E0E0E',
                    color: '#0E0E0E',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                  }}
                >
                  Contact for Partnership
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
