import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Section as Band, Eyebrow, Card } from '@/components/ui';
import type { Section } from '@/content/sparent/issues';

const muted: React.CSSProperties = { color: 'var(--on-ground-muted)' };

function Heading({ kicker, heading, lede }: { kicker: string; heading: string; lede?: string }) {
  return (
    <AnimateOnScroll>
      <Eyebrow>{kicker}</Eyebrow>
      <h2 className="display-2" style={{ marginBottom: lede ? 16 : 32, maxWidth: '22ch' }}>
        {heading}
      </h2>
      {lede ? (
        <p className="lede measure" style={{ marginBottom: 40 }}>
          {lede}
        </p>
      ) : null}
    </AnimateOnScroll>
  );
}

/**
 * Renders one issue's sections in order. Bands alternate so the page reads
 * as a journal spread rather than a single scroll of text.
 */
export default function IssueSections({ sections }: { sections: Section[] }) {
  const bands = ['paper', 'bone', 'ground'] as const;
  return (
    <>
      {sections.map((section, i) => {
        const band = bands[i % bands.length];
        switch (section.kind) {
          case 'points':
            return (
              <Band key={i} band={band}>
                <Heading kicker={section.kicker} heading={section.heading} lede={section.lede} />
                <div className="grid-split">
                  <AnimateOnScroll delay={0.05}>
                    <div className="row-list">
                      {section.points.map((p, j) => (
                        <div key={j} className="row" style={{ gridTemplateColumns: '48px 1fr' }}>
                          <span className="row-num">{String(j + 1).padStart(2, '0')}</span>
                          <span className="body">{p}</span>
                        </div>
                      ))}
                    </div>
                  </AnimateOnScroll>
                  {section.quote ? (
                    <AnimateOnScroll delay={0.1}>
                      <blockquote className="pull">
                        {section.quote.text}
                        <cite>{section.quote.cite}</cite>
                      </blockquote>
                    </AnimateOnScroll>
                  ) : null}
                </div>
              </Band>
            );

          case 'compare':
            return (
              <Band key={i} band={band}>
                <Heading kicker={section.kicker} heading={section.heading} lede={section.lede} />
                <AnimateOnScroll delay={0.05}>
                  <div className="grid-auto" style={{ alignItems: 'stretch' }}>
                    {section.columns.map((col) => (
                      <Card
                        key={col.label}
                        className={col.featured ? 'brass-top' : ''}
                        plain={!col.featured}
                      >
                        <span className="kicker" style={{ display: 'block', marginBottom: 18 }}>
                          {col.label}
                        </span>
                        <dl style={{ margin: 0 }}>
                          {col.rows.map(([k, v]) => (
                            <div
                              key={k}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: 16,
                                padding: '10px 0',
                                borderTop: '1px solid var(--line)',
                              }}
                            >
                              <dt className="small" style={muted}>
                                {k}
                              </dt>
                              <dd className="mono" style={{ margin: 0, fontSize: 14, color: col.featured ? 'var(--signal)' : undefined }}>
                                {v}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </Card>
                    ))}
                  </div>
                  {section.note ? (
                    <p className="small hairline-top" style={{ ...muted, marginTop: 32, paddingTop: 20, maxWidth: '62ch' }}>
                      {section.note}
                    </p>
                  ) : null}
                </AnimateOnScroll>
              </Band>
            );

          case 'number':
            return (
              <Band key={i} band="ink">
                <div className="grid-split">
                  <AnimateOnScroll>
                    <Eyebrow>{section.kicker}</Eyebrow>
                    <div className="stat">
                      <span className="stat-value" style={{ fontSize: 'clamp(88px, 14vw, 160px)', lineHeight: 0.95 }}>
                        {section.number}
                      </span>
                    </div>
                    <p className="display-3" style={{ marginTop: 16, maxWidth: '18ch' }}>
                      {section.heading}
                    </p>
                  </AnimateOnScroll>
                  <AnimateOnScroll delay={0.1}>
                    <div className="row-list">
                      {section.points.map((p) => (
                        <div key={p.title} className="row" style={{ gridTemplateColumns: '1fr' }}>
                          <span>
                            <span className="row-title" style={{ fontSize: 'clamp(20px, 2.4vw, 26px)' }}>
                              {p.title}
                            </span>
                            <span className="row-desc" style={{ display: 'block' }}>
                              {p.body}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                    {section.close ? (
                      <p className="lede" style={{ marginTop: 32 }}>
                        <em>{section.close}</em>
                      </p>
                    ) : null}
                  </AnimateOnScroll>
                </div>
              </Band>
            );

          case 'checklist':
            return (
              <Band key={i} band={band}>
                <Heading kicker={section.kicker} heading={section.heading} lede={section.lede} />
                <AnimateOnScroll delay={0.05}>
                  <div className="grid-auto">
                    {section.groups.map((g) => (
                      <div key={g.title}>
                        <span className="kicker" style={{ display: 'block', marginBottom: 14 }}>
                          {g.title}
                        </span>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
                          {g.items.map((item) => (
                            <li key={item.label} style={{ padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
                              <span className="body" style={{ display: 'block' }}>
                                {item.label}
                              </span>
                              {item.detail ? (
                                <span className="small" style={{ ...muted, display: 'block', marginTop: 2 }}>
                                  {item.detail}
                                </span>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {section.close ? (
                    <p className="body" style={{ marginTop: 36, maxWidth: '62ch' }}>
                      <strong>{section.close}</strong>
                    </p>
                  ) : null}
                </AnimateOnScroll>
              </Band>
            );

          case 'say':
            return (
              <Band key={i} band={band}>
                <Heading kicker={section.kicker} heading={section.heading} lede={section.lede} />
                <div className="grid-split">
                  <AnimateOnScroll delay={0.05}>
                    <span className="kicker" style={{ display: 'block', marginBottom: 14 }}>
                      Try saying
                    </span>
                    <div className="stack">
                      {section.say.map((line) => (
                        <p key={line} className="body" style={{ borderLeft: '1px solid var(--brass-600)', paddingLeft: 18 }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll delay={0.1}>
                    <span className="kicker" style={{ display: 'block', marginBottom: 14 }}>
                      Avoid
                    </span>
                    <div className="stack">
                      {section.avoid.map((a) => (
                        <div key={a.line} style={{ borderLeft: '1px solid var(--line)', paddingLeft: 18 }}>
                          <p className="body" style={muted}>
                            <s>{a.line}</s>
                          </p>
                          <p className="small" style={{ marginTop: 4 }}>
                            {a.why}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AnimateOnScroll>
                </div>
              </Band>
            );

          case 'steps':
            return (
              <Band key={i} band={band}>
                <Heading kicker={section.kicker} heading={section.heading} lede={section.lede} />
                <AnimateOnScroll delay={0.05}>
                  <div className="row-list">
                    {section.steps.map((step, j) => (
                      <div key={step.title} className="row">
                        <span className="row-num">{String(j + 1).padStart(2, "0")}</span>
                        <span>
                          <span className="row-title" style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}>
                            {step.title}
                          </span>
                          <span className="row-desc" style={{ display: 'block', fontSize: 15, color: 'var(--on-ground)' }}>
                            {step.body}
                          </span>
                          {step.detail ? (
                            <span className="row-desc" style={{ display: 'block' }}>
                              {step.detail}
                            </span>
                          ) : null}
                        </span>
                      </div>
                    ))}
                  </div>
                  {section.note ? (
                    <p className="small mono" style={{ ...muted, marginTop: 28, letterSpacing: '0.04em' }}>
                      {section.note}
                    </p>
                  ) : null}
                </AnimateOnScroll>
              </Band>
            );

          case 'cards':
            return (
              <Band key={i} band={band}>
                <Heading kicker={section.kicker} heading={section.heading} lede={section.lede} />
                <AnimateOnScroll delay={0.05}>
                  <div className="grid-auto">
                    {section.cards.map((c) => (
                      <Card key={c.title}>
                        <h3 className="display-3" style={{ marginBottom: 10 }}>
                          {c.title}
                        </h3>
                        <p className="small" style={muted}>
                          {c.body}
                        </p>
                      </Card>
                    ))}
                  </div>
                  {section.close ? (
                    <p className="lede" style={{ marginTop: 40, maxWidth: '40ch' }}>
                      <em>{section.close}</em>
                    </p>
                  ) : null}
                </AnimateOnScroll>
              </Band>
            );
        }
      })}
    </>
  );
}
