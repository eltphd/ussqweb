'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#9B82C4' }: { text: string; color?: string }) {
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

export default function BASEopsPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section
          style={{
            backgroundColor: '#0E0E0E',
            borderTop: '4px solid #9B82C4',
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
              top: '8vh',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '32vw',
              color: 'rgba(155,130,196,0.03)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            B
          </div>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <AnimateOnScroll>
              <Eyebrow text="A US-Squared System · 01" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(72px, 10vw, 120px)',
                  color: '#9B82C4',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  marginBottom: '20px',
                }}
              >
                BASEOPS
              </h1>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '24px',
                  color: '#F4F1EC',
                  marginBottom: '32px',
                  maxWidth: '640px',
                }}
              >
                The scaffold beneath every mission.
              </p>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '16px',
                  color: '#888888',
                  maxWidth: '600px',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                }}
              >
                BASEops is US-Squared&apos;s free operational infrastructure toolkit. We hand community organizations
                the same systems we use — because lean nonprofits deserve enterprise-grade infrastructure.
              </p>
              <div
                style={{
                  backgroundColor: '#1A1A1A',
                  borderLeft: '4px solid #9B82C4',
                  padding: '16px 24px',
                  display: 'inline-block',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '40px',
                    color: '#9B82C4',
                    marginRight: '12px',
                  }}
                >
                  40+
                </span>
                <span
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 600,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#888888',
                  }}
                >
                  Orgs using BASEops toolkits
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 2: Modules */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '48px',
                  color: '#F4F1EC',
                  letterSpacing: '0.03em',
                  marginBottom: '40px',
                }}
              >
                The Three Modules
              </h2>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2px',
              }}
            >
              {[
                {
                  num: '01',
                  title: 'Org Infrastructure',
                  body: 'HR templates, onboarding flows, compliance checklists, board governance docs, and internal systems built for community-based organizations operating under resource constraints.',
                },
                {
                  num: '02',
                  title: 'Grant Systems',
                  body: 'Grant tracking spreadsheets, narrative templates, budget justification formats, reporting calendars, and funder relationship CRM built for small-to-mid-size nonprofits.',
                },
                {
                  num: '03',
                  title: 'Impact Measurement',
                  body: 'Logic model templates, pre/post survey tools, data collection workflows, and dashboard frameworks for communicating your work to funders, boards, and your community.',
                },
              ].map((mod) => (
                <AnimateOnScroll key={mod.num} delay={parseInt(mod.num) * 0.05}>
                  <div
                    style={{
                      backgroundColor: '#1A1A1A',
                      borderTop: '4px solid #9B82C4',
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
                        color: '#9B82C4',
                        marginBottom: '16px',
                      }}
                    >
                      Module {mod.num}
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
                      {mod.title}
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
                      {mod.body}
                    </p>
                    <a
                      href="#get-access"
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#9B82C4',
                        textDecoration: 'none',
                      }}
                    >
                      Download →
                    </a>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Who It's For */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Built For" color="#0E0E0E" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                  lineHeight: 0.95,
                }}
              >
                WHO IT&apos;S FOR
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '2px',
                  marginBottom: '48px',
                }}
              >
                {[
                  'Community-Based Organizations',
                  'Small-to-Mid Nonprofits',
                  'Fiscal Sponsor Projects',
                  'Early-Stage Orgs',
                ].map((org) => (
                  <div
                    key={org}
                    style={{
                      backgroundColor: '#0E0E0E',
                      borderTop: '4px solid #9B82C4',
                      padding: '20px 18px',
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '20px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {org}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Testimonial */}
            <AnimateOnScroll delay={0.15}>
              <blockquote
                style={{
                  borderLeft: '3px solid #9B82C4',
                  paddingLeft: '24px',
                  maxWidth: '640px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontStyle: 'italic',
                    fontSize: '20px',
                    color: '#0E0E0E',
                    lineHeight: 1.6,
                    marginBottom: '12px',
                  }}
                >
                  &ldquo;BASEops transformed how we manage grants. We finally have systems that match the scale of our
                  ambitions.&rdquo;
                </p>
                <cite
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#888888',
                  }}
                >
                  — [Placeholder Name, Org]
                </cite>
              </blockquote>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 4: Get Access */}
        <section id="get-access" style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Free Access" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                  lineHeight: 0.95,
                }}
              >
                GET THE PLAYBOOK
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#888888',
                  maxWidth: '520px',
                  lineHeight: 1.6,
                  marginBottom: '36px',
                }}
              >
                Download the free BASEops playbook. Zero cost. Built for lean community organizations.
              </p>

              {submitted ? (
                <div
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '16px',
                    color: '#9B82C4',
                    padding: '20px 24px',
                    border: '1px solid #9B82C4',
                    display: 'inline-block',
                  }}
                >
                  Thank you! Check your inbox for the BASEops playbook.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  style={{ display: 'flex', gap: '0', maxWidth: '480px' }}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      padding: '14px 16px',
                      border: '2px solid #2A2A2A',
                      borderRight: 'none',
                      backgroundColor: '#1A1A1A',
                      color: '#F4F1EC',
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      backgroundColor: '#9B82C4',
                      color: '#0E0E0E',
                      padding: '14px 24px',
                      border: 'none',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    Download Free →
                  </button>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </section>

        {/* Back link */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '0 0 48px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <Link
              href="/"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#555555',
                textDecoration: 'none',
              }}
            >
              ← Back to US Squared
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
