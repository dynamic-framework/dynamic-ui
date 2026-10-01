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
 * Usage: node scripts/tokens/orphans.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const TOKENS = join(ROOT, 'tokens/component');
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

/** Every component token, as the custom property name it is emitted under. */
const declared = [];
for (const file of readdirSync(TOKENS).filter((f) => f.endsWith('.json'))) {
  const json = JSON.parse(readFileSync(join(TOKENS, file), 'utf8'));
  const walk = (node, path) => {
    for (const [key, value] of Object.entries(node)) {
      if (key.startsWith('$') || value === null || typeof value !== 'object') continue;
      if ('$value' in value) declared.push({ name: `--df-${[...path, key].join('-')}`, file });
      else walk(value, [...path, key]);
    }
  };
  walk(json, []);
}

const orphans = declared.filter(({ name }) => !read.has(name) && !EXPECTED_UNREAD.has(name));

process.stdout.write(`tokens-orphans: ${declared.length} component token(s) checked\n`);

if (!orphans.length) {
  process.stdout.write('tokens-orphans: every one is read by a stylesheet or by the components\n');
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
