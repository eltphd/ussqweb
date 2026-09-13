import type { IssueImage } from '@/content/sparent/issues';

/** Deterministic variation: a tiny LCG so the same seed always draws the same field. */
function field(seed: number) {
  let s = (seed * 9301 + 49297) % 233280;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const contours = Array.from({ length: 5 }, (_, i) => {
    const y = 90 + i * 42 + rand() * 12;
    const c1 = 60 + rand() * 60;
    const c2 = y - 40 - rand() * 40;
    return `M-20,${y} C${c1},${c2} 180,${y + 30 + rand() * 20} 260,${y - 10} S380,${y - 60 - rand() * 30} 420,${y - 20}`;
  });
  const stars = Array.from({ length: 5 }, () => ({
    x: 60 + rand() * 280,
    y: 50 + rand() * 200,
    r: 2.5 + rand() * 2.5,
  }));
  return { contours, stars };
}

/**
 * The image slot for an issue or a topic. With a photo it shows the photo and
 * its credit. Without one it draws a field-journal vignette in the venture's
 * signal: contour lines and a small constellation, varied by seed so a row of
 * tiles does not repeat. Drop a file into public/sparent/ and set `image` on
 * the issue to replace it; nothing else changes.
 */
export default function IssueArt({
  image,
  seed = 1,
  label,
  ratio = '4 / 3',
  priority = false,
}: {
  image?: IssueImage;
  seed?: number;
  label?: string;
  ratio?: string;
  priority?: boolean;
}) {
  const frame: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    aspectRatio: ratio,
    overflow: 'hidden',
    border: '1px solid var(--line)',
    borderRadius: 'var(--radius)',
    background: 'var(--ink-900)',
  };

  if (image) {
    return (
      <figure style={{ margin: 0 }}>
        <div style={frame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            loading={priority ? 'eager' : 'lazy'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        {image.credit ? (
          <figcaption className="small" style={{ color: 'var(--on-ground-muted)', marginTop: 8 }}>
            {image.credit}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  const { contours, stars } = field(seed);
  const path = stars.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  return (
    <div style={frame} aria-hidden={label ? undefined : true} role={label ? 'img' : undefined} aria-label={label}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect width="400" height="300" fill="var(--ink-900)" />
        <g fill="none" stroke="var(--signal)" strokeWidth="1" opacity="0.35">
          {contours.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <path d={path} fill="none" stroke="var(--brass-600)" strokeWidth="0.8" opacity="0.7" />
        <g fill="var(--signal)">
          {stars.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={p.r} />
          ))}
        </g>
        <g fill="none" stroke="var(--brass-600)" opacity="0.5">
          <circle cx={stars[1].x} cy={stars[1].y} r="12" />
          <circle cx={stars[3].x} cy={stars[3].y} r="12" />
        </g>
      </svg>
      {label ? (
        <span
          style={{
            position: 'absolute',
            bottom: 14,
            left: 14,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--signal)',
          }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
