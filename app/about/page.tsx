'use client';

import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#D4A017' }: { text: string; color?: string }) {
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

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section
          style={{
            backgroundColor: '#0E0E0E',
            minHeight: '60svh',
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
              fontSize: '28vw',
              color: 'rgba(212,160,23,0.03)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            US²
          </div>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <AnimateOnScroll>
              <Eyebrow text="Who We Are" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  color: '#F4F1EC',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  marginBottom: '24px',
                }}
              >
                ABOUT US-SQUARED
              </h1>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '20px',
                  color: '#888888',
                  maxWidth: '640px',
                  lineHeight: 1.7,
                }}
              >
                A justice-centered research institute protecting the brilliance of young people through programs,
                research, and systems that hold them.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Mission Statement */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Our Mission" color="#D4A017" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '56px',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '32px',
                  lineHeight: 0.95,
                }}
              >
                THE SIGNAL. THE FIRE.
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div style={{ maxWidth: '800px' }}>
                <div style={{ height: '3px', backgroundColor: '#D4A017', marginBottom: '32px', maxWidth: '200px' }} />
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '18px',
                    color: '#0E0E0E',
                    lineHeight: 1.8,
                    marginBottom: '20px',
                  }}
                >
                  US-Squared Research Institute exists to protect the brilliance of adolescents — especially Black and
                  Brown young people — by building the justice-centered programs, tools, and systems that ensure they
                  don&apos;t have to choose between being themselves and being safe.
                </p>
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '18px',
                    color: '#0E0E0E',
                    lineHeight: 1.8,
                    marginBottom: '20px',
                  }}
                >
                  We believe that brilliance is not earned through suffering — it is inherent. And we believe that
                  organizations, educators, and communities have a responsibility to build the infrastructure that allows
                  that brilliance to flourish.
                </p>
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '18px',
                    color: '#0E0E0E',
                    lineHeight: 1.8,
                  }}
                >
                  Our work is grounded in peer-reviewed research, community accountability, and a relentless commitment
                  to the young people who deserve better than what they&apos;ve been given.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Leadership */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Leadership" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '56px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                }}
              >
                WHO LEADS US
              </h2>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '48px',
                alignItems: 'start',
              }}
            >
              <AnimateOnScroll delay={0.05}>
                <div style={{ borderTop: '4px solid #D4A017' }}>
                  <PhotoPlaceholder label="Dr. Erica L. Tartt, PhD" aspectRatio="3/4" />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '48px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '4px',
                    }}
                  >
                    Dr. Erica L. Tartt, PhD
                  </h3>
                  <div
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#D4A017',
                      marginBottom: '24px',
                    }}
                  >
                    Founder & Research Director
                  </div>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '16px',
                      color: '#888888',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}
                  >
                    Dr. Tartt is a developmental psychologist and equity researcher whose dissertation —{' '}
                    <em>Unraveling Hopelessness</em> — analyzed CDC data from 7,000+ Black adolescents to identify
                    distinct mental health profiles and challenge deficit-based frameworks in youth research.
                  </p>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '16px',
                      color: '#888888',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}
                  >
                    She earned her PhD from the University of California, Santa Barbara in 2023 with a 3.98 GPA. Her
                    work sits at the intersection of quantitative methods, racial equity, and community-based practice.
                  </p>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '16px',
                      color: '#888888',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}
                  >
                    Dr. Tartt founded US-Squared Research Institute to translate research into programs that actually
                    reach young people — and to build the organizational infrastructure that community-based leaders
                    deserve.
                  </p>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '16px',
                      color: '#888888',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}
                  >
                    Dr. Tartt&apos;s current focus is on building Atlas ERA — The Education Research Association — a
                    global field-building network that connects education practitioners, funds their work, and
                    credentials the brilliance happening in communities the traditional system cannot see.
                  </p>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '16px',
                      color: '#888888',
                      lineHeight: 1.7,
                    }}
                  >
                    Her embodied methodology: discover, visit, connect, credential, invest. The field is the work.
                    The world is the classroom.
                  </p>

                  <div
                    style={{
                      marginTop: '28px',
                      display: 'flex',
                      gap: '16px',
                      flexWrap: 'wrap',
                    }}
                  >
                    {['UCSB · PhD 2023', 'GPA 3.98', '20+ Years in Education', 'Developmental Psychology'].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 600,
                          fontSize: '10px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          border: '1px solid #2A2A2A',
                          color: '#555555',
                          padding: '4px 10px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Org Facts */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Organization" color="#D4A017" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '56px',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                }}
              >
                BY THE NUMBERS
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '2px',
                }}
              >
                {[
                  { label: 'EIN', value: '92-3221304' },
                  { label: 'Status', value: '501(c)(3) Nonprofit' },
                  { label: 'Founded', value: '2020' },
                  { label: 'Location', value: 'Canal Winchester, OH' },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    style={{
                      backgroundColor: '#0E0E0E',
                      borderTop: '4px solid #D4A017',
                      padding: '24px 20px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 600,
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#D4A017',
                        marginBottom: '8px',
                      }}
                    >
                      {fact.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '28px',
                        color: '#F4F1EC',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {fact.value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: '24px',
                  backgroundColor: '#0E0E0E',
                  borderLeft: '4px solid #D4A017',
                  padding: '20px 24px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '14px',
                    color: '#555555',
                    lineHeight: 1.5,
                  }}
                >
                  51 E Hocking St · Canal Winchester, OH 43110 · info@us-squared.org
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Partners Placeholder */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Support" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '56px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                }}
              >
                OUR PARTNERS & FUNDERS
              </h2>
              <div
                style={{
                  border: '1px dashed #2A2A2A',
                  padding: '48px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 600,
                    fontSize: '12px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#555555',
                    marginBottom: '12px',
                  }}
                >
                  Coming Soon
                </div>
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '14px',
                    color: '#555555',
                    lineHeight: 1.6,
                  }}
                >
                  Partner and funder logos will appear here. Interested in supporting our work?{' '}
                  <a
                    href="/connect"
                    style={{ color: '#D4A017', textDecoration: 'none' }}
                  >
                    Get in touch.
                  </a>
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
