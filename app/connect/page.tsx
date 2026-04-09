'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
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

export default function ConnectPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
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
            backgroundColor: '#0A0A0A',
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
              fontSize: '24vw',
              color: 'rgba(255,75,31,0.03)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            BUILD
          </div>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <AnimateOnScroll>
              <Eyebrow text="Connect" />
              <h1
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  color: '#F0EDE8',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-line',
                  marginBottom: '20px',
                }}
              >
                {`LET'S BUILD\nSOMETHING REAL.`}
              </h1>
              <p
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontWeight: 300,
                  fontSize: '18px',
                  color: '#888888',
                  maxWidth: '540px',
                  lineHeight: 1.6,
                }}
              >
                Whether you&apos;re a funder, partner, youth applicant, educator, or just someone who believes in this
                work — we want to hear from you.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* 4-card CTA grid */}
        <section style={{ backgroundColor: '#F0EDE8', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '48px',
                  color: '#0A0A0A',
                  letterSpacing: '0.02em',
                  marginBottom: '32px',
                }}
              >
                HOW CAN WE HELP?
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '2px',
                  maxWidth: '800px',
                }}
              >
                <Link
                  href="#contact-form"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '16px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#0A0A0A',
                    color: '#F0EDE8',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  Partner With Us
                  <span
                    style={{
                      fontFamily: 'IBM Plex Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '12px',
                      letterSpacing: 0,
                      textTransform: 'none',
                      color: '#555555',
                    }}
                  >
                    Funders, fiscal sponsors, program partners
                  </span>
                </Link>
                <Link
                  href="/atlas"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '16px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    backgroundColor: '#FF4B1F',
                    color: '#F0EDE8',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  Apply to a Program
                  <span
                    style={{
                      fontFamily: 'IBM Plex Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '12px',
                      letterSpacing: 0,
                      textTransform: 'none',
                      color: 'rgba(240,237,232,0.7)',
                    }}
                  >
                    Atlas Academy, Altered.Earth
                  </span>
                </Link>
                <Link
                  href="#contact-form"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '16px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '2px solid #FF4B1F',
                    color: '#FF4B1F',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    backgroundColor: 'transparent',
                  }}
                >
                  Support Our Work
                  <span
                    style={{
                      fontFamily: 'IBM Plex Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '12px',
                      letterSpacing: 0,
                      textTransform: 'none',
                      color: '#888888',
                    }}
                  >
                    Donations, grants, in-kind
                  </span>
                </Link>
                <Link
                  href="#contact-form"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '16px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '2px solid #0A0A0A',
                    color: '#0A0A0A',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    backgroundColor: 'transparent',
                  }}
                >
                  Contact Us
                  <span
                    style={{
                      fontFamily: 'IBM Plex Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '12px',
                      letterSpacing: 0,
                      textTransform: 'none',
                      color: '#888888',
                    }}
                  >
                    General inquiries, media, speaking
                  </span>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" style={{ backgroundColor: '#0A0A0A', padding: '80px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'start',
              }}
            >
              {/* Left: Form */}
              <div>
                <AnimateOnScroll>
                  <Eyebrow text="Send a Message" />
                  <h2
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '48px',
                      color: '#F0EDE8',
                      letterSpacing: '0.02em',
                      marginBottom: '32px',
                    }}
                  >
                    GET IN TOUCH
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.1}>
                  {submitted ? (
                    <div
                      style={{
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        fontSize: '16px',
                        color: '#FF4B1F',
                        padding: '24px 28px',
                        border: '1px solid #FF4B1F',
                      }}
                    >
                      Thank you for reaching out. We&apos;ll be in touch within 3–5 business days.
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
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
                              border: '2px solid #2A2A2A',
                              backgroundColor: '#1A1A1A',
                              color: '#F0EDE8',
                              fontFamily: 'IBM Plex Sans, sans-serif',
                              fontSize: '14px',
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
                            border: '2px solid #2A2A2A',
                            backgroundColor: '#1A1A1A',
                            color: '#F0EDE8',
                            fontFamily: 'IBM Plex Sans, sans-serif',
                            fontSize: '14px',
                            outline: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          <option value="">Select your role</option>
                          <option value="funder">Funder / Partner</option>
                          <option value="youth">Youth Applicant</option>
                          <option value="educator">Educator / Mentor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
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
                          Message
                        </label>
                        <textarea
                          id="message"
                          placeholder="Tell us what you&apos;re looking for..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          required
                          rows={5}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '2px solid #2A2A2A',
                            backgroundColor: '#1A1A1A',
                            color: '#F0EDE8',
                            fontFamily: 'IBM Plex Sans, sans-serif',
                            fontSize: '14px',
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
                          backgroundColor: '#FF4B1F',
                          color: '#F0EDE8',
                          padding: '14px 28px',
                          border: 'none',
                          cursor: 'pointer',
                          alignSelf: 'flex-start',
                        }}
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </AnimateOnScroll>
              </div>

              {/* Right: Contact info */}
              <AnimateOnScroll delay={0.15}>
                <div>
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '24px',
                      color: '#F0EDE8',
                      letterSpacing: '0.05em',
                      marginBottom: '24px',
                    }}
                  >
                    Direct Contact
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { label: 'Email', value: 'info@us-squared.org' },
                      { label: 'Address', value: '51 E Hocking St\nCanal Winchester, OH 43110' },
                      { label: 'EIN', value: '92-3221304' },
                      { label: 'Status', value: '501(c)(3) Nonprofit' },
                    ].map((item) => (
                      <div key={item.label} style={{ borderLeft: '3px solid #FF4B1F', paddingLeft: '16px' }}>
                        <div
                          style={{
                            fontFamily: 'Barlow Condensed, sans-serif',
                            fontWeight: 600,
                            fontSize: '10px',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: '#FF4B1F',
                            marginBottom: '4px',
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontFamily: 'IBM Plex Sans, sans-serif',
                            fontSize: '15px',
                            color: '#888888',
                            lineHeight: 1.5,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: '40px',
                      padding: '24px',
                      backgroundColor: '#1A1A1A',
                      borderTop: '3px solid #FF4B1F',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        fontSize: '13px',
                        color: '#555555',
                        lineHeight: 1.6,
                      }}
                    >
                      US-Squared Research Institute is a 501(c)(3) nonprofit. EIN 92-3221304. All contributions are
                      tax-deductible to the extent allowed by law.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
