'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
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

const faqs = [
  {
    q: 'Do I need experience?',
    a: 'No experience required. Atlas Academy is designed for youth who are curious, not credentialed. We meet you exactly where you are.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. Atlas Academy is completely free to apply and participate in. There is no cost, no catch. We believe financial barriers should never prevent a young person from accessing quality programming.',
  },
  {
    q: 'Is it in-person or virtual?',
    a: 'Both. We offer in-person cohorts in the Columbus, OH metro area and virtual cohorts open to youth nationwide. Check the application for current offerings.',
  },
  {
    q: 'What happens after Atlas Academy?',
    a: 'Graduates join the Atlas Alumni Network — ongoing mentorship, job referrals, leadership opportunities, and access to USSQ\'s full program ecosystem.',
  },
  {
    q: 'How do I apply?',
    a: 'Click "Apply for Cohort 4" below and complete the short application form. We review applications on a rolling basis and notify applicants within two weeks.',
  },
];

export default function AtlasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '13px',
                color: '#888888',
                lineHeight: 1.6,
              }}
            >
              Atlas Academy is a curriculum artifact and legacy program of{' '}
              <strong style={{ color: '#F0EDE8' }}>Atlas ERA — The Education Research Association</strong>. The
              broader Atlas ERA network is now the organizational home for our field-building, credentialing, and
              community connection work.{' '}
              <a href="/about" style={{ color: '#FF4B1F', textDecoration: 'none' }}>
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
              backgroundColor: '#FF4B1F',
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
                  color: '#F0EDE8',
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
                  fontFamily: 'IBM Plex Sans, sans-serif',
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
                  backgroundColor: '#0A0A0A',
                  color: '#F0EDE8',
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
        <section style={{ backgroundColor: '#0A0A0A', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Program Structure" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#F0EDE8',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                  lineHeight: 0.95,
                }}
              >
                10 WEEKS. ONE MAP.
              </h2>
              <p
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#888888',
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
                      borderTop: '4px solid #FF4B1F',
                      padding: '24px 20px',
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
                        marginBottom: '10px',
                      }}
                    >
                      Week {w.week}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '22px',
                        color: '#F0EDE8',
                        letterSpacing: '0.03em',
                        marginBottom: '8px',
                      }}
                    >
                      {w.title}
                    </div>
                    <p
                      style={{
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        fontSize: '13px',
                        color: '#888888',
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
                  color: '#F0EDE8',
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
                    borderLeft: '3px solid #FF4B1F',
                    paddingLeft: '24px',
                    marginBottom: '32px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'IBM Plex Sans, sans-serif',
                      fontStyle: 'italic',
                      fontSize: '22px',
                      color: '#F0EDE8',
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
                        backgroundColor: i === activeTestimonial ? '#FF4B1F' : '#2A2A2A',
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

        {/* Section 4: Application */}
        <section id="apply" style={{ backgroundColor: '#F0EDE8', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Cohort 4 · Summer 2026" color="#FF4B1F" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#0A0A0A',
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
                      color: '#0A0A0A',
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
                    {['Ages 14–21', 'Free to apply — no cost ever', 'No prerequisites or experience required'].map(
                      (item) => (
                        <li
                          key={item}
                          style={{
                            fontFamily: 'IBM Plex Sans, sans-serif',
                            fontSize: '14px',
                            color: '#444444',
                            paddingLeft: '16px',
                            borderLeft: '2px solid #FF4B1F',
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
                      color: '#0A0A0A',
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
                          fontFamily: 'IBM Plex Sans, sans-serif',
                          fontSize: '14px',
                          color: '#444444',
                          paddingLeft: '16px',
                          borderLeft: '2px solid #FF4B1F',
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
                  backgroundColor: '#FF4B1F',
                  color: '#F0EDE8',
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

        {/* Section 5: FAQ */}
        <section style={{ backgroundColor: '#0A0A0A', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Frequently Asked" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#F0EDE8',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                  lineHeight: 0.95,
                }}
              >
                YOUR QUESTIONS
              </h2>
            </AnimateOnScroll>

            <div style={{ maxWidth: '800px' }}>
              {faqs.map((faq, i) => (
                <AnimateOnScroll key={i} delay={i * 0.04}>
                  <div
                    style={{
                      borderBottom: '1px solid #1A1A1A',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Bebas Neue, sans-serif',
                          fontSize: '24px',
                          color: '#F0EDE8',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {faq.q}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Bebas Neue, sans-serif',
                          fontSize: '24px',
                          color: '#FF4B1F',
                          flexShrink: 0,
                          marginLeft: '16px',
                          transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                          transition: 'transform 0.2s ease',
                          display: 'inline-block',
                        }}
                      >
                        +
                      </span>
                    </button>
                    {openFaq === i && (
                      <p
                        style={{
                          fontFamily: 'IBM Plex Sans, sans-serif',
                          fontSize: '15px',
                          color: '#888888',
                          lineHeight: 1.7,
                          paddingBottom: '20px',
                          maxWidth: '640px',
                        }}
                      >
                        {faq.a}
                      </p>
                    )}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
