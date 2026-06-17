'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#B5142A' }: { text: string; color?: string }) {
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

const testimonials = [
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
    quote: 'This wasn\'t just a program. It was the first time adults actually asked what I thought.',
    name: '[Placeholder Name]',
    role: 'Atlas Academy Cohort 1 Graduate',
  },
];


export default function AtlasPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <Navigation />
      <main>
        {/* Atlas ERA Repositioning Banner */}
        <div
          style={{
            backgroundColor: '#1A1A1A',
            borderBottom: '1px solid #2A2A2A',
            padding: '14px 24px',
            paddingTop: '78px',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '13px',
                color: '#C0C0C0',
                lineHeight: 1.6,
              }}
            >
              Atlas Academy is a curriculum artifact and legacy program of{' '}
              <strong style={{ color: '#F4F1EC' }}>Atlas ERA — The Education Research Association</strong>. The
              broader Atlas ERA network is now the organizational home for our field-building, credentialing, and
              community connection work.{' '}
              <a href="/atlas-era" style={{ color: '#B5142A', textDecoration: 'none' }}>
                Learn more about Atlas ERA →
              </a>
            </p>
          </div>
        </div>

        {/* Hero — Split Screen */}
        <section
          style={{
            minHeight: '100svh',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          {/* Left — Orange panel */}
          <div
            style={{
              backgroundColor: '#B5142A',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '100px 48px 80px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: '-8vw',
                bottom: '-4vh',
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '24vw',
                color: 'rgba(240,237,232,0.06)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              A
            </div>
            <AnimateOnScroll>
              <Eyebrow text="A US-Squared Program · 02" color="rgba(240,237,232,0.6)" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  color: '#F4F1EC',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  marginBottom: '20px',
                  whiteSpace: 'pre-line',
                }}
              >
                {`ATLAS\nACADEMY`}
              </h1>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '20px',
                  color: 'rgba(240,237,232,0.8)',
                  marginBottom: '32px',
                  maxWidth: '380px',
                }}
              >
                Your map. Your future. On your terms.
              </p>
              <Link
                href="#apply"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  backgroundColor: '#0E0E0E',
                  color: '#F4F1EC',
                  padding: '14px 28px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Apply Now →
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Right — Photo */}
          <div style={{ position: 'relative' }}>
            <PhotoPlaceholder label="Youth in Atlas Academy Session" aspectRatio="1/1" className="h-full" />
          </div>
        </section>

        {/* Section 2: 10-Week Program Overview */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Program Structure" />
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
                10 WEEKS. ONE MAP.
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#C0C0C0',
                  maxWidth: '560px',
                  lineHeight: 1.6,
                  marginBottom: '48px',
                }}
              >
                Each cohort meets weekly. Sessions are 2 hours, facilitated by trained mentors. Youth build toward a
                final portfolio presentation in Week 10.
              </p>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '2px',
              }}
            >
              {weekData.map((w, i) => (
                <AnimateOnScroll key={w.week} delay={i * 0.03}>
                  <div
                    style={{
                      backgroundColor: '#1A1A1A',
                      borderTop: '4px solid #B5142A',
                      padding: '24px 20px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '13px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#B5142A',
                        marginBottom: '10px',
                      }}
                    >
                      Week {w.week}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '22px',
                        color: '#F4F1EC',
                        letterSpacing: '0.03em',
                        marginBottom: '8px',
                      }}
                    >
                      {w.title}
                    </div>
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '13px',
                        color: '#C0C0C0',
                        lineHeight: 1.5,
                      }}
                    >
                      {w.body}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Testimonials */}
        <section style={{ backgroundColor: '#1A1A1A', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="From Cohort Alumni" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '48px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                }}
              >
                IN THEIR WORDS
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div style={{ maxWidth: '720px' }}>
                <blockquote
                  style={{
                    borderLeft: '3px solid #B5142A',
                    paddingLeft: '24px',
                    marginBottom: '32px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontStyle: 'italic',
                      fontSize: '22px',
                      color: '#F4F1EC',
                      lineHeight: 1.5,
                      marginBottom: '16px',
                    }}
                  >
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </p>
                  <cite
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#555555',
                    }}
                  >
                    — {testimonials[activeTestimonial].name} · {testimonials[activeTestimonial].role}
                  </cite>
                </blockquote>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: i === activeTestimonial ? '#B5142A' : '#2A2A2A',
                        padding: 0,
                        transition: 'background-color 0.2s',
                      }}
                      aria-label={`View testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Free Resource — Atlas Academy */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <div
                style={{
                  borderTop: '4px solid #FF4B1F',
                  paddingTop: '32px',
                  maxWidth: '720px',
                }}
              >
                {/* Label */}
                <div
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '13px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#FF4B1F',
                    marginBottom: '16px',
                  }}
                >
                  FREE RESOURCE&nbsp;&nbsp;·&nbsp;&nbsp;ATLAS ACADEMY
                </div>

                {/* Heading */}
                <h2
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(36px, 5vw, 64px)',
                    color: '#0E0E0E',
                    letterSpacing: '0.02em',
                    lineHeight: 0.95,
                    marginBottom: '12px',
                  }}
                >
                  Securing the Bag &amp; Saving Your Summer
                </h2>

                {/* Subheading */}
                <p
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 600,
                    fontSize: '18px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#444444',
                    marginBottom: '20px',
                  }}
                >
                  The Math Behind the Lifeguard Hustle
                </p>

                {/* Body */}
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#1A1A1A',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                    maxWidth: '600px',
                  }}
                >
                  This financial literacy guide breaks down exactly how teen lifeguarding pays 2.7× more per hour than
                  minimum wage jobs — while working fewer hours. Includes the full certification breakdown, test prep
                  tips, and how to find your local opportunity anywhere in the U.S.{' '}
                  <strong style={{ fontWeight: 500 }}>13 slides. Built for any teen, any city.</strong>
                </p>

                {/* Download Button */}
                <a
                  href="/downloads/AtlasAcademy_LifeguardDeck.pptx"
                  download
                  aria-label="Download the free Securing the Bag & Saving Your Summer financial literacy guide for teens — 13-slide PowerPoint"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '14px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#FF4B1F',
                    color: '#FFFFFF',
                    padding: '16px 36px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginBottom: '20px',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#CC3A15';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#FF4B1F';
                  }}
                >
                  Download the Free Guide&nbsp;&nbsp;→
                </a>

                {/* Tags */}
                <div
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 600,
                    fontSize: '13px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C0C0C0',
                    marginBottom: '10px',
                  }}
                >
                  Financial Literacy&nbsp;&nbsp;·&nbsp;&nbsp;Career Readiness&nbsp;&nbsp;·&nbsp;&nbsp;Ages 14–21&nbsp;&nbsp;·&nbsp;&nbsp;Free Download
                </div>

                {/* Attribution */}
                <div
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '11px',
                    color: '#AAAAAA',
                    letterSpacing: '0.04em',
                  }}
                >
                  A US-Squared Research Institute Resource&nbsp;&nbsp;·&nbsp;&nbsp;Atlas Academy&nbsp;&nbsp;·&nbsp;&nbsp;us-squared.org
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 4: Application */}
        <section id="apply" style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Cohort 4 · Summer 2026" color="#B5142A" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '32px',
                  lineHeight: 0.95,
                }}
              >
                APPLY TO ATLAS ACADEMY
              </h2>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                marginBottom: '48px',
              }}
            >
              <AnimateOnScroll delay={0.05}>
                <div>
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '20px',
                      color: '#0E0E0E',
                      letterSpacing: '0.05em',
                      marginBottom: '12px',
                    }}
                  >
                    Eligibility
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {['Ages 14–21', 'Free to Apply', 'No prerequisites or experience required'].map(
                      (item) => (
                        <li
                          key={item}
                          style={{
                            fontFamily: 'Barlow, sans-serif',
                            fontSize: '14px',
                            color: '#444444',
                            paddingLeft: '16px',
                            borderLeft: '2px solid #B5142A',
                          }}
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <div>
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '20px',
                      color: '#0E0E0E',
                      letterSpacing: '0.05em',
                      marginBottom: '12px',
                    }}
                  >
                    Timeline
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {[
                      'Applications open: May 2026',
                      'Decisions sent: June 2026',
                      'Cohort 4 begins: July 2026',
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          fontFamily: 'Barlow, sans-serif',
                          fontSize: '14px',
                          color: '#444444',
                          paddingLeft: '16px',
                          borderLeft: '2px solid #B5142A',
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={0.15}>
              <Link
                href="/connect"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: '14px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  backgroundColor: '#B5142A',
                  color: '#F4F1EC',
                  padding: '16px 36px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Apply for Cohort 4 →
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 5: Questions CTA */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Questions" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '20px',
                  lineHeight: 0.95,
                }}
              >
                HAVE A QUESTION?
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#C0C0C0',
                  maxWidth: '520px',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}
              >
                Send it our way —{' '}
                <a
                  href="mailto:executive@us-squared.org"
                  style={{ color: '#B5142A', textDecoration: 'none' }}
                >
                  executive@us-squared.org
                </a>
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
