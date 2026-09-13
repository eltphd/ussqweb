import { ISSUES, TOPICS, type Issue, type TopicDef, type TopicKey } from '@/content/sparent/issues';

export { ISSUES, TOPICS, NEXT_ISSUE } from '@/content/sparent/issues';
export type { Issue, Section, TopicDef, TopicKey } from '@/content/sparent/issues';

/** Published issues, newest first. */
export function allIssues(): Issue[] {
  return [...ISSUES].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}

export function latestIssue(): Issue | undefined {
  return allIssues()[0];
}

export function issueBySlug(slug: string): Issue | undefined {
  return ISSUES.find((i) => i.slug === slug);
}

export function issuesByTopic(topic: TopicKey): Issue[] {
  return allIssues().filter((i) => i.topic === topic);
}

export function topicByKey(key: string): TopicDef | undefined {
  return TOPICS.find((t) => t.key === key);
}

export function issueLabel(issue: { volume: number; number: number }): string {
  return `Vol. ${String(issue.volume).padStart(2, '0')} · Issue ${String(issue.number).padStart(2, '0')}`;
}

export function issueHref(issue: Issue): string {
  return `/sparent/${issue.slug}`;
}

export function topicHref(topic: TopicKey): string {
  return `/sparent/topic/${topic}`;
}
