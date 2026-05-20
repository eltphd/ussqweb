'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatCounter from '@/components/StatCounter';

// ─── Program Accordion Row ────────────────────────────────────────────────────
interface ProgramRowProps {
  num: string;
  name: string;
  descriptor: string;
  accent: string;
  hoverText: string;
  href: string;
}

function ProgramRow({ num, name, descriptor, accent, hoverText, href }: ProgramRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: 'relative',
          borderBottom: '1px solid #1A1A1A',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          padding: hovered ? '28px 24px' : '20px 24px',
          transition: 'padding 0.3s ease, background-color 0.3s ease',
          backgroundColor: hovered ? '#111111' : 'transparent',
          overflow: 'hidden',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '6px',
            backgroundColor: accent,
          }}
        />

        {/* Oversized numeral */}
        <div
          aria-hidden="true"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(48px, 10vw, 80px)',
            color: accent,
            opacity: 0.06,
            lineHeight: 1,
            flexShrink: 0,
            width: '52px',
            textAlign: 'right',
            userSelect: 'none',
          }}
        >
          {num}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(24px, 5.5vw, 40px)',
              color: '#F4F1EC',
              letterSpacing: '0.03em',
              lineHeight: 1,
            }}
          >
            {name}
          </div>
          {hovered && (
            <div
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '14px',
                color: '#888888',
                marginTop: '8px',
                maxWidth: '560px',
                lineHeight: 1.5,
              }}
            >
              {hoverText}
            </div>
          )}
        </div>

        {/* Right side — hidden on mobile via .program-row-desc */}
        <div className="program-row-desc" style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '13px',
              color: '#555555',
              marginBottom: hovered ? '8px' : '0',
            }}
          >
            {descriptor}
          </div>
          {hovered && (
            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: accent,
              }}
            >
              Explore →
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

// ─── Module Card ──────────────────────────────────────────────────────────────
interface ModuleCardProps {
  num: string;
  title: string;
  body: string;
  accent: string;
}

function ModuleCard({ num, title, body, accent }: ModuleCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#1A1A1A',
        borderTop: `4px solid ${accent}`,
        padding: '28px 24px',
      }}
    >
      <div
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 900,
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: accent,
          marginBottom: '12px',
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '28px',
          color: '#F4F1EC',
          letterSpacing: '0.03em',
          marginBottom: '12px',
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontFamily: 'Barlow, sans-serif',
          fontSize: '14px',
          color: '#888888',
          lineHeight: 1.6,
        }}
      >
        {body}
      </p>
    </div>
  );
}

// ─── Eyebrow ──────────────────────────────────────────────────────────────────
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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [emailSparent, setEmailSparent] = useState('');
  const [sparentSubmitted, setSparentSubmitted] = useState(false);

  return (
    <>
      <Navigation />
      <main>
        {/* ── Section 00: Hero ─────────────────────────────────────────── */}
        <section
          id="hero"
          style={{
            position: 'relative',
            height: '100svh',
            backgroundColor: '#0E0E0E',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div className="signal-slash" />
          <div className="signal-slash-companion" />

          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-2vw',
              top: '10vh',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '28vw',
              color: 'rgba(212,160,23,0.04)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            US²
          </div>

          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 24px',
              width: '100%',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontSize: '10px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#D4A017',
                marginBottom: '16px',
              }}
            >
              THE SIGNAL. THE FIRE.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(64px, 8vw, 112px)',
                color: '#F4F1EC',
                lineHeight: 0.9,
                letterSpacing: '0.02em',
                whiteSpace: 'pre-line',
                marginBottom: '20px',
              }}
            >
              {`PROTECTING\nADOLESCENT\nBRILLIANCE.`}
            </motion.h1>

            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              style={{
                height: '3px',
                backgroundColor: '#D4A017',
                maxWidth: '580px',
                marginBottom: '24px',
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 300,
                fontSize: '18px',
                color: '#888888',
                maxWidth: '580px',
                lineHeight: 1.6,
              }}
            >
              Atlas ERA — The Education Research Association is the field-building network of the US-Squared Research
              Institute. We connect education researchers, practitioners, and community leaders across global contexts
              — finding the people already doing the work, funding and affirming them, and credentialing the brilliance
              happening everywhere schools are not.
              <br /><br />
              This is not a program. This is an era.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 600,
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#555555',
            }}
          >
            Enter the Network ↓
          </motion.div>
        </section>

        {/* ── Section 01: Mission ──────────────────────────────────────── */}
        <section
          id="mission"
          style={{
            backgroundColor: '#F4F1EC',
            color: '#0E0E0E',
            padding: '80px 0',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <div className="grid-mission">
              <AnimateOnScroll>
                <h2
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(38px, 9vw, 72px)',
                    color: '#0E0E0E',
                    lineHeight: 0.95,
                    letterSpacing: '0.02em',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {`THE SIGNAL.\nTHE FIRE.`}
                </h2>
              </AnimateOnScroll>

              <div className="grid-mission-divider" style={{ width: '3px', backgroundColor: '#D4A017', alignSelf: 'stretch' }} />

              <AnimateOnScroll delay={0.1}>
                <h3
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '48px',
                    color: '#0E0E0E',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                    marginBottom: '24px',
                  }}
                >
                  WE FIND THE PEOPLE ALREADY DOING THE WORK.
                </h3>
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#444444',
                    lineHeight: 1.7,
                    maxWidth: '640px',
                    marginBottom: '20px',
                  }}
                >
                  The embargo on brilliance is structural. Young people are not failing — they are being failed by
                  institutions that were never designed to see them. Atlas ERA doesn&apos;t build another institution.
                  We build the network that connects the ones already fighting back.
                </p>
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#444444',
                    lineHeight: 1.7,
                    maxWidth: '640px',
                  }}
                >
                  We fund practitioners. We affirm communities. We credential learning wherever it actually
                  happens — not just in the buildings we control.
                </p>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={0.2}>
              <div
                className="grid-stats-3"
                style={{
                  paddingTop: '48px',
                  borderTop: '1px solid rgba(10,10,10,0.1)',
                }}
              >
                <StatCounter value="22,000+" label="Lives touched through network partnerships" />
                <StatCounter value="7,000+" label="Adolescents studied in peer-reviewed research" />
                <StatCounter value="20+" label="Years in education research and practice" />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Section 02: Program Hub ──────────────────────────────────── */}
        <section id="programs" style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="The Network" color="#888888" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(38px, 9vw, 72px)',
                  color: '#F4F1EC',
                  lineHeight: 0.95,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '16px',
                }}
              >
                {`4 DOMAINS.\nONE NETWORK.`}
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#888888',
                  maxWidth: '520px',
                  marginBottom: '48px',
                  lineHeight: 1.6,
                }}
              >
                Each domain connects practitioners, funds their work, and credentials the brilliance already
                happening in communities the traditional system cannot see.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div style={{ borderTop: '1px solid #1A1A1A' }}>
                <ProgramRow
                  num="01"
                  name="Research & Evidence"
                  descriptor="Proving what communities already know"
                  accent="#9B82C4"
                  hoverText="Peer-reviewed research, longitudinal data, and the BASE Framework — the pedagogical counter-architecture to every institution that told a young person their brilliance was a problem."
                  href="/research"
                />
                <ProgramRow
                  num="02"
                  name="Atlas ERA Network"
                  descriptor="Connecting practitioners across the world"
                  accent="#B5142A"
                  hoverText="The field-building network connecting education researchers, practitioners, and community leaders across global contexts — credentialing brilliance wherever schools are not."
                  href="/atlas-era"
                />
                <ProgramRow
                  num="03"
                  name="Community Presence"
                  descriptor="Showing up. Witnessing. Investing."
                  accent="#2D8A4E"
                  hoverText="Embodied methodology: discover, visit, connect, credential, invest. The field is the work. The world is the classroom."
                  href="/earth"
                />
                <ProgramRow
                  num="04"
                  name="Sparent Science"
                  descriptor="Tools for the adults who hold young people"
                  accent="#3AB8F0"
                  hoverText="Research-backed tools for the educators, mentors, caregivers, and coaches who surround young people. Monthly newsletter + podcast with Dr. Erica L. Tartt, PhD."
                  href="/sparent"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Pipeline: LEARN · CREATE · WORK ──────────────────────────── */}
        <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="The Worldskool Pipeline" color="#888888" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(38px, 9vw, 72px)',
                  color: '#F4F1EC',
                  lineHeight: 0.95,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '16px',
                }}
              >
                {`LEARN.\nCREATE.\nWORK.`}
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#555555',
                  maxWidth: '480px',
                  lineHeight: 1.6,
                  marginBottom: '48px',
                }}
              >
                Three arms. One arc. From identity to creation to economic power — the Atlas ERA pipeline connects every stage of the journey.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '2px',
                  marginBottom: '40px',
                }}
              >
                <div style={{ backgroundColor: '#1A1A1A', borderTop: '4px solid #B5142A', padding: '32px 28px' }}>
                  <div
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#B5142A',
                      marginBottom: '12px',
                    }}
                  >
                    Learn
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '36px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '12px',
                    }}
                  >
                    Atlas Academy
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
                    10-week BASE Framework curriculum for learners 14&ndash;21. Free to apply. In-person and virtual cohorts.
                  </p>
                  <Link
                    href="/atlas"
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
                    Apply for Cohort 4 &rarr;
                  </Link>
                </div>

                <div style={{ backgroundColor: '#1A1A1A', borderTop: '4px solid #2D8A4E', padding: '32px 28px' }}>
                  <div
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#2D8A4E',
                      marginBottom: '12px',
                    }}
                  >
                    Create
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '36px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '12px',
                    }}
                  >
                    Altered.Earth
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
                    Five days in nature. Circle practice, creative expression, and ceremony for youth ages 14&ndash;22.
                  </p>
                  <Link
                    href="/earth"
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#2D8A4E',
                      textDecoration: 'none',
                    }}
                  >
                    Register Interest &rarr;
                  </Link>
                </div>

                <div style={{ backgroundColor: '#1A1A1A', borderTop: '4px solid #9B82C4', padding: '32px 28px' }}>
                  <div
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#9B82C4',
                      marginBottom: '12px',
                    }}
                  >
                    Work
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '36px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '12px',
                    }}
                  >
                    BASEops
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
                    Workforce development network connecting community members, justice-involved individuals, and youth 14+ to economic opportunity.
                  </p>
                  <Link
                    href="/baseops"
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
                    Explore BASEops &rarr;
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <Link
                href="/atlas-era"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  backgroundColor: '#D4A017',
                  color: '#0E0E0E',
                  padding: '14px 28px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                See the Full Network &rarr;
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Section 06: Sparent Science ──────────────────────────────── */}
        <section id="sparent" style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="A US-Squared Newsletter · 04" color="#3AB8F0" />
            </AnimateOnScroll>
            <div className="grid-sparent">
              <div>
                <AnimateOnScroll>
                  <h2
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 'clamp(38px, 9vw, 72px)',
                      color: '#0E0E0E',
                      lineHeight: 0.9,
                      letterSpacing: '0.02em',
                      whiteSpace: 'pre-line',
                      marginBottom: '20px',
                    }}
                  >
                    {`SPARENT\nSCIENCE`}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontWeight: 300,
                      fontSize: '16px',
                      color: '#444444',
                      lineHeight: 1.7,
                      marginBottom: '28px',
                      maxWidth: '440px',
                    }}
                  >
                    Monthly research-backed tools for the educators, mentors, caregivers, and coaches who surround young
                    people.
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                    {['Identity', 'Mental Health', 'Race & Culture', 'Relationships', 'Grief', 'Boundaries'].map(
                      (topic) => (
                        <span
                          key={topic}
                          style={{
                            fontFamily: 'Barlow Condensed, sans-serif',
                            fontWeight: 600,
                            fontSize: '10px',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            backgroundColor: 'rgba(58,184,240,0.12)',
                            color: '#3AB8F0',
                            padding: '4px 10px',
                          }}
                        >
                          {topic}
                        </span>
                      )
                    )}
                  </div>

                  {sparentSubmitted ? (
                    <div
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '14px',
                        color: '#3AB8F0',
                        padding: '16px',
                        border: '1px solid #3AB8F0',
                      }}
                    >
                      Thank you! You&apos;re on the list.
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSparentSubmitted(true);
                      }}
                      className="form-subscribe"
                    >
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={emailSparent}
                        onChange={(e) => setEmailSparent(e.target.value)}
                        required
                        style={{
                          flex: 1,
                          padding: '12px 16px',
                          border: '2px solid #0A0A0A',
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
                          padding: '12px 20px',
                          border: 'none',
                          cursor: 'pointer',
                          flexShrink: 0,
                        }}
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </AnimateOnScroll>
              </div>

              <AnimateOnScroll delay={0.1}>
                <div
                  style={{
                    backgroundColor: '#0E0E0E',
                    borderTop: '4px solid #3AB8F0',
                    padding: '32px',
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
                      marginBottom: '20px',
                    }}
                  >
                    Vol. 03 · Issue 12
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '36px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '16px',
                      lineHeight: 1.1,
                    }}
                  >
                    When Your Teenager Won&apos;t Talk
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '14px',
                      color: '#888888',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                    }}
                  >
                    Adolescent silence is data, not rejection. This issue breaks down the science of teen withdrawal and
                    gives you three evidence-based approaches for reconnecting without pressure.
                  </p>
                  <div
                    style={{
                      backgroundColor: 'rgba(58,184,240,0.15)',
                      borderLeft: '3px solid #3AB8F0',
                      padding: '16px 20px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#3AB8F0',
                        marginBottom: '8px',
                      }}
                    >
                      Try This
                    </div>
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '14px',
                        color: '#888888',
                        lineHeight: 1.5,
                      }}
                    >
                      Ask one open question today — not &ldquo;How was school?&rdquo; but &ldquo;What&apos;s something
                      you&apos;re thinking about?&rdquo; Then wait.
                    </p>
                  </div>
                  <Link
                    href="/sparent"
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#3AB8F0',
                      textDecoration: 'none',
                      display: 'inline-block',
                      marginTop: '20px',
                    }}
                  >
                    Read Full Issue →
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={0.2}>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '14px',
                  color: '#444444',
                  lineHeight: 1.6,
                  marginTop: '40px',
                  borderTop: '1px solid rgba(10,10,10,0.1)',
                  paddingTop: '24px',
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

        {/* ── Section 07: Research ─────────────────────────────────────── */}
        <section id="research" style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Research & Impact" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(38px, 9vw, 72px)',
                  color: '#F4F1EC',
                  lineHeight: 0.95,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '16px',
                }}
              >
                {`THE DATA BEHIND\nTHE WORK.`}
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#888888',
                  maxWidth: '560px',
                  lineHeight: 1.6,
                  marginBottom: '48px',
                }}
              >
                Our programs aren&apos;t built on assumptions. They&apos;re built on peer-reviewed research, longitudinal
                data, and the lived experiences of the 7,000+ young people whose stories we&apos;ve had the honor of
                studying.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2px',
                  marginBottom: '48px',
                }}
              >
                <ModuleCard
                  num="Peer-Reviewed"
                  title="Latent Transition Analysis"
                  body="Tartt, E. L., Nylund-Gibson, K., et al. (in press). Latent Transition Analysis of adolescent racial discrimination and mental health outcomes. Psychological Methods."
                  accent="#D4A017"
                />
                <ModuleCard
                  num="Dissertation"
                  title="Unraveling Hopelessness"
                  body="Tartt, E. L. (2023). Unraveling Hopelessness: A latent class analysis of mental health profiles among Black adolescents. UCSB. GPA 3.98."
                  accent="#D4A017"
                />
                <ModuleCard
                  num="BASE Framework"
                  title="Brilliance · Authenticity · Self-Expression · Empowerment"
                  body="A justice-centered developmental framework for programs serving Black and Brown youth, derived from dissertation research and community practice. The BASE Framework is the pedagogical spine of the Atlas ERA network — the counter-architecture to every institution that told a young person their brilliance was a problem."
                  accent="#D4A017"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <blockquote
                style={{
                  borderLeft: '3px solid #D4A017',
                  paddingLeft: '24px',
                  marginBottom: '40px',
                  maxWidth: '640px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontStyle: 'italic',
                    fontSize: '20px',
                    color: '#888888',
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;These young people weren&apos;t hopeless. They were under-resourced, over-surveilled, and
                  under-believed. The data just confirmed what they already knew.&rdquo;
                </p>
                <cite
                  style={{
                    display: 'block',
                    marginTop: '12px',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#555555',
                  }}
                >
                  — Dr. Erica L. Tartt, PhD
                  <br />Founder &amp; Research Director, Atlas ERA / US-Squared Research Institute
                </cite>
              </blockquote>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  href="/research"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#D4A017',
                    color: '#F4F1EC',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  View All Research
                </Link>
                <Link
                  href="/research"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '2px solid #D4A017',
                    color: '#D4A017',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                  }}
                >
                  Download Impact Brief
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Section 07: Feelings Unplugged ──────────────────────────── */}
        <section
          id="feelings-unplugged"
          style={{
            backgroundColor: '#1A1A1A',
            borderTop: '4px solid #D4A017',
            padding: '80px 0',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="A US-Squared Publication · 05" color="#D4A017" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(38px, 10vw, 96px)',
                  color: '#D4A017',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  marginBottom: '12px',
                }}
              >
                FEELINGS UNPLUGGED
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '20px',
                  color: '#F4F1EC',
                  marginBottom: '16px',
                }}
              >
                Named. Held. Understood.
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
                Feelings Unplugged is a compact emotional intelligence guide grounded in the BASE Framework —
                designed for young people learning to name what they feel, and the adults who hold them. Built
                from peer-reviewed research on Black adolescent emotional suppression. Available now in print.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.feelingsunplugged.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#D4A017',
                    color: '#0E0E0E',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Get Your Copy →
                </a>
                <Link
                  href="/feelings-unplugged#bulk"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '2px solid #D4A017',
                    color: '#D4A017',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                  }}
                >
                  Bulk &amp; Institutional Pricing →
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Section 08: Connect CTA ──────────────────────────────────── */}
        <section id="connect-cta" style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(38px, 10vw, 80px)',
                  color: '#0E0E0E',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '20px',
                }}
              >
                {`READY TO BUILD\nSOMETHING REAL?`}
              </h2>
              <div style={{ height: '3px', backgroundColor: '#D4A017', marginBottom: '48px' }} />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div
                className="grid-cta-2x2"
                style={{ maxWidth: '800px' }}
              >
                <Link
                  href="/connect"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '14px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#D4A017',
                    color: '#F4F1EC',
                    padding: '24px 28px',
                    textDecoration: 'none',
                    display: 'block',
                    textAlign: 'center',
                  }}
                >
                  Join the Network
                </Link>
                <Link
                  href="/connect"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '14px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#0E0E0E',
                    color: '#F4F1EC',
                    padding: '24px 28px',
                    textDecoration: 'none',
                    display: 'block',
                    textAlign: 'center',
                  }}
                >
                  Support the Work
                </Link>
                <Link
                  href="/connect"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '14px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '2px solid #0A0A0A',
                    color: '#0E0E0E',
                    padding: '24px 28px',
                    textDecoration: 'none',
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                  }}
                >
                  Partner With Us
                </Link>
                <Link
                  href="/connect"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '14px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '2px solid #D4A017',
                    color: '#D4A017',
                    padding: '24px 28px',
                    textDecoration: 'none',
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                  }}
                >
                  Contact
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ backgroundColor: '#0E0E0E', borderTop: '3px solid #D4A017' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '48px 24px 32px' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '40px',
              }}
            >
              <Link
                href="/"
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '22px',
                  color: '#F4F1EC',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                }}
              >
                US² | Atlas ERA
              </Link>
              <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
                {[
                  { label: 'Network', href: '/#programs' },
                  { label: 'Research', href: '/research' },
                  { label: 'About', href: '/about' },
                  { label: 'BASEops', href: '/baseops' },
                  { label: 'Atlas Academy', href: '/atlas' },
                  { label: 'Altered.Earth', href: '/earth' },
                  { label: 'Sparent Science', href: '/sparent' },
                  { label: 'Feelings Unplugged', href: '/feelings-unplugged' },
                  { label: 'Brilliance Forward Fund', href: '/feelings-unplugged#access-fund' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
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
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div style={{ display: 'flex', gap: '16px' }}>
                {['Instagram', 'LinkedIn'].map((s) => (
                  <a
                    key={s}
                    href="#"
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
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div style={{ height: '1px', backgroundColor: '#1A1A1A', marginBottom: '24px' }} />
            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#555555',
                marginBottom: '16px',
              }}
            >
              Atlas ERA — The Education Research Association
              <br />
              A US-Squared Research Institute Initiative
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '12px',
                  color: '#555555',
                  lineHeight: 1.6,
                  maxWidth: '560px',
                }}
              >
                US-Squared Research Institute is a 501(c)(3) nonprofit. EIN 92-3221304. All contributions are
                tax-deductible to the extent allowed by law.
              </p>
              <p
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: '#555555',
                  textAlign: 'right',
                }}
              >
                Columbus, Ohio
                <br />
                executive@us-squared.org
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
