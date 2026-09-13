import Link from 'next/link';
import IssueArt from '@/components/sparent/IssueArt';
import { issueHref, issueLabel, topicByKey, type Issue } from '@/lib/sparent';

/** One issue in a shelf or an archive: art, topic, title, one line. */
export default function IssueCard({ issue, seed }: { issue: Issue; seed?: number }) {
  const topic = topicByKey(issue.topic);
  return (
    <Link href={issueHref(issue)} className="tile" style={{ display: 'block', textDecoration: 'none', padding: 0, overflow: 'hidden' }}>
      <IssueArt image={issue.image} seed={seed ?? issue.number} />
      <div style={{ padding: '20px 20px 24px' }}>
        <span className="kicker" style={{ display: 'block', marginBottom: 10 }}>
          {topic?.label} · {issueLabel(issue)}
        </span>
        <h3 className="display-3" style={{ marginBottom: 10 }}>
          {issue.title}
        </h3>
        <p className="small" style={{ color: 'var(--on-ground-muted)' }}>
          {issue.summary}
        </p>
        <span className="mark" style={{ display: 'block', marginTop: 16 }}>
          Read the issue →
        </span>
      </div>
    </Link>
  );
}
