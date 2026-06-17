'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#2D8A4E' }: { text: string; color?: string }) {
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

export default function AlteredEarthPressPage() {
  return (
    <>
      <Navigation />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: '#0E0E0E',
            minHeight: '100svh',
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
              bottom: '-4vh',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '32vw',
              color: 'rgba(45,138,78,0.04)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            AEP
          </div>

          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <AnimateOnScroll>
              <Eyebrow text="A US-Squared Imprint · 03" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(64px, 10vw, 120px)',
                  color: '#2D8A4E',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '20px',
                }}
              >
                {`ALTERED\nEARTH\nPRESS`}
              </h1>
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  color: '#F4F1EC',
                  letterSpacing: '0.05em',
                  marginBottom: '24px',
                }}
              >
                STORIES FROM THE PEOPLE LIVING THEM.
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#C0C0C0',
                  maxWidth: '580px',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                }}
              >
                Altered Earth Press is the publishing imprint of the US-Squared Research Institute.
                We publish real community stories — told from the lens of adolescents and the adults
                who hold them. Not case studies. Not curricula. Stories.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── About the Press ───────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Our Mission" color="#2D8A4E" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(38px, 7vw, 72px)',
                  color: '#0E0E0E',
                  lineHeight: 0.95,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '28px',
                }}
              >
                {`THE STORY IS\nTHE EVIDENCE.`}
              </h2>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                maxWidth: '960px',
              }}
            >
              <AnimateOnScroll delay={0.05}>
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#444444',
                    lineHeight: 1.75,
                  }}
                >
                  The research shows patterns. The story shows the person inside the pattern.
                  Altered Earth Press exists to hold both — to put community-centered, youth-voiced
                  narratives into the hands of the educators, caregivers, and practitioners who
                  need them most.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#444444',
                    lineHeight: 1.75,
                  }}
                >
                  Every title we publish is grounded in the BASE Framework and rooted in the
                  lived experiences of Black and Brown youth and the communities that surround them.
                  We don&apos;t interpret their stories. We amplify them.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Our Titles ────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Our Titles" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(38px, 7vw, 64px)',
                  color: '#F4F1EC',
                  lineHeight: 0.95,
                  letterSpacing: '0.02em',
                  marginBottom: '48px',
                }}
              >
                WHAT WE&apos;VE PUBLISHED
              </h2>
            </AnimateOnScroll>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {/* Vol. 01 — Feelings Unplugged */}
              <AnimateOnScroll delay={0.05}>
                <div
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderTop: '4px solid #D4A017',
                    padding: '32px 28px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '24px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '13px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#D4A017',
                        marginBottom: '8px',
                      }}
                    >
                      Vol. 01 · Now Available
                    </div>
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '32px',
                        color: '#F4F1EC',
                        letterSpacing: '0.03em',
                        lineHeight: 1,
                      }}
                    >
                      Feelings Unplugged
                    </div>
                  </div>
                  <Link
                    href="/feelings-unplugged"
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#D4A017',
                      textDecoration: 'none',
                      flexShrink: 0,
                    }}
                  >
                    View Book →
                  </Link>
                </div>
              </AnimateOnScroll>

              {/* Vol. 02 — Embargo */}
              <AnimateOnScroll delay={0.1}>
                <div
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderTop: '4px solid #2D8A4E',
                    padding: '32px 28px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '24px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '13px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#2D8A4E',
                        marginBottom: '8px',
                      }}
                    >
                      Vol. 02 · Forthcoming
                    </div>
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '32px',
                        color: '#F4F1EC',
                        letterSpacing: '0.03em',
                        lineHeight: 1,
                      }}
                    >
                      Embargo
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#555555',
                      flexShrink: 0,
                    }}
                  >
                    Coming Soon
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Submit / Connect ──────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Work With Us" color="#2D8A4E" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(38px, 7vw, 64px)',
                  color: '#0E0E0E',
                  lineHeight: 0.95,
                  letterSpacing: '0.02em',
                  marginBottom: '20px',
                }}
              >
                HAVE A STORY TO TELL?
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#444444',
                  maxWidth: '520px',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}
              >
                We are interested in community-sourced manuscripts, practitioner accounts, and
                youth-authored work that centers the experiences of adolescents and the adults
                who show up for them. Reach out to start the conversation.
              </p>
              <Link
                href="/connect"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  backgroundColor: '#2D8A4E',
                  color: '#F4F1EC',
                  padding: '14px 28px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Get in Touch →
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
