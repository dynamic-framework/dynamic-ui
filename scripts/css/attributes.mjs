/**
 * attributes.mjs — checks that every `data-*` a component EMITS, some rule
 * READS.
 *
 * This is the check that would have caught the whole `DModal`/`DOffcanvas`
 * mess at the moment it was introduced. Between them the two components
 * emitted five styling attributes and the stylesheet matched two:
 *
 *   data-centered     -> no rule at all; `centered` was a prop that did nothing
 *   data-scrollable   -> no rule at all, on BOTH components
 *   data-fullscreen=md -> only `[data-fullscreen]` existed, so the value was
 *                        dropped and the modal went fullscreen at every width
 *   data-align="fill" -> the rule is `[data-fill]`, so the one value that
 *                        changed the layout rather than the alignment was inert
 *
 * None of it threw, logged, or looked wrong in a snapshot — a snapshot asserts
 * the attribute is THERE, which it was. The failure is the gap between a
 * component and a stylesheet, and only something that reads both can see it.
 *
 * Usage: node scripts/css/attributes.mjs
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const BUNDLE = resolve(ROOT, 'dist/css/dynamic.css');

/**
 * Attributes that exist for JavaScript, not for CSS.
 *
 * Each is a decision rather than a loosened rule: a hook for a behaviour to
 * find, or a flag another script reads. A typo is not on this list.
 */
const BEHAVIOURAL = new Set([
  'data-static-backdrop', // read by DPortalContext, not by any rule
  'data-testid',
  'data-df-theme',
  // Marks a carousel slide as a loop clone. Clones are hidden from assistive
  // technology with `aria-hidden`, not painted differently — if a rule ever
  // matched this, the seam between a real slide and its copy would be visible.
  'data-clone',
]);

/** `data-df-*` is the framework-free layer's own namespace: selectors for JS. */
const BEHAVIOURAL_PREFIXES = [/^data-df-/];

if (!existsSync(BUNDLE)) {
  process.stderr.write('css-attributes: dist/css/dynamic.css is missing — run `npm run css` first\n');
  process.exit(1);
}

const css = readFileSync(BUNDLE, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

/**
 * What the stylesheet matches, as `name` and as `name=value`.
 *
 * Both are recorded because they are different promises: `[data-fullscreen]`
 * says "this attribute matters", `[data-fullscreen="md"]` says "this VALUE
 * matters". A component emitting the second against a rule written as the
 * first is the `fullScreenFrom` bug.
 */
const matchedNames = new Set();
const matchedPairs = new Set();
for (const m of css.matchAll(/\[(data-[a-z-]+)(?:\s*[~^|$*]?=\s*"([^"]*)")?\]/g)) {
  matchedNames.add(m[1]);
  if (m[2] !== undefined) matchedPairs.add(`${m[1]}=${m[2]}`);
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (/\.tsx$/.test(entry) && !/\.spec\.tsx$/.test(entry)) out.push(abs);
  }
  return out;
}

const isBehavioural = (name) => BEHAVIOURAL.has(name)
  || BEHAVIOURAL_PREFIXES.some((p) => p.test(name));

/**
 * The string literals a prop's TYPE allows, so a runtime value can still be
 * checked value-by-value.
 *
 * This is what closed the blind spot below. `DListGroup` emits
 * `'data-horizontal': typeof horizontal === 'string' ? horizontal : ''`, which
 * no amount of regex over the VALUE can resolve — but the prop is declared
 * `horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'`, and that
 * enumerates every value the attribute can ever carry. The stylesheet had
 * `data-horizontal="2xl"` while the token and the prop both say `xxl`, so
 * `horizontal="xxl"` emitted an attribute no rule matched and the list simply
 * stayed vertical at 1400px. Nothing failed; it just did not work.
 */
const KEYWORDS = new Set([
  'typeof', 'string', 'number', 'boolean', 'undefined', 'null', 'true',
  'false', 'void', 'in', 'of', 'as', 'new', 'this',
]);

/**
 * Values the prop's type allows but the component never actually emits,
 * because something upstream routes them elsewhere. Each needs its reason.
 */
const ROUTED_AWAY = new Map([
  [
    'data-align=fill',
    'DModalFooter sends `fill` to `data-fill` instead, so `data-align` never carries it',
  ],
]);

function allowedValuesOf(source, expression) {
  const values = new Set();

  /*
   * A value that passes through a FUNCTION is not the prop's type any more:
   * `resolveRole(action.color)` can rename, fall back, or pass through, and
   * which of those it does is not in the union. Reading the union here would
   * report values the component cannot emit.
   */
  if (expression.includes('(')) return [];

  for (const token of expression.matchAll(/\b([a-z][A-Za-z0-9]*)\b/g)) {
    const prop = token[1];
    if (KEYWORDS.has(prop)) continue;

    /*
     * The declaration, which may wrap over several lines for a long union.
     * Stopping at `;` rather than at the newline is what makes
     * `horizontal?: boolean | 'sm' | 'md'\n  | 'lg'` readable.
     */
    const declared = new RegExp(`\\b${prop}\\?:\\s*([^;}]+)`).exec(source);
    if (!declared) continue;

    for (const quoted of declared[1].matchAll(/'([^']+)'/g)) values.add(quoted[1]);
  }

  return [...values];
}

const findings = [];
let emitted = 0;

for (const file of walk(resolve(ROOT, 'src/components'))) {
  const source = readFileSync(file, 'utf8');
  const where = relative(ROOT, file);

  /*
   * Only a literal attribute with a literal value. `'data-size': size` is a
   * runtime value this cannot resolve, so it is counted as "the name is used"
   * and not checked value-by-value — a real blind spot, and the reason this is
   * a floor rather than a proof.
   */
  for (const m of source.matchAll(/'(data-[a-z-]+)':\s*(?:'([^']*)'|([^,\n}]+))/g)) {
    const [, name, literal, expression] = m;
    if (isBehavioural(name)) continue;
    emitted += 1;

    const line = source.slice(0, m.index).split('\n').length;

    if (!matchedNames.has(name)) {
      findings.push({
        where: `${where}:${line}`,
        message: `emits \`${name}\` and no rule matches it — the prop setting it does nothing`,
      });
      continue;
    }

    const hasValueRules = matchedPairs.size
      && [...matchedPairs].some((pair) => pair.startsWith(`${name}=`));

    // A literal value against a rule written without one: the value is dropped.
    if (literal !== undefined && literal !== ''
      && hasValueRules && !matchedPairs.has(`${name}=${literal}`)) {
      findings.push({
        where: `${where}:${line}`,
        message: `emits \`${name}="${literal}"\` and no rule matches that value`,
      });
      continue;
    }

    /*
     * A runtime value, checked through the prop's type. The empty string is
     * skipped: `data-horizontal=""` means "at every width" and is matched by
     * a rule written with an empty value, which the name check above covers.
     */
    if (expression === undefined || !hasValueRules) continue;

    for (const value of allowedValuesOf(source, expression)) {
      if (matchedPairs.has(`${name}=${value}`)) continue;
      if (ROUTED_AWAY.has(`${name}=${value}`)) continue;
      findings.push({
        where: `${where}:${line}`,
        message: `can emit \`${name}="${value}"\` — the prop's type allows it and no rule matches it`,
      });
    }
  }
}

process.stdout.write(`css-attributes: ${emitted} styling attribute(s) emitted across src/components\n`);

if (!findings.length) {
  process.stdout.write('css-attributes: every one is matched by a rule\n');
  process.exit(0);
}

process.stderr.write(`\n${findings.length} attribute(s) nothing styles:\n`);
for (const f of findings) process.stderr.write(`  ${f.where.padEnd(52)} ${f.message}\n`);
process.stderr.write(
  '\ncss-attributes: write the rule, drop the prop, or list it in BEHAVIOURAL with the reason\n',
);
process.exit(1);
