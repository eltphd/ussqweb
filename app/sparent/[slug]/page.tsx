import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';
import Venture from '@/components/Venture';
import SparentSignup from '@/components/SparentSignup';
import IssueArt from '@/components/sparent/IssueArt';
import IssueCard from '@/components/sparent/IssueCard';
import IssueSections from '@/components/sparent/IssueSections';
import { Section, Eyebrow, Button, Card } from '@/components/ui';
import { allIssues, issueBySlug, issuesByTopic, issueLabel, topicByKey, topicHref } from '@/lib/sparent';

export const dynamicParams = false;

export function generateStaticParams() {
  return allIssues().map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const issue = issueBySlug(slug);
  if (!issue) return {};
  return {
    title: `${issue.title} — Sparent Science`,
    description: issue.summary,
    alternates: { canonical: `/sparent/${issue.slug}` },
    openGraph: { title: issue.title, description: issue.summary, type: 'article' },
  };
}

export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = issueBySlug(slug);
  if (!issue) notFound();
  const topic = topicByKey(issue.topic);
  const related = issuesByTopic(issue.topic).filter((i) => i.slug !== issue.slug).slice(0, 3);

  return (
    <Venture venture="sparent">
      <Navigation />
      <main>
        {/* ── Masthead ───────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground">
          <div className="contours" aria-hidden="true" />
          <div className="container" style={{ position: 'relative' }}>
            <div className="grid-split" style={{ alignItems: 'center' }}>
              <AnimateOnScroll>
                <span className="kicker" style={{ display: 'block', marginBottom: 18 }}>
                  <Link href="/sparent" style={{ color: 'inherit' }}>
                    Sparent Science
                  </Link>{' '}
                  · {issueLabel(issue)} · {issue.dateLabel}
                </span>
                <h1 className="display-1" style={{ maxWidth: '14ch', marginBottom: 20 }}>
                  {issue.title}
                </h1>
                <p className="lede" style={{ marginBottom: 20 }}>
                  <em>{issue.subtitle}</em>
                </p>
                <hr className="rule" style={{ maxWidth: 120, marginBottom: 24 }} />
                <p className="body measure-narrow" style={{ color: 'var(--on-ground-muted)', marginBottom: 28 }}>
                  {issue.audience}
                </p>
                <div className="cluster" style={{ gap: 10 }}>
                  <Link href={topicHref(issue.topic)} className="chip" style={{ textDecoration: 'none' }}>
                    {topic?.label}
                  </Link>
                  {issue.download ? (
                    <a href={issue.download.href} className="chip" style={{ textDecoration: 'none' }}>
                      {issue.download.label} ↓
                    </a>
                  ) : null}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <IssueArt image={issue.image} seed={issue.number} label={topic?.label} priority />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Body ───────────────────────────────────────────────────── */}
        <IssueSections sections={issue.sections} />

        {/* ── Your move ──────────────────────────────────────────────── */}
        <Section band="ground" id="your-move">
          <AnimateOnScroll>
            <Eyebrow>Your move</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              Three actions <em>this week.</em>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.05}>
            <div className="row-list">
              {issue.yourMove.map((m, i) => (
                <div key={m.title} className="row">
                  <span className="row-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="row-title" style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}>
                      {m.title}
                    </span>
                    <span className="row-desc" style={{ display: 'block' }}>
                      {m.body}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          {issue.download ? (
            <AnimateOnScroll delay={0.1}>
              <Card className="brass-top">
                <div className="grid-split" style={{ alignItems: 'center' }}>
                  <div>
                    <span className="kicker" style={{ display: 'block', marginBottom: 10 }}>
                      Take it with you
                    </span>
                    <h3 className="display-3" style={{ marginBottom: 8 }}>
                      {issue.download.label}
                    </h3>
                    {issue.download.note ? (
                      <p className="small" style={{ color: 'var(--on-ground-muted)' }}>
                        {issue.download.note}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <Button href={issue.download.href}>Download ↓</Button>
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>
          ) : null}
        </Section>

        {/* ── Subscribe ──────────────────────────────────────────────── */}
        <Section band="ink" id="subscribe">
          <div className="grid-split" style={{ alignItems: 'center' }}>
            <AnimateOnScroll>
              <Eyebrow>Subscribe</Eyebrow>
              <h2 className="display-2" style={{ marginBottom: 16 }}>
                One issue like this, <em>every month.</em>
              </h2>
              <p className="body" style={{ color: 'var(--on-ground-muted)', maxWidth: '48ch' }}>
                The research, one tool, the conversation, your move. Free, for the adults who surround young people.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <SparentSignup topics={[issue.topic]} />
            </AnimateOnScroll>
          </div>
        </Section>

        {/* ── More on this shelf ─────────────────────────────────────── */}
        <Section band="bone">
          <AnimateOnScroll>
            <Eyebrow>More on {topic?.label}</Eyebrow>
            {related.length > 0 ? (
              <div className="grid-3" style={{ marginTop: 24 }}>
                {related.map((r) => (
                  <IssueCard key={r.slug} issue={r} />
                ))}
              </div>
            ) : (
              <p className="body" style={{ color: 'var(--on-ground-muted)', marginTop: 16, maxWidth: '56ch' }}>
                This is the first issue on this shelf. Subscribers read the next one first.
              </p>
            )}
            <div className="cluster" style={{ gap: 14, marginTop: 32 }}>
              <Button href="/sparent" variant="ghost">
                ← All issues
              </Button>
              <Button href={topicHref(issue.topic)} variant="link">
                Browse {topic?.label} →
              </Button>
            </div>
          </AnimateOnScroll>
        </Section>
      </main>
      <Footer />
    </Venture>
  );
}
