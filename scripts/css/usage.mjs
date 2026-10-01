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

/**
 * Class names in `src/` that are allowed not to carry the `df-` prefix.
 *
 * Everything the library renders should be a `df-` class, because that is the
 * only name the stylesheet is written against. A bare one is either a leftover
 * from the Bootstrap port or a third party's.
 *
 * This exists because a leftover is invisible to every other check: `css:usage`
 * below only looks at `df-` classes, and `css:audit` only flags names that
 * exist in the 2.x Sass tree. `DPortalContext` rendered the modal scrim as
 * `.backdrop` — a name neither Bootstrap nor this library ever defined — so
 * every modal in the React build had a completely transparent backdrop, and
 * nothing said a word.
 */
const ALLOWED_BARE = new Map([
  // The four components still wrapping a third party own these names.
  ['d-input-phone', 'DInputPhone keeps react-international-phone\'s class'],
  ['rdp', 'react-day-picker'],
  ['splide', 'removed, kept for a template that still has the markup'],
  // Icon-font families, which a consumer chooses.
  ['bi', 'Bootstrap Icons font family'],
  ['material-symbols-outlined', 'Material Symbols font family'],
  ['lucide', 'lucide-react puts this on the svg it renders'],
]);

/** Prefixes that belong to a third party, matched rather than listed. */
const ALLOWED_BARE_PREFIXES = [/^rdp-/, /^react-/, /^splide/, /^bi-/, /^lucide-/, /^material-symbols/];

/**
 * Components not yet ported, exempted whole.
 *
 * The exemption is "this component still wraps a third party", not "these
 * sixteen class names are fine" — so porting one removes its line here and the
 * check starts holding it to the rule, rather than leaving a list of names
 * nobody remembers the reason for.
 *
 * Both of these are the last of the 2.x wrappers; the audit counts them too.
 */
const UNPORTED = [
  /^src\/components\/DDatePicker\//,
  /^src\/components\/DInputPhone\//,
];

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
/** Bare class names rendered by `src/`, which should not exist. */
const bare = new Map();
let files = 0;

const isAllowedBare = (name) => ALLOWED_BARE.has(name)
  || ALLOWED_BARE_PREFIXES.some((pattern) => pattern.test(name));

const isUnported = (file) => UNPORTED.some((pattern) => pattern.test(file));

for (const dir of SOURCES) {
  const abs = resolve(ROOT, dir);
  if (!existsSync(abs)) continue;
  for (const file of walk(abs)) {
    // A spec file asserts on rendered output; it is not a consumer.
    if (/\.spec\.[jt]sx?$/.test(file)) continue;
    files += 1;
    const source = readFileSync(file, 'utf8');
    const inLibrary = dir === 'src';

    for (const m of source.matchAll(/\b(?:class|className)="([^"{}]*)"/g)) {
      for (const cls of m[1].split(/\s+/)) {
        if (!cls) continue;

        if (!cls.startsWith('df-')) {
          /*
           * Only `src/` is held to this. A story is a page, and a page may use
           * whatever classes it likes — it is the LIBRARY that must not render
           * a name the stylesheet never defines.
           */
          if (!inLibrary || isAllowedBare(cls)) continue;
          if (isUnported(relative(ROOT, file))) continue;
          const seen = bare.get(cls) ?? new Set();
          seen.add(relative(ROOT, file));
          bare.set(cls, seen);
          continue;
        }

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

if (bare.size) {
  process.stderr.write(`\n${bare.size} unprefixed class(es) rendered by the library:\n`);
  for (const [cls, where] of bare) {
    process.stderr.write(`  ${cls.padEnd(32)} ${[...where].join(', ')}\n`);
  }
  process.stderr.write(
    '\ncss-usage: the stylesheet is written against `df-` names, so a bare one is '
    + 'styled by nothing — prefix it, or add it to ALLOWED_BARE with the reason\n',
  );
}

if (!missing.length && !bare.size) {
  process.stdout.write('css-usage: every one is defined in the bundle\n');
  process.stdout.write('css-usage: the library renders no unprefixed class names\n');
  process.exit(0);
}

if (missing.length) {
  process.stderr.write(`\n${missing.length} used but never defined — each renders as nothing:\n`);
  for (const [cls, where] of missing.sort((a, b) => b[1].size - a[1].size)) {
    process.stderr.write(`  ${cls.padEnd(32)} ${where.size} file(s)  e.g. ${[...where][0]}\n`);
  }
  process.stderr.write('\ncss-usage: add the rule, fix the class name, or list it as intentionally unstyled\n');
}
process.exit(1);
