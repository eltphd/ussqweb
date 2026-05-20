'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
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

const pricingTiers = [
  { qty: '1–9 copies', price: '$25', per: 'per copy' },
  { qty: '10–24 copies', price: '$20', per: 'per copy' },
  { qty: '25+ copies', price: '$15', per: 'per copy' },
];

export default function FeelingsUnpluggedPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
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
              right: '-2vw',
              top: '10vh',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '24vw',
              color: 'rgba(212,160,23,0.04)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            FU
          </div>

          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <AnimateOnScroll>
              <Eyebrow text="A US-Squared Research Institute Publication" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  color: '#F4F1EC',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '16px',
                }}
              >
                {`FEELINGS\nUNPLUGGED`}
              </h1>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '22px',
                  color: '#D4A017',
                  marginBottom: '20px',
                  letterSpacing: '0.04em',
                }}
              >
                Named. Held. Understood.
              </p>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#888888',
                  maxWidth: '560px',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}
              >
                A compact emotional intelligence guide grounded in the BASE Framework — designed for young
                people learning to name what they feel, and the adults who hold them. Built from peer-reviewed
                research on Black adolescent emotional suppression. Available now in print.
              </p>
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
                  Get Your Copy → feelingsunplugged.com
                </a>
                <a
                  href="#bulk"
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
                  Bulk &amp; Institutional Pricing ↓
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Who It's For ─────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Who It's For" color="#D4A017" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(32px, 8vw, 64px)',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                  lineHeight: 1,
                }}
              >
                BUILT FOR YOUNG PEOPLE.<br />DESIGNED FOR THE ADULTS WHO HOLD THEM.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2px',
                }}
              >
                {/* Primary Audiences */}
                <div
                  style={{
                    backgroundColor: '#0E0E0E',
                    borderTop: '4px solid #D4A017',
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
                      color: '#D4A017',
                      marginBottom: '16px',
                    }}
                  >
                    Primary Audiences
                  </div>
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '28px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '20px',
                    }}
                  >
                    Young People
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      'Teens ages 10–18',
                      'Neurodivergent learners',
                      'LGBTQ+ youth',
                      'Young people navigating emotional suppression',
                      'Youth who struggle to name or express their feelings',
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}
                      >
                        <div
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: '#D4A017',
                            flexShrink: 0,
                            marginTop: '8px',
                          }}
                        />
                        <p
                          style={{
                            fontFamily: 'Barlow, sans-serif',
                            fontSize: '14px',
                            color: '#888888',
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Institutional Buyers */}
                <div
                  style={{
                    backgroundColor: '#0E0E0E',
                    borderTop: '4px solid #D4A017',
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
                      color: '#D4A017',
                      marginBottom: '16px',
                    }}
                  >
                    Institutional Buyers
                  </div>
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '28px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '20px',
                    }}
                  >
                    Organizations &amp; Professionals
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      'School counselors and social workers',
                      'Therapists and mental health clinicians',
                      'Nonprofits and after-school programs',
                      'Community-based youth organizations',
                      'Faith communities and mentorship programs',
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}
                      >
                        <div
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: '#D4A017',
                            flexShrink: 0,
                            marginTop: '8px',
                          }}
                        />
                        <p
                          style={{
                            fontFamily: 'Barlow, sans-serif',
                            fontSize: '14px',
                            color: '#888888',
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── The Research Behind It ───────────────────────────────────── */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="The Research Behind It" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(32px, 8vw, 64px)',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                  lineHeight: 0.95,
                }}
              >
                GROUNDED IN THE BASE FRAMEWORK
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#888888',
                  maxWidth: '560px',
                  lineHeight: 1.7,
                  marginBottom: '48px',
                }}
              >
                Every prompt and tool in Feelings Unplugged is derived from peer-reviewed research on Black
                adolescent emotional suppression and the BASE Framework — the pedagogical spine of the
                US-Squared Research Institute.
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
                {[
                  {
                    label: 'Peer-Reviewed Foundation',
                    title: 'Latent Transition Analysis',
                    body: 'Tartt, E. L., Nylund-Gibson, K., et al. (in press). Latent Transition Analysis of adolescent racial discrimination and mental health outcomes. Psychological Methods.',
                  },
                  {
                    label: 'Doctoral Research',
                    title: 'Unraveling Hopelessness',
                    body: 'Tartt, E. L. (2023). Unraveling Hopelessness: A latent class analysis of mental health profiles among Black adolescents. University of California, Santa Barbara.',
                  },
                  {
                    label: 'BASE Framework',
                    title: 'Brilliance · Authenticity · Self-Expression · Empowerment',
                    body: 'A justice-centered developmental framework derived from dissertation research and community practice — the counter-architecture to every system that told a young person their brilliance was a problem.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
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
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#D4A017',
                        marginBottom: '12px',
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '24px',
                        color: '#F4F1EC',
                        letterSpacing: '0.03em',
                        marginBottom: '12px',
                        lineHeight: 1.1,
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '13px',
                        color: '#888888',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
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
                View All Research →
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Bulk & Institutional Pricing ─────────────────────────────── */}
        <section id="bulk" style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Bulk & Institutional Pricing" color="#D4A017" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(32px, 8vw, 64px)',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                  lineHeight: 0.95,
                }}
              >
                ORDER FOR YOUR PROGRAM
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#444444',
                  maxWidth: '520px',
                  lineHeight: 1.6,
                  marginBottom: '40px',
                }}
              >
                Volume pricing for counselors, therapists, schools, nonprofits, and after-school programs.
                Contact us to place a bulk order or discuss program licensing.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div
                role="table"
                aria-label="Bulk pricing tiers"
                style={{
                  maxWidth: '640px',
                  border: '1px solid #0E0E0E',
                  marginBottom: '40px',
                }}
              >
                {/* Header */}
                <div
                  role="row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    backgroundColor: '#0E0E0E',
                    padding: '14px 20px',
                  }}
                >
                  {['Quantity', 'Price', 'Per'].map((h) => (
                    <div
                      key={h}
                      role="columnheader"
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#D4A017',
                      }}
                    >
                      {h}
                    </div>
                  ))}
                </div>

                {pricingTiers.map((tier, i) => (
                  <div
                    key={tier.qty}
                    role="row"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      padding: '16px 20px',
                      backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F4F1EC',
                      borderTop: '1px solid rgba(10,10,10,0.08)',
                    }}
                  >
                    <div
                      role="cell"
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontWeight: 600,
                        fontSize: '14px',
                        color: '#0E0E0E',
                      }}
                    >
                      {tier.qty}
                    </div>
                    <div
                      role="cell"
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '24px',
                        color: '#D4A017',
                        lineHeight: 1,
                      }}
                    >
                      {tier.price}
                    </div>
                    <div
                      role="cell"
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '13px',
                        color: '#888888',
                        alignSelf: 'center',
                      }}
                    >
                      {tier.per}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="mailto:executive@us-squared.org?subject=Bulk Order Inquiry — Feelings Unplugged"
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
                  Contact for Bulk Orders →
                </a>
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
                    border: '2px solid #0E0E0E',
                    color: '#0E0E0E',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                  }}
                >
                  Individual Copies → feelingsunplugged.com
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Brilliance Forward Access Fund ───────────────────────────── */}
        <section id="access-fund" style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <div
              className="grid-fu-fund"
            >
              <AnimateOnScroll>
                <Eyebrow text="A US-Squared Program" />
                <h2
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(38px, 9vw, 72px)',
                    color: '#D4A017',
                    lineHeight: 0.9,
                    letterSpacing: '0.02em',
                    whiteSpace: 'pre-line',
                    marginBottom: '0',
                  }}
                >
                  {`BRILLIANCE\nFORWARD\nACCESS\nFUND`}
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 300,
                    fontSize: '20px',
                    color: '#F4F1EC',
                    marginBottom: '20px',
                    lineHeight: 1.5,
                  }}
                >
                  Every book bought places one in the hands of a young person who cannot afford one.
                </p>
                <p
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '16px',
                    color: '#888888',
                    maxWidth: '540px',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                  }}
                >
                  The Brilliance Forward Access Fund is a buy-one-give-one program of the US-Squared Research
                  Institute. Your gift places a copy of Feelings Unplugged in the hands of a young person who
                  cannot afford one. Every dollar goes directly to subsidized copies and distribution — no
                  overhead, no middleman.
                </p>
                <a
                  href="mailto:executive@us-squared.org?subject=Brilliance Forward Access Fund — Donation"
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
                  Give to the Access Fund →
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Podcast — Coming Soon ─────────────────────────────────────── */}
        {/* TODO: Enable podcast section once platform is live */}
        <section style={{ backgroundColor: '#1A1A1A', padding: '60px 0', borderTop: '1px solid #2A2A2A' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <div
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#444444',
                  marginBottom: '12px',
                }}
              >
                Also Available As
              </div>
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '48px',
                  color: '#444444',
                  letterSpacing: '0.02em',
                  marginBottom: '12px',
                  lineHeight: 0.95,
                }}
              >
                THE PODCAST
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#3A3A3A',
                  maxWidth: '480px',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                A companion podcast to the book — conversations on emotional intelligence, the BASE Framework,
                and what it means to feel fully.
              </p>
              <span
                aria-disabled="true"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  backgroundColor: '#2A2A2A',
                  color: '#555555',
                  padding: '14px 28px',
                  display: 'inline-block',
                  cursor: 'not-allowed',
                  userSelect: 'none',
                  border: '1px solid #333333',
                }}
              >
                Coming Soon
              </span>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Cross-link to retail site ─────────────────────────────────── */}
        <section style={{ backgroundColor: '#1A1A1A', padding: '48px 0', borderTop: '1px solid #2A2A2A' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '10px',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#555555',
                      marginBottom: '8px',
                    }}
                  >
                    Individual &amp; Retail Purchases
                  </div>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '16px',
                      color: '#888888',
                      lineHeight: 1.5,
                    }}
                  >
                    Looking for a single copy for yourself or a young person you love?
                  </p>
                </div>
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
                    border: '2px solid #D4A017',
                    color: '#D4A017',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                    flexShrink: 0,
                  }}
                >
                  Visit feelingsunplugged.com →
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
