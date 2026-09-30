/**
 * validate.mjs — checks the built stylesheet for dangling custom properties.
 *
 * ## Why this check exists
 *
 * Every typo the 2.x pipeline shipped was of one shape: a `var()` reference to
 * a custom property that nothing defines. `--bs---bs-ref-spacer-4`,
 * `--bs-bs-gray-400`, `--bs-subtle-primary` and the missing-sigil
 * `--bs-btn-box-shadow: btn-box-shadow` all reached the published CSS, where
 * they resolve to nothing and the declaration silently does not apply. Nobody
 * noticed because a CSS parser considers them perfectly valid.
 *
 * The 2.x answer was to detect them after the fact, by compiling two SCSS
 * harnesses and diffing references against definitions. Same algorithm here,
 * but run on the real bundle and wired to fail the build.
 *
 * ## The algorithm
 *
 *   R = every `var(--df-*)` reference in the bundle
 *   D = every `--df-*` DEFINED in any selector, not just :root
 *   dangling = R - D
 *
 * "Defined in any selector" is the part that matters. A component's local slots
 * (`--df-button-bg` and friends) are defined inside `.df-button`, not in
 * `:root`. Comparing against `:root` alone reports all ~60 of them as dangling
 * — which is the mistake the 2.x generator's own notes record making.
 *
 * A reference carrying a fallback (`var(--df-x, 0)`) still counts: the fallback
 * hides the mistake rather than fixing it.
 *
 * Usage: node scripts/css/validate.mjs
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { loadModel } from '../tokens/lib/model.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const BUNDLE = resolve(ROOT, 'dist/css/dynamic.css');

if (!existsSync(BUNDLE)) {
  process.stderr.write('css-validate: dist/css/dynamic.css not found — run `npm run css` first\n');
  process.exit(1);
}

const css = readFileSync(BUNDLE, 'utf8');

/** `--df-foo: value;` — a definition. */
const DEFINE_RE = /(--df-[a-zA-Z0-9-]*)\s*:/g;
/** `var(--df-foo` — a reference. */
const REFERENCE_RE = /var\(\s*(--df-[a-zA-Z0-9-]*)/g;

function collect(re) {
  const found = new Map();
  let m;
  re.lastIndex = 0;
  while ((m = re.exec(css)) !== null) {
    const name = m[1];
    if (!found.has(name)) {
      // Line number, for an error message someone can act on.
      found.set(name, css.slice(0, m.index).split('\n').length);
    }
  }
  return found;
}

const defined = collect(DEFINE_RE);
const referenced = collect(REFERENCE_RE);

const errors = [];

/* --- 1. dangling references ------------------------------------------- */

for (const [name, line] of referenced) {
  if (!defined.has(name)) {
    errors.push(`[dangling] var(${name}) at line ${line} — nothing defines it`);
  }
}

/* --- 2. malformed names ------------------------------------------------ */

// The two shapes that a string-concatenated name produces. Both were real in
// 2.x, both are detectable by rule.
for (const [name, line] of [...defined, ...referenced]) {
  if (/^--df--/.test(name)) {
    errors.push(`[malformed] ${name} at line ${line} — leading double dash, usually a doubled prefix`);
  }
  if (/^--df-df-/.test(name)) {
    errors.push(`[malformed] ${name} at line ${line} — prefix applied twice`);
  }
  if (name === '--df-') {
    errors.push(`[malformed] bare ${name} at line ${line} — interpolated name resolved to nothing`);
  }
}

/* --- 3. values that are not CSS --------------------------------------- */

// `--bs-btn-box-shadow: btn-box-shadow` shipped in 2.x because Sass
// interpolated a bare identifier where a variable was meant. A custom property
// accepts almost any token sequence, so only a heuristic catches it: a value
// that looks exactly like one of our own token names minus the leading dashes.
const SUSPECT_RE = /(--df-[a-zA-Z0-9-]*)\s*:\s*([a-z][a-z0-9-]{4,})\s*[;}]/g;
const CSS_KEYWORDS = new Set([
  'none', 'auto', 'inherit', 'initial', 'unset', 'revert', 'transparent',
  'currentcolor', 'solid', 'dashed', 'dotted', 'hidden', 'visible', 'pointer',
  'progress', 'underline', 'center', 'start', 'end', 'stretch', 'baseline',
  'normal', 'bold', 'bolder', 'lighter', 'italic', 'nowrap', 'balance',
  'pretty', 'uppercase', 'lowercase', 'capitalize', 'ellipsis', 'scroll',
  'relative', 'absolute', 'static', 'sticky', 'fixed', 'contents', 'block',
  'inline', 'flex', 'grid', 'column', 'row', 'wrap', 'tabular-nums',
  'border-box', 'content-box', 'not-allowed', 'fit-content', 'min-content',
  'max-content', 'space-between', 'space-around', 'space-evenly',
  'flex-start', 'flex-end', 'column-reverse', 'row-reverse', 'inline-block',
  'inline-flex', 'inline-grid', 'antialiased', 'grayscale', 'break-word',
]);

let m;
while ((m = SUSPECT_RE.exec(css)) !== null) {
  const [, name, value] = m;
  if (CSS_KEYWORDS.has(value)) continue;
  // A plausible token name used as a bare value is the signature of the bug.
  if (defined.has(`--df-${value}`)) {
    const line = css.slice(0, m.index).split('\n').length;
    errors.push(`[bare-name] ${name}: ${value} at line ${line} — looks like a reference to --df-${value} written without var()`);
  }
}

/* --- 4. the utility surface a template composes with ------------------ */

/**
 * A representative class from every utility family a consumer writes by hand.
 *
 * These are the contract for template authors: someone writing
 * `class="df-p-4 df-hover:bg-muted df-dark:bg-sunken"` in a Liquid template has
 * no type checker and no autocomplete. If a refactor of the generator drops a
 * family, nothing else in this repo notices — the CSS is still valid, the
 * budgets still pass, and the only symptom is a class that quietly does
 * nothing in production.
 *
 * One entry per family, not per rule: this guards the shape of the surface,
 * not its size.
 */
const UTILITY_SURFACE = [
  // spacing, both ends of the scale and every side
  '.df-p-0 {', '.df-p-30 {', '.df-m-4 {',
  '.df-px-4 {', '.df-py-4 {', '.df-pt-4 {', '.df-pb-4 {', '.df-ps-4 {', '.df-pe-4 {',
  '.df-mx-4 {', '.df-my-4 {', '.df-mt-4 {', '.df-mb-4 {', '.df-ms-4 {', '.df-me-4 {',
  '.df-gap-4 {', '.df-gap-x-4 {', '.df-gap-y-4 {',
  // layout
  '.df-flex {', '.df-grid {', '.df-hidden {', '.df-items-center {', '.df-justify-between {',
  // colour, type, shape
  '.df-text-muted {', '.df-bg-surface {', '.df-border-default {',
  '.df-fs-body {', '.df-fw-semibold {', '.df-rounded-control {', '.df-shadow-md {',
  // presentational odds and ends the templates lean on
  '.df-cursor-pointer {', '.df-no-underline {', '.df-object-cover {',
  '.df-align-middle {', '.df-border-dashed {', '.df-bg-transparent {',
  '.df-border-b-1 {', '.df-top-0 {', '.df-end-0 {',
  '.df-grid-cols-12 {', '.df-col-span-4 {', '.df-col-span-full {',
  // variants
  String.raw`.df-hover\:bg-muted:hover {`,
  String.raw`.df-hover\:text-primary:hover {`,
  String.raw`.df-hover\:shadow-md:hover {`,
  String.raw`.df-hover\:opacity-80:hover {`,
  String.raw`.df-dark\:bg-sunken {`,
  String.raw`.df-dark\:text-muted {`,
  String.raw`.df-dark\:border-strong {`,
];

for (const selector of UTILITY_SURFACE) {
  if (!css.includes(selector)) {
    errors.push(`[utility-surface] \`${selector.replace(' {', '')}\` is gone — a template composing with it would silently get nothing`);
  }
}

/* --- 5. media queries match the breakpoint tokens --------------------- */

/**
 * A `min-width` in the stylesheet must correspond to a `breakpoint.*` token.
 *
 * Some components need breakpoint-driven CSS of their own — the stepper's
 * mobile/desktop switch, the list group's horizontal variant — because the
 * responsive utilities live in an opt-in stylesheet a component must not
 * depend on. Those media queries are hand-written, so nothing otherwise stops
 * them drifting from the tokens the rest of the system uses.
 */
const BREAKPOINT_PX = new Set(
  loadModel().collections
    .flatMap((col) => col.modes.flatMap((mode) => mode.tokens))
    .filter((t) => t.path[0] === 'breakpoint' && t.type === 'dimension')
    .map((t) => t.value.value),
);

const MEDIA_RE = /@media[^{]*min-width:\s*([0-9.]+)px/g;
let mq;
while ((mq = MEDIA_RE.exec(css)) !== null) {
  const px = Number(mq[1]);
  if (!BREAKPOINT_PX.has(px)) {
    const line = css.slice(0, mq.index).split('\n').length;
    errors.push(
      `[breakpoint] @media (min-width: ${px}px) at line ${line} does not match any `
      + `breakpoint token. Known: ${[...BREAKPOINT_PX].sort((a, b) => a - b).join(', ')}`,
    );
  }
}

/* ------------------------------------------------------------------ */

process.stdout.write(`css-validate: ${defined.size} properties defined, ${referenced.size} referenced\n`);
process.stdout.write(`css-validate: ${BREAKPOINT_PX.size} breakpoint token(s) recognised in media queries\n`);
process.stdout.write(`css-validate: ${UTILITY_SURFACE.length} utility families present\n`);

if (errors.length) {
  process.stderr.write('\n');
  for (const e of errors) process.stderr.write(`ERROR ${e}\n`);
  process.stderr.write(`\ncss-validate: ${errors.length} problem(s)\n`);
  process.exit(1);
}
process.stdout.write('css-validate: no dangling or malformed custom properties\n');
