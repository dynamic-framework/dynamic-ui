/**
 * audit.mjs — inventories what the React components actually emit, and what
 * the 3.x stylesheet covers so far.
 *
 * The port is a two-sided change: a component is only done when its CSS exists
 * in `src/css/components/` AND its TSX has stopped emitting Bootstrap class
 * names. Tracking that by memory across 54 components does not work, so this
 * reads both sides and prints the gap.
 *
 * It is a reporting tool, not a gate: it never fails the build.
 *
 * Usage: node scripts/css/audit.mjs [--classes] [--component DButton]
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const COMPONENTS_DIR = resolve(ROOT, 'src/components');
const CSS_DIR = resolve(ROOT, 'src/css/components');
const LEGACY_SELECTORS = resolve(dirname(fileURLToPath(import.meta.url)), 'legacy-selectors.json');

const args = process.argv.slice(2);
const SHOW_CLASSES = args.includes('--classes');
const ONLY = args.includes('--component') ? args[args.indexOf('--component') + 1] : null;

/* ------------------------------------------------------------------ *
 * Reading the TSX side
 * ------------------------------------------------------------------ */

/** Every .tsx file under a component directory, including nested components/. */
function tsxFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      out.push(...tsxFiles(path));
    } else if (entry.endsWith('.tsx') && !entry.endsWith('.spec.tsx')) {
      out.push(path);
    }
  }
  return out;
}

/**
 * Class names a file emits.
 *
 * The naive approach — reading `className="..."` — misses most of this
 * codebase. Classes arrive as `classNames('progress', className)`, as object
 * keys in a `useMemo` defined fifty lines above the JSX, as arrays, and as
 * template literals with holes. Chasing each shape separately kept producing
 * components that audited as clean while plainly rendering `.progress`.
 *
 * So instead: collect EVERY string and template literal in the file, split on
 * whitespace, and let the classifier decide by cross-referencing the selectors
 * that actually exist in the 2.x Sass tree. A token is only reported as legacy
 * if `.token` is really defined there.
 *
 * That trades a small false-positive rate for not missing anything — a word
 * like `link` or `active` can be both a Bootstrap class and a prop value. For
 * planning the port, over-reporting is the safer error, and `--component`
 * shows the list so anything odd is visible.
 */
function extractClasses(source) {
  const found = new Set();

  /**
   * Adds one string's worth of candidate class names.
   *
   * A whole string is skipped unless EVERY token in it is shaped like a class
   * name — lower case, digits, hyphens. A class list is uniformly lower case in
   * this codebase and in Bootstrap, so `'df-card df-p-3'` passes and a
   * user-facing sentence like `'Start automatic slide show'` does not.
   *
   * This is narrower than it looks and it matters: without it, any component
   * whose labels happen to contain `show`, `active`, `close`, `open` or `fade`
   * audits as still emitting Bootstrap for as long as that wording survives,
   * which is a warning nobody can ever act on.
   */
  const CLASS_SHAPED = /^[a-z0-9][-a-z0-9_*]*$/;

  const add = (raw) => {
    const tokens = String(raw).split(/[\s,]+/).map((t) => t.trim()).filter(Boolean);
    if (!tokens.length) return;
    if (!tokens.every((token) => CLASS_SHAPED.test(token))) return;
    for (const name of tokens) {
      if (name.length >= 2) found.add(name);
    }
  };

  // Strip comments so prose in a docblock is not mined for class names, and
  // strip the attributes whose values are never class names. Without the
  // second pass, `role="alert"` reported DAlert as still emitting Bootstrap's
  // `.alert` — the value collides with a class name, but it is an ARIA role.
  const code = source
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1 ')
    // JSX attribute form: `data-kind="modal"`.
    .replace(/\b(?:role|type|href|src|rel|target|id|name|htmlFor|key|aria-[a-z-]+|data-[a-z-]+)\s*=\s*(["'])[^"']*\1/g, ' ')
    // Object-property form: `'data-kind': 'modal'`. Components build their
    // attribute maps this way, so without this the VALUES were mined as class
    // names — `data-kind: 'modal'` reported DModal as still emitting `.modal`.
    .replace(/(["'])(?:data|aria)-[a-z-]+\1\s*:\s*(["'])[^"']*\2/g, ' ')
    // Shorthand computed form: `[`data-${x}`]: 'value'`.
    .replace(/\[`data-[^`]*`\]\s*:\s*(["'])[^"']*\1/g, ' ')
    // ARIA role as an object property: `useRole(ctx, { role: 'tooltip' })`.
    .replace(/\brole\s*:\s*(["'])[^"']*\1/g, ' ');

  // Single and double quoted strings.
  for (const m of code.matchAll(/'([^'\\\n]*)'/g)) add(m[1]);
  for (const m of code.matchAll(/"([^"\\\n]*)"/g)) add(m[1]);

  // Template literals; a hole becomes `*`, because `btn-${color}` is a family
  // of class names and the useful question is which family.
  for (const m of code.matchAll(/`([^`]*)`/g)) {
    const body = m[1];
    if (!body.trim()) continue;
    if (/[{}<>();]/.test(body.replace(/\$\{[^}]*\}/g, ''))) continue;
    add(body.replace(/\$\{[^}]*\}/g, '*'));
  }

  return found;
}

/* ------------------------------------------------------------------ *
 * Classifying a class name
 * ------------------------------------------------------------------ */

/**
 * Selectors the 2.x stylesheet defined.
 *
 * Read from a frozen inventory rather than scanned, because both sources are
 * gone: `src/style/` was deleted and `bootstrap` is no longer a dependency.
 * The list was captured from both trees at the commit that removed them, and it
 * is what still lets this script tell a Bootstrap class from one of ours while
 * the remaining components are ported.
 *
 * Both trees mattered. `src/style/` held only Dynamic's own overrides, so
 * `card`, `alert` and `btn` were never in it — those came from the Bootstrap
 * package it imported.
 *
 * Delete `legacy-selectors.json` and this block once the audit reports zero
 * legacy classes: at that point there is nothing left to recognise.
 */
const LEGACY = new Set(
  JSON.parse(readFileSync(LEGACY_SELECTORS, 'utf8')).selectors,
);

/**
 * Bootstrap's UTILITY class names, matched by pattern rather than listed.
 *
 * These are generated from Bootstrap's `$utilities` Sass map at compile time,
 * so they never appear literally in any `.scss` source — which means the frozen
 * selector inventory, built by scanning those sources, does not contain a
 * single one of them. Every `d-flex`, `gap-3`, `p-4` and `bg-danger` in the
 * components was therefore being reported as "unknown" instead of as a
 * dependency on a stylesheet that no longer exists.
 *
 * That matters for planning: migrating a block class is a rename, while
 * migrating utility usage means deciding for each one whether it becomes a
 * `df-` utility or moves into the component's own CSS. This makes the second
 * kind of work visible.
 */
const LEGACY_UTILITY_RE = new RegExp([
  '^(?:',
  [
    // Families whose suffix is free-form: `d-flex`, `text-center`, `bg-danger`.
    `(?:${[
      'd', 'position', 'float', 'overflow(?:-[xy])?',
      'flex', 'justify-content', 'align-items', 'align-self', 'align-content',
      'order', 'col', 'g[xy]?', 'offset', 'gap', 'row-gap', 'column-gap',
      '[mp][txbsexy]?', 'w', 'h', 'mw', 'mh', 'vw', 'vh', 'min-vw', 'min-vh',
      'ratio', 'fs', 'fw', 'lh', 'font', 'text', 'bg', 'opacity',
      'border', 'rounded', 'shadow', 'user-select', 'pe', 'z', 'link',
    ].join('|')})(?:-[a-z0-9]+)+`,
    // Position utilities take a NUMERIC suffix only. Without this,
    // `bottom-center` — a react-hot-toast position, not a class — matched.
    '(?:top|bottom|start|end)-(?:0|50|100)',
    // Standalone names, with no suffix at all.
    [
      'clearfix', 'vstack', 'hstack', 'row', 'visible', 'invisible',
      'visually-hidden', 'stretched-link', 'text-truncate', 'icon-link',
      'list-unstyled', 'list-inline', 'container', 'img-fluid',
      'img-thumbnail', 'vr', 'translate-middle',
    ].join('|'),
  ].join('|'),
  ')$',
].join(''));

/** Third-party class names we do not own and must not rename. */
const VENDOR_PREFIXES = [
  'react-', 'rdp-', 'bi-', 'material-symbols', 'fa-', 'form-check-input',
];

const isVendor = (name) => VENDOR_PREFIXES.some((p) => name.startsWith(p));
const isDf = (name) => name.startsWith('df-');

/**
 * Words this codebase uses as PROP VALUES that also happen to be Bootstrap
 * class names. Broad literal mining cannot tell them apart — `state="disabled"`
 * and `className="disabled"` are the same string — so they get their own
 * bucket: still visible, but not counted as an unported class.
 *
 * Every entry is a member of a union in `src/components/interface.ts`
 * (`InputState`, `ComponentSize`, `InputCheckType`, `PinInputType`, …), which
 * is why they appear at all.
 */
const AMBIGUOUS = new Set([
  'disabled', 'hover', 'active', 'focus-visible',
  'sm', 'lg', 'xl',
  'checkbox', 'radio', 'number', 'text', 'tel', 'search', 'button', 'submit', 'reset',
  'top', 'bottom', 'start', 'end', 'center', 'static', 'fixed',
  // Tag names, which arrive from `as` props (`as?: 'ul' | 'ol' | 'div'`).
  'div', 'span', 'ul', 'ol', 'li', 'section', 'article', 'header', 'footer',
  'nav', 'form', 'label', 'input', 'img', 'table', 'tr', 'td', 'th',
  // framer-motion variant names, which collide with Bootstrap's
  // `.visible` / `.invisible` utilities.
  'visible', 'hidden',
]);

function classify(name) {
  if (isDf(name)) return 'ported';
  if (isVendor(name)) return 'vendor';
  if (name === '*' || name.startsWith('*')) return 'dynamic';
  if (AMBIGUOUS.has(name)) return LEGACY.has(name) ? 'ambiguous' : 'unknown';
  // A bare `*` family like `btn-*` still resolves to a Bootstrap family.
  if (LEGACY.has(name.replace(/\*/g, '').replace(/-+$/, ''))) return 'legacy';
  if (LEGACY.has(name)) return 'legacy';
  // Utilities are reported separately from block classes: the work is
  // different in kind, not just in volume.
  if (LEGACY_UTILITY_RE.test(name)) return 'utility';
  return 'unknown';
}

/* ------------------------------------------------------------------ *
 * Report
 * ------------------------------------------------------------------ */

/**
 * Every class the 3.x stylesheet defines.
 *
 * This replaced a hand-maintained map from component name to CSS file name.
 * That map needed an entry every time a component shared another's stylesheet
 * — DButtonIcon renders `.df-button`, the five DInput wrappers render
 * `.df-input`, DInputCheck and DInputSwitch share `choice.css` — and it kept
 * reporting components as unported because the guessed file name did not
 * exist. Reading the stylesheet answers the real question directly: are the
 * classes this component emits actually styled?
 */
const DEFINED_CLASSES = (() => {
  const found = new Set();
  if (!existsSync(CSS_DIR)) return found;
  for (const f of readdirSync(CSS_DIR)) {
    if (!f.endsWith('.css')) continue;
    const source = readFileSync(join(CSS_DIR, f), 'utf8');
    for (const m of source.matchAll(/\.(df-[a-z0-9-]+)/g)) found.add(m[1]);
  }
  // The base layer defines a few too (`.df-sr-only`, the heading helpers).
  const baseDir = resolve(ROOT, 'src/css/base');
  if (existsSync(baseDir)) {
    for (const f of readdirSync(baseDir)) {
      if (!f.endsWith('.css')) continue;
      const source = readFileSync(join(baseDir, f), 'utf8');
      for (const m of source.matchAll(/\.(df-[a-z0-9-]+)/g)) found.add(m[1]);
    }
  }
  return found;
})();

const rows = [];

for (const name of readdirSync(COMPONENTS_DIR).sort()) {
  const dir = join(COMPONENTS_DIR, name);
  if (!statSync(dir).isDirectory()) continue;
  if (ONLY && name !== ONLY) continue;

  const classes = new Set();
  for (const file of tsxFiles(dir)) {
    for (const c of extractClasses(readFileSync(file, 'utf8'))) classes.add(c);
  }

  const buckets = {
    ported: [], legacy: [], utility: [], ambiguous: [], vendor: [], dynamic: [], unknown: [],
  };
  for (const c of [...classes].sort()) buckets[classify(c)].push(c);

  // A component is styled when the stylesheet defines every `df-` class it
  // emits. A wrapper that emits none — DErrorBoundary, DCurrencyText, the
  // DInput family — needs no stylesheet of its own and counts as styled.
  const emitted = buckets.ported.filter((c) => !c.includes('*'));
  const unstyled = emitted.filter((c) => !DEFINED_CLASSES.has(c));

  rows.push({
    name,
    unstyled,
    hasCss: unstyled.length === 0,
    // No legacy classes is the bar. A component may legitimately emit none at
    // all — DIcon delegates every class to DIconBase — and demanding at least
    // one `df-` class would leave those unported forever.
    tsxPorted: buckets.legacy.length === 0 && buckets.utility.length === 0,
    buckets,
    total: classes.size,
  });
}

const done = rows.filter((r) => r.hasCss && r.tsxPorted);
const needsPorting = rows.filter((r) => !r.tsxPorted);
const unstyled = rows.filter((r) => !r.hasCss);

const pad = (s, n) => String(s).padEnd(n);

process.stdout.write(`\n${pad('component', 26)}${pad('css', 6)}${pad('tsx', 6)}${pad('blocks', 9)}${pad('utilities', 11)}vendor\n`);
process.stdout.write(`${'-'.repeat(74)}\n`);

for (const r of rows) {
  process.stdout.write(
    pad(r.name, 26)
    + pad(r.hasCss ? 'yes' : '—', 6)
    + pad(r.tsxPorted ? 'yes' : '—', 6)
    + pad(r.buckets.legacy.length || '—', 9)
    + pad(r.buckets.utility.length || '—', 11)
    + (r.buckets.vendor.length || '—')
    + '\n',
  );
  if (SHOW_CLASSES || ONLY) {
    for (const [bucket, list] of Object.entries(r.buckets)) {
      if (!list.length) continue;
      process.stdout.write(`    ${pad(bucket, 10)} ${list.join(' ')}\n`);
    }
  }
}

const legacyTotal = new Set(rows.flatMap((r) => r.buckets.legacy));
const utilityTotal = new Set(rows.flatMap((r) => r.buckets.utility));
const vendorTotal = new Set(rows.flatMap((r) => r.buckets.vendor));

process.stdout.write(`\n${rows.length} components\n`);
process.stdout.write(`  ${done.length} done — no Bootstrap classes, every df- class styled\n`);
process.stdout.write(`  ${needsPorting.length} still emitting Bootstrap classes\n`);
if (unstyled.length) {
  process.stdout.write(`  ${unstyled.length} emitting a df- class the stylesheet does not define:\n`);
  for (const r of unstyled) {
    process.stdout.write(`      ${r.name}: ${r.unstyled.join(' ')}\n`);
  }
}
process.stdout.write(`\n${legacyTotal.size} distinct Bootstrap block class names still emitted\n`);
process.stdout.write(`${utilityTotal.size} distinct Bootstrap utility class names still emitted\n`);
process.stdout.write(`${vendorTotal.size} distinct third-party class names (not ours to rename)\n`);

if (!SHOW_CLASSES && !ONLY) {
  process.stdout.write('\nRun with --classes for the per-component breakdown, or --component DButton for one.\n');
}
