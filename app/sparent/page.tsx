'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#3AB8F0' }: { text: string; color?: string }) {
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

const issues = [
  { vol: 'Vol. 01', issue: 'Issue 01', title: 'Why "Are You Okay?" Never Works', topic: 'Communication' },
  { vol: 'Vol. 01', issue: 'Issue 04', title: 'The Science of Teenage Risk', topic: 'Neuroscience' },
  { vol: 'Vol. 02', issue: 'Issue 07', title: 'Grief in the Classroom', topic: 'Mental Health' },
  { vol: 'Vol. 02', issue: 'Issue 10', title: 'Racial Identity & Mental Health', topic: 'Race & Culture' },
  { vol: 'Vol. 03', issue: 'Issue 11', title: 'Social Media: The Real Conversation', topic: 'Identity' },
  { vol: 'Vol. 03', issue: 'Issue 12', title: "When Your Teenager Won't Talk", topic: 'Relationships' },
];

const roles = [
  { role: 'Educator', quote: '"Sparent Science finally gave me research I could actually use on Monday morning."', name: '[Placeholder Name]' },
  { role: 'Mentor', quote: '"I stopped guessing and started connecting. The difference has been remarkable."', name: '[Placeholder Name]' },
  { role: 'Caregiver', quote: '"It validated what I was feeling AND gave me tools to do something about it."', name: '[Placeholder Name]' },
  { role: 'Counselor', quote: '"I share it with every family I work with. It speaks their language."', name: '[Placeholder Name]' },
  { role: 'Coach', quote: '"My athletes\' parents started asking better questions after I shared this."', name: '[Placeholder Name]' },
  { role: 'Parent', quote: '"Reading Sparent Science is the most useful thing I do for my relationship with my kid."', name: '[Placeholder Name]' },
];

export default function SparentPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [email2, setEmail2] = useState('');
  const [submitted2, setSubmitted2] = useState(false);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section
          style={{
            backgroundColor: '#F4F1EC',
            minHeight: '60svh',
            display: 'flex',
            alignItems: 'center',
            padding: '100px 0 64px',
            borderBottom: '4px solid #3AB8F0',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <AnimateOnScroll>
              <Eyebrow text="A US-Squared Newsletter · 04" color="#3AB8F0" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  color: '#0E0E0E',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  marginBottom: '20px',
                }}
              >
                SPARENT SCIENCE
              </h1>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '20px',
                  color: '#444444',
                  maxWidth: '560px',
                  lineHeight: 1.6,
                  marginBottom: '36px',
                }}
              >
                Monthly research-backed tools for the educators, mentors, caregivers, and coaches who surround young
                people. By Dr. Erica L. Tartt, PhD.
              </p>

              {/* Subscribe form */}
              {submitted ? (
                <div
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '14px',
                    color: '#3AB8F0',
                    padding: '16px 20px',
                    border: '1px solid #3AB8F0',
                    display: 'inline-block',
                  }}
                >
                  You&apos;re in! First issue arrives next month.
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
                      border: '2px solid #0E0E0E',
                      borderRight: 'none',
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '14px',
                      backgroundColor: 'transparent',
                      color: '#0E0E0E',
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
                      backgroundColor: '#3AB8F0',
                      color: '#F4F1EC',
                      padding: '14px 22px',
                      border: 'none',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    Subscribe Free →
                  </button>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 2: Issue Archive */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Issue Archive" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '56px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                }}
              >
                RECENT ISSUES
              </h2>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2px',
              }}
            >
              {issues.map((issue, i) => (
                <AnimateOnScroll key={i} delay={i * 0.04}>
                  <div
                    style={{
                      backgroundColor: '#1A1A1A',
                      borderTop: '4px solid #3AB8F0',
                      padding: '28px 24px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 600,
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#3AB8F0',
                        marginBottom: '12px',
                      }}
                    >
                      {issue.vol} · {issue.issue}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '26px',
                        color: '#F4F1EC',
                        letterSpacing: '0.03em',
                        marginBottom: '12px',
                        lineHeight: 1.1,
                      }}
                    >
                      {issue.title}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 600,
                          fontSize: '10px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          backgroundColor: 'rgba(58,184,240,0.15)',
                          color: '#3AB8F0',
                          padding: '3px 8px',
                        }}
                      >
                        {issue.topic}
                      </span>
                      <a
                        href="#"
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 900,
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#3AB8F0',
                          textDecoration: 'none',
                        }}
                      >
                        Read →
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Who Reads Sparent Science */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Who Reads It" color="#3AB8F0" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '56px',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                }}
              >
                WHO READS SPARENT SCIENCE
              </h2>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2px',
              }}
            >
              {roles.map((r, i) => (
                <AnimateOnScroll key={r.role} delay={i * 0.04}>
                  <div
                    style={{
                      backgroundColor: '#0E0E0E',
                      borderTop: '4px solid #3AB8F0',
                      padding: '28px 24px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '24px',
                        color: '#3AB8F0',
                        letterSpacing: '0.05em',
                        marginBottom: '12px',
                      }}
                    >
                      {r.role}
                    </div>
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontStyle: 'italic',
                        fontSize: '14px',
                        color: '#888888',
                        lineHeight: 1.6,
                        marginBottom: '12px',
                      }}
                    >
                      {r.quote}
                    </p>
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 600,
                        fontSize: '10px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#555555',
                      }}
                    >
                      — {r.name}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Podcast */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0', borderTop: '4px solid #3AB8F0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Also Available As" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '56px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                  lineHeight: 0.95,
                }}
              >
                THE PODCAST
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#888888',
                  maxWidth: '560px',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}
              >
                Also available as a podcast — <em>Sparent Science with Dr. Erica L. Tartt, PhD.</em> Each episode
                unpacks one issue in 20–30 minutes.
              </p>

              {/* Platform placeholders */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {['Spotify', 'Apple Podcasts', 'Google Podcasts', 'RSS Feed'].map((p) => (
                  <a
                    key={p}
                    href="#"
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 600,
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      border: '1px solid #2A2A2A',
                      color: '#888888',
                      padding: '8px 16px',
                      textDecoration: 'none',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                  >
                    {p}
                  </a>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 5: Subscribe CTA again */}
        <section style={{ backgroundColor: '#3AB8F0', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '12px',
                  lineHeight: 0.95,
                }}
              >
                JOIN 1,000+ TRUSTED ADULTS
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: 'rgba(240,237,232,0.7)',
                  maxWidth: '520px',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}
              >
                Free. Monthly. Research-backed. Unsubscribe anytime.
              </p>

              {submitted2 ? (
                <div
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '16px',
                    color: '#F4F1EC',
                    padding: '16px 20px',
                    border: '1px solid rgba(240,237,232,0.4)',
                    display: 'inline-block',
                  }}
                >
                  You&apos;re on the list!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted2(true);
                  }}
                  style={{ display: 'flex', gap: '0', maxWidth: '480px' }}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      padding: '14px 16px',
                      border: '2px solid rgba(240,237,232,0.4)',
                      borderRight: 'none',
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '14px',
                      backgroundColor: 'transparent',
                      color: '#F4F1EC',
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
                      backgroundColor: '#0E0E0E',
                      color: '#F4F1EC',
                      padding: '14px 22px',
                      border: 'none',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    Subscribe →
                  </button>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </section>

        {/* Feelings Unplugged Cross-Promo */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '40px 0', borderTop: '1px solid rgba(10,10,10,0.1)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '16px',
                  color: '#444444',
                  lineHeight: 1.6,
                  maxWidth: '640px',
                }}
              >
                Looking for a hands-on tool to pair with this month&apos;s issue?{' '}
                <Link
                  href="/feelings-unplugged"
                  style={{ color: '#3AB8F0', textDecoration: 'none', fontWeight: 600 }}
                >
                  Feelings Unplugged
                </Link>{' '}
                is a BASE Framework companion guide for the young people in your care.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
