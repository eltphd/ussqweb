'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#D4A017' }: { text: string; color?: string }) {
  return (
    <div
      style={{
        fontFamily: 'Barlow Condensed, sans-serif',
        fontWeight: 900,
        fontSize: '13px',
        letterSpacing: '0.22em',
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
                  color: '#C0C0C0',
                  maxWidth: '640px',
                  lineHeight: 1.7,
                }}
              >
                A justice-centered research institute protecting the brilliance of young people through worldskool,
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
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px', color: '#0E0E0E', lineHeight: 1.8, marginBottom: '20px' }}>
                  US-Squared Research Institute exists to protect the brilliance of adolescents — especially Black and
                  Brown young people — by building the justice-centered programs, tools, and systems that ensure they
                  don&apos;t have to choose between being themselves and being safe.
                </p>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px', color: '#0E0E0E', lineHeight: 1.8, marginBottom: '20px' }}>
                  We believe that brilliance is not earned through suffering — it is inherent. And we believe that
                  organizations, educators, and communities have a responsibility to build the infrastructure that allows
                  that brilliance to flourish.
                </p>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px', color: '#0E0E0E', lineHeight: 1.8 }}>
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

            <div className="grid-leadership">
              <AnimateOnScroll delay={0.05}>
                <div style={{ borderTop: '4px solid #D4A017', position: 'relative', overflow: 'hidden', aspectRatio: '3/4', width: '100%', backgroundColor: '#1A1A1A' }}>
                  <Image
                    src="/downloads/erica image.webp"
                    alt="Dr. Erica L. Tartt, PhD — Founder & Research Director, US-Squared Research Institute"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
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
                      fontSize: '13px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#D4A017',
                      marginBottom: '28px',
                    }}
                  >
                    Founder & Research Director
                  </div>

                  <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#CCCCCC', lineHeight: 1.8, marginBottom: '16px' }}>
                    Dr. Tartt holds a PhD in Education from the University of California, Santa Barbara (2023),
                    where her research focused on culture, development, and quantitative methods. Her dissertation
                    applied Latent Class Analysis to CDC data from 7,000+ Black adolescents, identifying distinct
                    mental health profiles and directly challenging deficit-based frameworks in youth research.
                  </p>
                  <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#CCCCCC', lineHeight: 1.8, marginBottom: '16px' }}>
                    She is an education researcher, instructional technologist, and AI-in-education strategist with
                    nearly two decades spanning K–12 classrooms, higher education faculty development, and nonprofit
                    innovation. Her specializations include Latent Class Analysis, mixture modeling, and
                    mixed-methods research design — tools she uses to prove what communities already know.
                  </p>
                  <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#CCCCCC', lineHeight: 1.8, marginBottom: '16px' }}>
                    Dr. Tartt does not run programs — she designs the conditions that make them possible. Her work
                    begins where the research ends: identifying the structural gaps between brilliance and economic
                    power, then building the networks across education, publishing, and workforce that close them.
                    She is the architect of ecosystems. The delivery belongs to the people inside them.
                  </p>
                  <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#CCCCCC', lineHeight: 1.8 }}>
                    She is currently building Atlas ERA — The Education Research Association — a global
                    field-building network that connects education practitioners, funds their work, and credentials
                    the brilliance happening in communities the traditional system cannot see.
                  </p>

                  <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {[
                      'UCSB · PhD in Education 2023',
                      'GWU · MA Educational Technology',
                      '20+ Years in Education',
                      'Quantitative Methods · LCA',
                      'AI in Education',
                    ].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 600,
                          fontSize: '11px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          border: '1px solid #3A3A3A',
                          color: '#AAAAAA',
                          padding: '5px 12px',
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px' }}>
                {[
                  { label: 'EIN', value: '92-3221304' },
                  { label: 'Status', value: '501(c)(3) Nonprofit' },
                  { label: 'Founded', value: '2020' },
                  { label: 'Location', value: 'Columbus, Ohio' },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    style={{
                      backgroundColor: '#0E0E0E',
                      borderTop: '4px solid #D4A017',
                      padding: '28px 24px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 700,
                        fontSize: '12px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#D4A017',
                        marginBottom: '10px',
                      }}
                    >
                      {fact.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '30px',
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
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '15px', color: '#AAAAAA', lineHeight: 1.5 }}>
                  Columbus, Ohio · executive@us-squared.org
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
              <div style={{ border: '1px dashed #3A3A3A', padding: '48px', textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 600,
                    fontSize: '13px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#888888',
                    marginBottom: '12px',
                  }}
                >
                  Coming Soon
                </div>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '15px', color: '#AAAAAA', lineHeight: 1.6 }}>
                  Partner and funder logos will appear here. Interested in supporting our work?{' '}
                  <a href="/connect" style={{ color: '#D4A017', textDecoration: 'none' }}>
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
