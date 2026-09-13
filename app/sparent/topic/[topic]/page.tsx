import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';
import Venture from '@/components/Venture';
import SparentSignup from '@/components/SparentSignup';
import IssueCard from '@/components/sparent/IssueCard';
import { Section, Eyebrow, Button } from '@/components/ui';
import { issuesByTopic, topicByKey, topicHref, TOPICS, type TopicKey } from '@/lib/sparent';

export const dynamicParams = false;

export function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic } = await params;
  const def = topicByKey(topic);
  if (!def) return {};
  return {
    title: `${def.label} — Sparent Science`,
    description: def.blurb,
    alternates: { canonical: topicHref(def.key) },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const def = topicByKey(topic);
  if (!def) notFound();
  const issues = issuesByTopic(def.key as TopicKey);
  const others = TOPICS.filter((t) => t.key !== def.key);

  return (
    <Venture venture="sparent">
      <Navigation />
      <main>
        <section className="hero hero-short band-ground" style={{ minHeight: '52svh' }}>
          <div className="contours" aria-hidden="true" />
          <div className="container" style={{ position: 'relative' }}>
            <AnimateOnScroll>
              <span className="kicker" style={{ display: 'block', marginBottom: 18 }}>
                <Link href="/sparent" style={{ color: 'inherit' }}>
                  Sparent Science
                </Link>{' '}
                · Topic
              </span>
              <h1 className="display-1" style={{ maxWidth: '14ch', marginBottom: 20 }}>
                {def.label}
              </h1>
              <hr className="rule" style={{ maxWidth: 120, marginBottom: 24 }} />
              <p className="lede measure" style={{ marginBottom: 0 }}>
                {def.blurb}
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <Section band="paper">
          <AnimateOnScroll>
            <Eyebrow>{issues.length === 0 ? 'On this shelf' : `${issues.length} ${issues.length === 1 ? 'issue' : 'issues'} on this shelf`}</Eyebrow>
            {issues.length > 0 ? (
              <div className="grid-3" style={{ marginTop: 24 }}>
                {issues.map((issue) => (
                  <IssueCard key={issue.slug} issue={issue} />
                ))}
              </div>
            ) : (
              <div style={{ marginTop: 16, maxWidth: '56ch' }}>
                <h2 className="display-3" style={{ marginBottom: 12 }}>
                  The first {def.label} issue is on its way.
                </h2>
                <p className="body" style={{ color: 'var(--on-ground-muted)', marginBottom: 24 }}>
                  Subscribers read it first. Until then, the archive has the issues already published.
                </p>
                <Button href="/sparent#archive" variant="ghost">
                  Browse the archive →
                </Button>
              </div>
            )}
          </AnimateOnScroll>
        </Section>

        <Section band="bone" tight>
          <AnimateOnScroll>
            <span className="kicker" style={{ display: 'block', marginBottom: 14 }}>
              Other shelves
            </span>
            <div className="cluster" style={{ gap: 8 }}>
              {others.map((t) => (
                <Link key={t.key} href={topicHref(t.key)} className="chip" style={{ textDecoration: 'none' }}>
                  {t.label}
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </Section>

        <Section band="ink" id="subscribe">
          <div className="grid-split" style={{ alignItems: 'center' }}>
            <AnimateOnScroll>
              <Eyebrow>Subscribe</Eyebrow>
              <h2 className="display-2" style={{ marginBottom: 16 }}>
                Get the next {def.label} issue <em>first.</em>
              </h2>
              <p className="body" style={{ color: 'var(--on-ground-muted)', maxWidth: '48ch' }}>
                One email a month for the adults who surround young people.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <SparentSignup topics={[def.key]} />
            </AnimateOnScroll>
          </div>
        </Section>
      </main>
      <Footer />
    </Venture>
  );
}
