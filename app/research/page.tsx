'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatCounter from '@/components/StatCounter';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#FF4B1F' }: { text: string; color?: string }) {
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
            backgroundColor: '#0A0A0A',
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
              color: 'rgba(255,75,31,0.04)',
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
                  color: '#F0EDE8',
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
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#888888',
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

        {/* Section 2: Publications */}
        <section style={{ backgroundColor: '#0A0A0A', padding: '80px 0', borderTop: '1px solid #1A1A1A' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Publications" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '48px',
                  color: '#F0EDE8',
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
                  type: 'Journal Article · In Press',
                  title: 'Latent Transition Analysis of Adolescent Racial Discrimination and Mental Health Outcomes',
                  citation:
                    'Tartt, E. L., Nylund-Gibson, K., et al. (in press). Latent Transition Analysis of adolescent racial discrimination and mental health outcomes. Psychological Methods.',
                  notes:
                    'Examines mental health trajectory shifts across 7,000+ Black adolescents using nationally representative CDC data.',
                },
                {
                  type: 'Doctoral Dissertation · 2023',
                  title: 'Unraveling Hopelessness: A Latent Class Analysis of Mental Health Profiles Among Black Adolescents',
                  citation:
                    'Tartt, E. L. (2023). Unraveling Hopelessness: A latent class analysis of mental health profiles among Black adolescents. University of California, Santa Barbara. GPA: 3.98.',
                  notes:
                    'Identified four distinct mental health profiles among Black youth, challenging deficit-based narratives and informing the BASE framework.',
                },
              ].map((pub, i) => (
                <AnimateOnScroll key={i} delay={i * 0.05}>
                  <div
                    style={{
                      backgroundColor: '#1A1A1A',
                      borderTop: '4px solid #FF4B1F',
                      padding: '32px 28px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#FF4B1F',
                        marginBottom: '12px',
                      }}
                    >
                      {pub.type}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '28px',
                        color: '#F0EDE8',
                        letterSpacing: '0.03em',
                        marginBottom: '12px',
                        lineHeight: 1.1,
                      }}
                    >
                      {pub.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        fontStyle: 'italic',
                        fontSize: '13px',
                        color: '#555555',
                        lineHeight: 1.5,
                        marginBottom: '12px',
                      }}
                    >
                      {pub.citation}
                    </p>
                    <p
                      style={{
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        fontSize: '14px',
                        color: '#888888',
                        lineHeight: 1.6,
                      }}
                    >
                      {pub.notes}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: BASE Framework */}
        <section style={{ backgroundColor: '#F0EDE8', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="The Framework" color="#FF4B1F" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#0A0A0A',
                  letterSpacing: '0.02em',
                  marginBottom: '12px',
                  lineHeight: 0.95,
                }}
              >
                THE BASE FRAMEWORK
              </h2>
              <p
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
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
                    style={{
                      position: 'relative',
                      backgroundColor: '#0A0A0A',
                      borderLeft: '6px solid #FF4B1F',
                      padding: '32px 28px 32px 40px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '32px',
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '120px',
                        color: '#FF4B1F',
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
                          color: '#F0EDE8',
                          letterSpacing: '0.05em',
                          marginBottom: '10px',
                        }}
                      >
                        {item.word}
                      </div>
                      <p
                        style={{
                          fontFamily: 'IBM Plex Sans, sans-serif',
                          fontSize: '15px',
                          color: '#888888',
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

        {/* Section 4: Impact Stats */}
        <section style={{ backgroundColor: '#0A0A0A', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="By The Numbers" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '56px',
                  color: '#F0EDE8',
                  letterSpacing: '0.02em',
                  marginBottom: '48px',
                }}
              >
                OUR IMPACT
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '48px',
                  borderTop: '1px solid #1A1A1A',
                  paddingTop: '48px',
                }}
              >
                <StatCounter value="7,000+" label="Youth Served" />
                <StatCounter value="4+" label="Program Domains" />
                <StatCounter value="20+" label="Years in Education" />
                <StatCounter value="3+" label="Peer-Reviewed Studies" />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 5: Download CTA */}
        <section style={{ backgroundColor: '#F0EDE8', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Impact Brief" color="#FF4B1F" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#0A0A0A',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                  lineHeight: 0.95,
                }}
              >
                DOWNLOAD THE BRIEF
              </h2>
              <p
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
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
                <Link
                  href="/connect"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#FF4B1F',
                    color: '#F0EDE8',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Download Impact Brief
                </Link>
                <Link
                  href="/connect"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '2px solid #0A0A0A',
                    color: '#0A0A0A',
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
