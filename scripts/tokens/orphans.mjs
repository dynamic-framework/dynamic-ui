/**
 * orphans.mjs — checks that every COMPONENT token some stylesheet reads.
 *
 * `css:validate` proves the other direction: that no `var()` dangles. Both
 * have to hold, and only one of them was checked — so a token could be
 * declared, emitted into `dynamic.css`, printed in the component's "CSS
 * Variables" documentation table, and read by nothing at all.
 *
 * That is worse than dead code. A component token is a PUBLISHED API: the
 * whole promise of the table is "set this to retheme". A consumer who sets an
 * orphan gets no effect, no warning, and a documented variable to point at
 * when they report that theming does not work.
 *
 * Found seven on the first run, all migration leftovers — including
 * `toast.header-border-color`, which outlived the rule that used to read it,
 * and two icon-size tokens orphaned when eight components moved to
 * `--df-icon-inline-size`.
 *
 * ## Two layers, two tests
 *
 * A COMPONENT token has to be read by a stylesheet: that is its only job.
 *
 * A SEMANTIC token is checked but only WARNED about, and the difference is
 * deliberate. The manifest calls that layer "the only colour vocabulary a
 * designer should compose with" — so one can legitimately exist in Figma
 * before any rule reads it, and failing the build would make the system
 * refuse a token the design had agreed on. An unread semantic token is a
 * question, not an error.
 *
 * That second check was added after removing one rule left
 * `text.heading.margin-block-start` and `-end` behind: published in the
 * stylesheet, listed in the documentation, read by nothing. The
 * component-only check could not see them.
 *
 * Usage: node scripts/tokens/orphans.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const COMPONENT = join(ROOT, 'tokens/component');
const SEMANTIC = join(ROOT, 'tokens/semantic');
const SOURCES = ['src/css/components', 'src/css/base', 'src/css/utilities'];

/**
 * Tokens a stylesheet is right not to read.
 *
 * Only two reasons qualify, and each entry has to say which: a token read at
 * runtime by JavaScript through `getComputedStyle`, or one that exists purely
 * as a consumer hook with no default behaviour of its own. Anything else is an
 * orphan, and the list is short on purpose — a long one would mean the check
 * had stopped checking.
 */
const EXPECTED_UNREAD = new Map([]);

const stylesheets = SOURCES
  .map((dir) => join(ROOT, dir))
  .filter(existsSync)
  .flatMap((dir) => readdirSync(dir)
    .filter((file) => file.endsWith('.css'))
    .map((file) => readFileSync(join(dir, file), 'utf8')))
  .join('\n');

/* Also counted as read: JavaScript that writes or reads the property by name. */
const fromJs = (() => {
  const seen = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      const abs = join(dir, entry.name);
      if (entry.isDirectory()) walk(abs);
      else if (/\.tsx?$/.test(entry.name)) seen.push(readFileSync(abs, 'utf8'));
    }
  };
  walk(join(ROOT, 'src'));
  return seen.join('\n');
})();

const read = new Set([
  ...[...stylesheets.matchAll(/var\(\s*(--df-[a-z0-9-]+)/g)].map((m) => m[1]),
  ...[...fromJs.matchAll(/(--df-[a-z0-9-]+)/g)].map((m) => m[1]),
  // `--${PREFIX}carousel-per-page` and friends: a template literal splits the
  // name, so the suffix is what survives. Matched loosely, deliberately — this
  // check is a floor, and a false NEGATIVE here is better than failing a build
  // over a name a regex could not reassemble.
  ...[...fromJs.matchAll(/PREFIX\}([a-z0-9-]+)/g)].map((m) => `--df-${m[1]}`),
]);

/** Every token in a directory, as the custom property name it is emitted under. */
function tokensIn(dir, layer) {
  const declared = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
    const json = JSON.parse(readFileSync(join(dir, file), 'utf8'));
    const walk = (node, path) => {
      for (const [key, value] of Object.entries(node)) {
        if (key.startsWith('$') || value === null || typeof value !== 'object') continue;
        if ('$value' in value) {
          declared.push({ name: `--df-${[...path, key].join('-')}`, id: [...path, key].join('.'), file, layer });
        } else walk(value, [...path, key]);
      }
    };
    walk(json, []);
  }
  return declared;
}

/**
 * Every `var()` in the BUILT bundle, which is where a semantic token's readers
 * actually are.
 *
 * Reading the source stylesheets is enough for a component token but not for a
 * semantic one: `build-variants.mjs` generates the role x variant matrix, and
 * `role.primary.base-hover` is referenced only there. Checked against source
 * alone, 225 perfectly live tokens came back as orphans — a guard that cries
 * wolf on a fifth of the layer is a guard nobody will read.
 *
 * Token-to-token aliasing counts, and should: `fg.default` earns its keep by
 * being what a dozen component tokens point at.
 */
const bundle = (() => {
  const file = resolve(ROOT, 'dist/css/dynamic.css');
  if (!existsSync(file)) {
    process.stderr.write('tokens-orphans: dist/css/dynamic.css is missing — run `npm run css` first\n');
    process.exit(1);
  }
  return readFileSync(file, 'utf8');
})();

const referenced = new Set(
  [...bundle.matchAll(/var\(\s*(--df-[a-z0-9-]+)/g)].map((m) => m[1]),
);

const declared = [];
for (const file of readdirSync(COMPONENT).filter((f) => f.endsWith('.json'))) {
  const json = JSON.parse(readFileSync(join(COMPONENT, file), 'utf8'));
  const walk = (node, path) => {
    for (const [key, value] of Object.entries(node)) {
      if (key.startsWith('$') || value === null || typeof value !== 'object') continue;
      if ('$value' in value) declared.push({ name: `--df-${[...path, key].join('-')}`, file });
      else walk(value, [...path, key]);
    }
  };
  walk(json, []);
}

const semantic = tokensIn(SEMANTIC, 'semantic');

const orphans = declared.filter(({ name }) => !read.has(name) && !EXPECTED_UNREAD.has(name));
const unread = semantic.filter(({ name }) => !referenced.has(name) && !EXPECTED_UNREAD.has(name));

process.stdout.write(
  `tokens-orphans: ${declared.length} component and ${semantic.length} semantic token(s) checked\n`,
);

if (unread.length) {
  process.stdout.write(`\ntokens-orphans: ${unread.length} semantic token(s) no rule reads —\n`);
  for (const { name, file } of unread) process.stdout.write(`  ${name.padEnd(44)} ${file}\n`);
  process.stdout.write(
    '  Each is either vocabulary waiting for a rule or a leftover. Not a build\n'
    + '  failure: the semantic layer is what a designer composes with, so a token\n'
    + '  can precede its use.\n',
  );
}

if (!orphans.length) {
  process.stdout.write('tokens-orphans: every component token is read by a stylesheet\n');
  process.exit(0);
}

process.stderr.write(`\n${orphans.length} component token(s) nothing reads:\n`);
for (const { name, file } of orphans) {
  process.stderr.write(`  ${name.padEnd(44)} ${file}\n`);
}
process.stderr.write(
  '\ntokens-orphans: a component token is a published theming API — write the rule '
  + 'that reads it, delete it, or list it in EXPECTED_UNREAD with the reason\n',
);
process.exit(1);
