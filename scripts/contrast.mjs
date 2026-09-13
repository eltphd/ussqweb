// WCAG 2.1 contrast check for every ground/signal pairing and the derived text
// tokens in app/tokens.css. Run: node scripts/contrast.mjs
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../app/tokens.css', import.meta.url), 'utf8');
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

const root = Object.fromEntries([...css.matchAll(/--([\w-]+):\s*(#[0-9A-Fa-f]{6})/g)].map((m) => [m[1], m[2]]));
const ventures = {};
for (const m of css.matchAll(/\[data-venture="(\w+)"\]\s*\{\s*--ground:\s*(#\w+);\s*--signal:\s*(#\w+);/g)) ventures[m[1]] = { ground: m[2], signal: m[3] };
const dark = ['ussq', 'atlas', 'fu'];
let fail = 0;
const row = (name, fg, bg, min) => { const r = ratio(fg, bg); const ok = r >= min; if (!ok) fail++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(6)}  (min ${min})  ${name}`); };
for (const [v, { ground, signal }] of Object.entries(ventures)) {
  const isDark = dark.includes(v);
  console.log(`\n[${v}] ground ${ground} signal ${signal}`);
  row('signal on ground (large display text / italic phrase)', signal, ground, 3);
  row('on-ground text', isDark ? root['ivory-100'] : root['ink-900'], ground, 4.5);
  row('on-ground-muted text', isDark ? '#A9A498' : '#5B655F', ground, 4.5);
  row('kicker (mono 11px uppercase)', isDark ? signal : '#5B655F', ground, 4.5);
  row('primary button text', isDark ? root['ink-900'] : root['ivory-100'], isDark ? signal : root['ink-900'], 4.5);
  row('ink on ivory band', root['ink-900'], root['ivory-100'], 4.5);
  row('muted ink on ivory band', '#5B655F', root['ivory-100'], 4.5);
  row('muted ink on bone band', '#5B655F', root['bone-200'], 4.5);
  row('signal as focus ring on ground (non-text 3:1)', signal, ground, 3);
}
console.log(`\n${fail === 0 ? 'ALL PASS' : fail + ' FAILURES'}`);
process.exit(fail ? 1 : 0);
