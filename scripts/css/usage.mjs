/**
 * usage.mjs — checks that every `df-` class the code USES the stylesheet DEFINES.
 *
 * This is the check the migration needed and did not have. The other three look
 * at the CSS from the inside: `validate` proves no `var()` dangles, `verify`
 * proves the colours resolve, `consistency` proves the values come from tokens.
 * All three pass with flying colours on a stylesheet that nothing references
 * and on a component reaching for a class that was never written.
 *
 * And that failure is silent. A `className="df-card-titel"` throws nothing,
 * logs nothing, and renders an unstyled element that looks like a CSS loading
 * problem. Across a migration touching 80-odd files by script, silent is
 * exactly the wrong failure mode.
 *
 * ## What counts as "used"
 *
 * Only a literal `class`/`className` attribute. A class assembled at runtime —
 * `df-${size}`, a `classNames()` object key — cannot be resolved statically, so
 * it is not checked rather than guessed at. That is a real blind spot and the
 * reason this is a floor, not a proof.
 *
 * Usage: node scripts/css/usage.mjs
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

/** Both bundles, because the responsive one is opt-in but legitimately used. */
const BUNDLES = [
  'dist/css/dynamic.css',
  'dist/css/dynamic.utilities.responsive.css',
];

const SOURCES = ['src', 'stories'];

/**
 * Classes that are correct to use and correct not to define.
 *
 * A hook class is a handle for JavaScript or for a consumer's own CSS; it
 * carries no rules by design. Listing them is the point — an entry here is a
 * decision someone made, and a typo is not on the list.
 */
const INTENTIONALLY_UNSTYLED = new Set([]);

/* ------------------------------------------------------------------ */

let css = '';
for (const rel of BUNDLES) {
  const abs = resolve(ROOT, rel);
  if (!existsSync(abs)) {
    process.stderr.write(`css-usage: ${rel} is missing — run \`npm run css\` first\n`);
    process.exit(1);
  }
  css += readFileSync(abs, 'utf8');
}

/**
 * Class names the stylesheet defines.
 *
 * A selector like `.df-hover\:bg-muted:hover` contains two colons and only one
 * of them is part of the name: the escaped one. So the name runs to the first
 * UNESCAPED colon, and matching greedily on `[a-z:-]` silently produced names
 * with `:hover` welded on — which then "proved" that every hover utility was
 * missing.
 */
const defined = new Set(
  [...css.matchAll(/\.((?:df-)(?:\\.|[a-zA-Z0-9_-])+)/g)].map((m) => m[1].replace(/\\/g, '')),
);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (/\.(tsx?|jsx?|mdx|html)$/.test(entry)) out.push(abs);
  }
  return out;
}

const used = new Map();
let files = 0;

for (const dir of SOURCES) {
  const abs = resolve(ROOT, dir);
  if (!existsSync(abs)) continue;
  for (const file of walk(abs)) {
    // A spec file asserts on rendered output; it is not a consumer.
    if (/\.spec\.[jt]sx?$/.test(file)) continue;
    files += 1;
    const source = readFileSync(file, 'utf8');
    for (const m of source.matchAll(/\b(?:class|className)="([^"{}]*)"/g)) {
      for (const cls of m[1].split(/\s+/)) {
        if (!cls.startsWith('df-')) continue;
        const list = used.get(cls) ?? new Set();
        list.add(relative(ROOT, file));
        used.set(cls, list);
      }
    }
  }
}

const missing = [...used].filter(([cls]) => !defined.has(cls) && !INTENTIONALLY_UNSTYLED.has(cls));

process.stdout.write(
  `css-usage: ${used.size} distinct df- class(es) used across ${files} file(s)\n`,
);

if (!missing.length) {
  process.stdout.write('css-usage: every one is defined in the bundle\n');
  process.exit(0);
}

process.stderr.write(`\n${missing.length} used but never defined — each renders as nothing:\n`);
for (const [cls, where] of missing.sort((a, b) => b[1].size - a[1].size)) {
  process.stderr.write(`  ${cls.padEnd(32)} ${where.size} file(s)  e.g. ${[...where][0]}\n`);
}
process.stderr.write('\ncss-usage: add the rule, fix the class name, or list it as intentionally unstyled\n');
process.exit(1);
