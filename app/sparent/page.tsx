import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';
import Venture from '@/components/Venture';
import SparentSignup from '@/components/SparentSignup';
import IssueArt from '@/components/sparent/IssueArt';
import IssueCard from '@/components/sparent/IssueCard';
import { Section, Eyebrow, Coord, Button, Card } from '@/components/ui';
import { allIssues, latestIssue, issuesByTopic, issueHref, issueLabel, topicByKey, topicHref, NEXT_ISSUE, TOPICS } from '@/lib/sparent';

export const metadata: Metadata = {
  title: 'Sparent Science — Research-backed tools for the adults who surround young people',
  description:
    'A monthly newsletter from US-Squared Research Institute for educators, mentors, caregivers, and coaches. Each issue: the research, one tool, the conversation, your move.',
  alternates: { canonical: '/sparent' },
};

const arc = [
  { n: '01', title: 'The research', body: 'What we actually know, in four points, from studies that hold up.' },
  { n: '02', title: 'The tool', body: 'One thing you can put in front of a young person. A comparison, a checklist, a number.' },
  { n: '03', title: 'The conversation', body: 'What to say and what to avoid, because the framing decides whether it lands.' },
  { n: '04', title: 'Your move', body: 'Three actions for this week. Small enough to do, specific enough to matter.' },
];

export default function SparentJournal() {
  const issues = allIssues();
  const latest = latestIssue();
  const nextTopic = topicByKey(NEXT_ISSUE.topic);

  return (
    <Venture venture="sparent">
      <Navigation />
      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground">
          <div className="contours" aria-hidden="true" />
          <div className="hero-mark" aria-hidden="true">
            SS
          </div>
          <div className="container" style={{ position: 'relative' }}>
            <AnimateOnScroll>
              <Eyebrow>A US-Squared newsletter · For trusted adults</Eyebrow>
              <h1 className="display-1" style={{ maxWidth: '14ch', marginBottom: 28 }}>
                Sparent <em>Science</em>
              </h1>
              <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
              <p className="lede measure" style={{ marginBottom: 36 }}>
                Monthly research-backed tools for the educators, mentors, caregivers, and coaches who surround young
                people. One issue, one tool, one conversation worth having this month.
              </p>
              <div style={{ maxWidth: 520 }}>
                <SparentSignup />
              </div>
              <p className="small" style={{ color: 'var(--on-ground-muted)', marginTop: 14 }}>
                Free. One email a month. Unsubscribe with one click.
              </p>
              <div style={{ marginTop: 56 }}>
                <Coord />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Latest issue ───────────────────────────────────────────── */}
        {latest ? (
          <Section band="paper" id="latest">
            <AnimateOnScroll>
              <Eyebrow>Latest issue</Eyebrow>
            </AnimateOnScroll>
            <div className="grid-split" style={{ alignItems: 'center' }}>
              <AnimateOnScroll delay={0.05}>
                <IssueArt image={latest.image} seed={latest.number} label={topicByKey(latest.topic)?.label} priority />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <span className="kicker" style={{ display: 'block', marginBottom: 16 }}>
                  {issueLabel(latest)} · {latest.dateLabel} ·{' '}
                  <Link href={topicHref(latest.topic)} style={{ color: 'inherit' }}>
                    {topicByKey(latest.topic)?.label}
                  </Link>
                </span>
                <h2 className="display-2" style={{ marginBottom: 12 }}>
                  {latest.title}
                </h2>
                <p className="lede" style={{ marginBottom: 18 }}>
                  {latest.subtitle}
                </p>
                <p className="body measure-narrow" style={{ color: 'var(--on-ground-muted)', marginBottom: 28 }}>
                  {latest.summary}
                </p>
                <div className="cluster" style={{ gap: 14 }}>
                  <Button href={issueHref(latest)}>Read the issue →</Button>
                  {latest.download ? (
                    <Button href={latest.download.href} variant="ghost">
                      {latest.download.label}
                    </Button>
                  ) : null}
                </div>
              </AnimateOnScroll>
            </div>
          </Section>
        ) : null}

        {/* ── Coming next ────────────────────────────────────────────── */}
        <Section band="bone" tight>
          <AnimateOnScroll>
            <Card>
              <div className="grid-split" style={{ alignItems: 'start' }}>
                <div>
                  <span className="kicker" style={{ display: 'block', marginBottom: 14 }}>
                    Coming next · {issueLabel(NEXT_ISSUE)} · {nextTopic?.label}
                  </span>
                  <h3 className="display-3" style={{ marginBottom: 12 }}>
                    {NEXT_ISSUE.title}
                  </h3>
                  <p className="small" style={{ color: 'var(--on-ground-muted)' }}>
                    {NEXT_ISSUE.summary}
                  </p>
                </div>
                <div style={{ borderLeft: '1px solid var(--brass-600)', paddingLeft: 18 }}>
                  <span className="kicker" style={{ display: 'block', marginBottom: 8 }}>
                    Try this now
                  </span>
                  <p className="small">{NEXT_ISSUE.tryThis}</p>
                  <p className="small" style={{ color: 'var(--on-ground-muted)', marginTop: 14 }}>
                    Subscribers read it first.
                  </p>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </Section>

        {/* ── Topics ─────────────────────────────────────────────────── */}
        <Section band="ground" id="topics">
          <AnimateOnScroll>
            <Eyebrow>Topics</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 16 }}>
              Start with what <em>you&apos;re facing.</em>
            </h2>
            <p className="lede measure" style={{ marginBottom: 48 }}>
              Nobody reads a newsletter by date. Each topic is a shelf, and every issue sits on one.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.05}>
            <div className="grid-3">
              {TOPICS.map((t, i) => {
                const count = issuesByTopic(t.key).length;
                return (
                  <Link key={t.key} href={topicHref(t.key)} className="tile" style={{ textDecoration: 'none', display: 'block' }}>
                    <span className="row-num" style={{ display: 'block', marginBottom: 14 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="display-3" style={{ marginBottom: 10 }}>
                      {t.label}
                    </h3>
                    <p className="small" style={{ color: 'var(--on-ground-muted)', marginBottom: 16 }}>
                      {t.blurb}
                    </p>
                    <span className="mark">
                      {count === 0 ? 'First issue coming' : count === 1 ? '1 issue' : `${count} issues`} →
                    </span>
                  </Link>
                );
              })}
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── How an issue works ─────────────────────────────────────── */}
        <Section band="paper">
          <AnimateOnScroll>
            <Eyebrow>How an issue works</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              The same four moves, <em>every month.</em>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.05}>
            <div className="row-list">
              {arc.map((step) => (
                <div key={step.n} className="row">
                  <span className="row-num">{step.n}</span>
                  <span>
                    <span className="row-title">{step.title}</span>
                    <span className="row-desc" style={{ display: 'block' }}>
                      {step.body}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── Archive ────────────────────────────────────────────────── */}
        <Section band="bone" id="archive">
          <AnimateOnScroll>
            <Eyebrow>Archive</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              Every issue, <em>on its shelf.</em>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.05}>
            <div className="grid-3">
              {issues.map((issue) => (
                <IssueCard key={issue.slug} issue={issue} />
              ))}
            </div>
            <p className="small hairline-top" style={{ color: 'var(--on-ground-muted)', marginTop: 40, paddingTop: 24, maxWidth: '62ch' }}>
              Looking for a hands-on tool to pair with an issue?{' '}
              <Link href="/feelings-unplugged" className="btn-link" style={{ color: 'var(--on-ground)' }}>
                Feelings Unplugged
              </Link>{' '}
              is a BASE Framework companion guide for the young people in your care.
            </p>
          </AnimateOnScroll>
        </Section>

        {/* ── Subscribe ──────────────────────────────────────────────── */}
        <Section band="ink" id="subscribe">
          <div className="grid-split" style={{ alignItems: 'center' }}>
            <AnimateOnScroll>
              <Eyebrow>Subscribe</Eyebrow>
              <h2 className="display-2" style={{ marginBottom: 16 }}>
                The next issue arrives <em>in your inbox first.</em>
              </h2>
              <p className="body" style={{ color: 'var(--on-ground-muted)', maxWidth: '48ch' }}>
                For the adults who surround young people. Free, monthly, and built from the research.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <SparentSignup />
            </AnimateOnScroll>
          </div>
        </Section>
      </main>
      <Footer />
    </Venture>
  );
}
