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
  for (const m of source.matchAll(/'(data-[a-z-]+)':\s*(?:'([^']*)'|([A-Za-z_$][\w$]*))/g)) {
    const [, name, literal] = m;
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

    // A literal value against a rule written without one: the value is dropped.
    if (literal !== undefined && literal !== ''
      && matchedPairs.size && !matchedPairs.has(`${name}=${literal}`)
      && [...matchedPairs].some((pair) => pair.startsWith(`${name}=`))) {
      findings.push({
        where: `${where}:${line}`,
        message: `emits \`${name}="${literal}"\` and no rule matches that value`,
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
