'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import Footer from '@/components/Footer';

function Eyebrow({ text, color = '#2D8A4E' }: { text: string; color?: string }) {
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

const days = [
  {
    day: '01',
    title: 'Arrival & Land',
    body: 'Arrive, settle, and be welcomed onto the land. Introductions, agreements, and orientation.',
  },
  {
    day: '02',
    title: 'Circle Practice',
    body: 'Deep community circle. Shared story, listening, and the practice of being witnessed.',
  },
  {
    day: '03',
    title: 'Creative Expression',
    body: 'Land art, writing, movement, and music. Create from what you carry.',
  },
  {
    day: '04',
    title: 'Rest & Integration',
    body: 'Unstructured time. Rest, nature walks, journaling, somatic practices.',
  },
  {
    day: '05',
    title: 'Closing Ceremony',
    body: 'Community feast, sharing, intention-setting, and a ceremony of return.',
  },
];

export default function EarthPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: '',
    accessNeeds: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
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
              right: '-8vw',
              bottom: '-4vh',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '36vw',
              color: 'rgba(107,58,31,0.06)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            E
          </div>

          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <AnimateOnScroll>
              <Eyebrow text="A US-Squared Retreat · 03" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(72px, 10vw, 120px)',
                  color: '#2D8A4E',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '20px',
                }}
              >
                {`ALTERED\n.EARTH`}
              </h1>
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  color: '#F4F1EC',
                  letterSpacing: '0.05em',
                  marginBottom: '24px',
                }}
              >
                RETURN TO GROUND.
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#888888',
                  maxWidth: '580px',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}
              >
                Five days in nature. Circle practice, creative expression, rest, and ceremony. Altered.Earth is a
                retreat for young people who need to exhale, reconnect, and be held by something larger than a screen.
              </p>
              <div
                style={{
                  backgroundColor: '#2D8A4E',
                  padding: '14px 24px',
                  display: 'inline-block',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: '14px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#F4F1EC',
                }}
              >
                Summer 2026 · Applications Open
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 2: 5-Day Timeline */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="The Experience" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '48px',
                  lineHeight: 0.95,
                }}
              >
                WHAT 5 DAYS LOOKS LIKE
              </h2>
            </AnimateOnScroll>

            {/* Horizontal scroll timeline */}
            <div
              style={{
                display: 'flex',
                gap: '2px',
                overflowX: 'auto',
                paddingBottom: '16px',
              }}
            >
              {days.map((d) => (
                <div
                  key={d.day}
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderTop: '4px solid #2D8A4E',
                    padding: '28px 24px',
                    minWidth: '240px',
                    flex: '1 0 240px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '48px',
                      color: '#2D8A4E',
                      opacity: 0.3,
                      lineHeight: 1,
                      marginBottom: '12px',
                    }}
                  >
                    {d.day}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '22px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '10px',
                    }}
                  >
                    {d.title}
                  </div>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '13px',
                      color: '#888888',
                      lineHeight: 1.6,
                    }}
                  >
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Who It's For */}
        <section style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Who This Is For" color="#2D8A4E" />
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
                TWO TRACKS
              </h2>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2px',
              }}
            >
              <AnimateOnScroll delay={0.05}>
                <div
                  style={{
                    backgroundColor: '#0E0E0E',
                    borderTop: '4px solid #2D8A4E',
                    padding: '36px 32px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '36px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '16px',
                    }}
                  >
                    Youth Track
                  </div>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '15px',
                      color: '#888888',
                      lineHeight: 1.7,
                      marginBottom: '20px',
                    }}
                  >
                    For young people ages 14–22 who are ready to rest, connect with land, process their experiences,
                    and be held in community with peers. No experience with retreat or outdoor programs required.
                  </p>
                  <ul
                    style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}
                  >
                    {['Ages 14–22', 'Sliding scale cost', 'All skill levels welcome', 'Transportation assistance available'].map((i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 600,
                          fontSize: '11px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#2D8A4E',
                          paddingLeft: '12px',
                          borderLeft: '2px solid #2D8A4E',
                        }}
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <div
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderTop: '4px solid rgba(107,58,31,0.4)',
                    padding: '36px 32px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '36px',
                      color: '#F4F1EC',
                      letterSpacing: '0.03em',
                      marginBottom: '16px',
                    }}
                  >
                    Adult Allies Track
                  </div>
                  <p
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '15px',
                      color: '#888888',
                      lineHeight: 1.7,
                      marginBottom: '20px',
                    }}
                  >
                    For educators, mentors, caregivers, and community members who want to do their own healing work
                    while learning to better support the young people in their lives.
                  </p>
                  <ul
                    style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}
                  >
                    {['Ages 23+', 'Educators, mentors, caregivers', 'Facilitated separately from youth', 'Cross-track integration on Day 3'].map((i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 600,
                          fontSize: '11px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'rgba(107,58,31,0.6)',
                          paddingLeft: '12px',
                          borderLeft: '2px solid rgba(107,58,31,0.4)',
                        }}
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Section 4: Logistics */}
        <section style={{ backgroundColor: '#0E0E0E', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Logistics" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '56px',
                  color: '#F4F1EC',
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                }}
              >
                WHAT TO KNOW
              </h2>
            </AnimateOnScroll>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                { label: 'Location', value: 'TBD — Ohio/Regional Outdoor Site' },
                { label: 'Dates', value: 'Summer 2026 · Exact Dates TBA' },
                { label: 'Cost', value: 'Sliding scale. $0–$250. No one turned away.' },
                { label: 'What to Bring', value: 'Comfortable clothes, journal, open mind. Full packing list sent post-registration.' },
              ].map((item) => (
                <AnimateOnScroll key={item.label} delay={0.05}>
                  <div style={{ borderLeft: '3px solid #2D8A4E', paddingLeft: '20px' }}>
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '18px',
                        color: '#2D8A4E',
                        letterSpacing: '0.05em',
                        marginBottom: '8px',
                      }}
                    >
                      {item.label}
                    </div>
                    <p
                      style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '14px',
                        color: '#888888',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Photo placeholder */}
            <AnimateOnScroll delay={0.1}>
              <div style={{ marginTop: '48px', borderLeft: '3px solid #2D8A4E' }}>
                <PhotoPlaceholder label="Retreat Site Placeholder" aspectRatio="16/5" />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section 5: Register Interest Form */}
        <section id="register" style={{ backgroundColor: '#F4F1EC', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <Eyebrow text="Register Interest" color="#2D8A4E" />
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '64px',
                  color: '#0E0E0E',
                  letterSpacing: '0.02em',
                  marginBottom: '12px',
                  lineHeight: 0.95,
                }}
              >
                I&apos;M INTERESTED
              </h2>
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#444444',
                  maxWidth: '480px',
                  lineHeight: 1.6,
                  marginBottom: '36px',
                }}
              >
                Applications open Summer 2026. Register your interest now and be first to know.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              {submitted ? (
                <div
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '16px',
                    color: '#2D8A4E',
                    padding: '24px 28px',
                    border: '2px solid #2D8A4E',
                    display: 'inline-block',
                    maxWidth: '480px',
                  }}
                >
                  Thank you! We&apos;ll reach out when applications open.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    maxWidth: '560px',
                  }}
                >
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        style={{
                          display: 'block',
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 600,
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#888888',
                          marginBottom: '6px',
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formState[field.id as keyof typeof formState]}
                        onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #0E0E0E',
                          fontFamily: 'Barlow, sans-serif',
                          fontSize: '14px',
                          backgroundColor: 'transparent',
                          color: '#0E0E0E',
                          outline: 'none',
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="role"
                      style={{
                        display: 'block',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 600,
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#888888',
                        marginBottom: '6px',
                      }}
                    >
                      I Am A
                    </label>
                    <select
                      id="role"
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #0E0E0E',
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '14px',
                        backgroundColor: '#F4F1EC',
                        color: '#0E0E0E',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Select your role</option>
                      <option value="youth">Youth (ages 14–22)</option>
                      <option value="educator">Educator</option>
                      <option value="mentor">Mentor</option>
                      <option value="caregiver">Caregiver / Parent</option>
                      <option value="other">Other Adult Ally</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="access"
                      style={{
                        display: 'block',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 600,
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#888888',
                        marginBottom: '6px',
                      }}
                    >
                      Access Needs (Optional)
                    </label>
                    <textarea
                      id="access"
                      placeholder="Dietary needs, mobility, sensory, financial assistance, transportation, etc."
                      value={formState.accessNeeds}
                      onChange={(e) => setFormState({ ...formState, accessNeeds: e.target.value })}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #0E0E0E',
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '14px',
                        backgroundColor: 'transparent',
                        color: '#0E0E0E',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '12px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      border: '2px solid #2D8A4E',
                      color: '#2D8A4E',
                      padding: '14px 28px',
                      cursor: 'pointer',
                      backgroundColor: 'transparent',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Register Interest →
                  </button>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
