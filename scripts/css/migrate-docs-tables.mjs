/**
 * migrate-docs-tables.mjs — regenerates the "CSS Variables" table in each story.
 *
 * Thirty-four stories document a component's theming surface as a Markdown
 * table built from a `PREFIX_BS` import:
 *
 *   | --${PREFIX_BS}alert-gap | .alert | css length unit | Content separation |
 *
 * All three columns are now wrong. `PREFIX_BS` no longer exists, so the build
 * fails outright; the variable names are 2.x's; and the class column names
 * selectors the stylesheet dropped. Hand-editing 457 rows across 34 files is
 * how you get a table that is subtly wrong in six places and trusted anyway.
 *
 * So the table is not edited — it is GENERATED, from the same
 * `tokens/component/*.json` the stylesheet is built from. A token added
 * tomorrow shows up here on the next run, and one that is renamed cannot leave
 * a stale row behind. That is the point: documentation derived from the source
 * of truth rather than kept in step with it by hand.
 *
 * Usage:
 *   node scripts/css/migrate-docs-tables.mjs           # report only
 *   node scripts/css/migrate-docs-tables.mjs --write   # apply
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join, relative, basename } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const WRITE = process.argv.includes('--write');

const tokens = JSON.parse(
  readFileSync(resolve(ROOT, 'dist/tokens/dynamic.tokens.json'), 'utf8'),
).Components.Value;

/**
 * Which token group documents which story.
 *
 * Mostly the component's own name, but 3.x merged several 2.x components onto
 * one token set, and those are the entries worth reading: a modal and an
 * offcanvas are one `overlay`; a dropdown, popover and tooltip are one
 * `floating`; a checkbox, radio and switch are one `choice`. Sharing the token
 * set is what keeps them from drifting apart, and the docs should say so.
 */
const GROUP = {
  DModal: 'overlay',
  DOffcanvas: 'overlay',
  DDropdown: 'floating',
  DTooltip: 'floating',
  DPopover: 'floating',
  DInputCheck: 'choice',
  DInputRadio: 'choice',
  DInputSwitch: 'choice',
  DStepperDesktop: 'stepper',
  DStepperMobile: 'stepper',
  DButtonIcon: 'button',
  DInputSelect: 'select',
  DInputPassword: 'input',
  DInputMask: 'input',
  DInputCurrency: 'input',
  DInputCounter: 'input',
  DInputPin: 'pin',
  DBoxFile: 'dropzone',
  DPasswordStrengthMeter: 'password-strength',
  DAvatar: 'avatar',
  DCreditCard: 'credit-card',
  DPaginator: 'pagination',
};

/** Stories whose component is third-party and keeps its own variables. */
const THIRD_PARTY = new Set(['DCarousel', 'DDatePicker', 'DInputPhone', 'DSelect']);

/* ------------------------------------------------------------------ */

/** A human-readable type for the table, from the token's `$type`. */
const TYPE_LABEL = {
  color: 'css color',
  dimension: 'css length',
  duration: 'css time',
  number: 'number',
  fontWeight: 'font weight',
  fontFamily: 'font family',
  shadow: 'css box-shadow',
  cubicBezier: 'css easing',
};

/**
 * A description for a token that has none.
 *
 * Derived from the token's own name rather than invented: `hover-bg` is
 * unambiguous, and a sentence restating it adds nothing. Where the name is not
 * self-explanatory the token file should carry a `$description`, and this is
 * the fallback for the rest.
 */
function describe(name, token) {
  if (token.$description) return token.$description;
  return name
    .replace(/-/g, ' ')
    .replace(/\bbg\b/, 'background')
    .replace(/\bfg\b/, 'foreground')
    .replace(/^./, (c) => c.toUpperCase());
}

/** Flattens a token group into `[name, token]`, nested groups included. */
function flatten(node, prefix = '', out = []) {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    const name = prefix ? `${prefix}-${key}` : key;
    if (value && typeof value === 'object' && '$value' in value) out.push([name, value]);
    else if (value && typeof value === 'object') flatten(value, name, out);
  }
  return out;
}

function table(group, md = (t) => t) {
  const entries = flatten(tokens[group]);
  if (!entries.length) return null;

  const rows = entries.map(([name, token]) => [
    md(`\`--df-${group}-${name}\``),
    TYPE_LABEL[token.$type] ?? token.$type,
    describe(name, token),
  ]);

  const headers = ['Variable', 'Type', 'Description'];
  const widths = headers.map((h, i) => Math.max(h.length, ...rows.map((r) => r[i].length)));
  const line = (cells) => `| ${cells.map((c, i) => c.padEnd(widths[i])).join(' | ')} |`;

  return [
    line(headers),
    `|${widths.map((w) => '-'.repeat(w + 2)).join('|')}|`,
    ...rows.map(line),
  ].join('\n');
}

/* ------------------------------------------------------------------ */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (/\.(tsx|mdx)$/.test(entry)) out.push(abs);
  }
  return out;
}

const changed = [];
const skipped = [];
const unresolved = [];

for (const abs of walk(resolve(ROOT, 'stories'))) {
  let source = readFileSync(abs, 'utf8');
  // Keyed on the SECTION, not on the old `PREFIX_BS` import: a generator that
  // only fires once is a one-shot migration, and this is meant to be re-run
  // whenever the tokens change.
  if (!/^#{2,3} [^\n]*CSS Variables[^\n]*$/m.test(source)) continue;

  const component = basename(abs).replace(/\.(stories\.tsx|mdx)$/, '');
  const rel = relative(ROOT, abs);

  if (THIRD_PARTY.has(component)) {
    skipped.push(`${rel} — third-party component, variables are the library's`);
    continue;
  }

  const group = GROUP[component] ?? component.replace(/^D/, '').toLowerCase();
  if (!tokens[group]) {
    unresolved.push(`${rel} — no token group for \`${group}\``);
    continue;
  }

  // In a `.tsx` the docs live inside a template literal, so every backtick in
  // the generated Markdown has to be escaped or the file stops parsing. In an
  // `.mdx` they are plain Markdown and must NOT be.
  const inTemplateLiteral = abs.endsWith('.tsx');
  const md = (text) => (inTemplateLiteral ? text.replace(/`/g, '\\`') : text);

  const generated = table(group, md);

  // The block runs from the `## CSS Variables` heading to whatever ends it:
  // the next heading, or the end of the template literal the docs live in.
  const heading = /^#{2,3} [^\n]*CSS Variables[^\n]*$/m.exec(source);
  const start = heading ? heading.index : -1;
  if (start === -1) {
    unresolved.push(`${rel} — has PREFIX_BS but no \`## CSS Variables\` heading`);
    continue;
  }
  const after = source.slice(start + 1);
  const nextHeading = after.search(/\n#{2,3} /);
  const literalEnd = after.search(/\n\s*`,?\n/);
  const ends = [nextHeading, literalEnd].filter((n) => n !== -1);
  const end = ends.length ? start + 1 + Math.min(...ends) : source.length;

  const replacement = `${heading[0]}

Every value below is a design token: set it on the component, on an ancestor, or
on ${md('`:root`')} to retheme. The table is generated from ${md(`\`tokens/component/${group}.json\``)},
so it cannot fall out of step with the stylesheet.

${generated}
`;

  source = source.slice(0, start) + replacement + source.slice(end);

  // The import is dead once the last interpolation is gone — but ONLY if it
  // is. A blanket identifier strip also hits `${PREFIX_BS}` inside a template
  // literal, turning it into `${}`, which does not parse; and other sections of
  // these docs (a Classnames table, say) interpolate it too.
  if (!/\$\{\s*PREFIX_BS\s*\}/.test(source)) {
    source = source.replace(/^import \{ PREFIX_BS \} from '[^']*';\n/m, '');
    // In a multi-name import, drop just the name…
    source = source.replace(/^(import \{[^}]*?),?\s*\bPREFIX_BS\b\s*,?/m, '$1,');
    // …then tidy the punctuation that leaves behind.
    source = source.replace(/^(import \{)\s*,/m, '$1');
    source = source.replace(/,\s*,/g, ',');
    source = source.replace(/^import \{\s*,?\s*\} from '[^']*';\n/gm, '');
  }

  // Links into Bootstrap's docs describe a framework that is no longer loaded.
  source = source.replace(
    /^.*\[[^\]]*\]\(https:\/\/getbootstrap\.com[^)]*\).*$\n?/gm,
    '',
  );
  // …which leaves the sentence that introduced them pointing at nothing.
  source = source.replace(
    /^To understand in more detail the aspects covered by this component, review the following documentation:\n+(?=\n*#|\n*\s*`)/m,
    '',
  );
  source = source.replace(/\n{3,}/g, '\n\n');

  // A generator that reports work it did not do is a generator you stop
  // reading. Only count a file whose content actually moved.
  if (source === readFileSync(abs, 'utf8')) continue;
  changed.push(rel);
  if (WRITE) writeFileSync(abs, source);
}

/* ------------------------------------------------------------------ */

process.stdout.write(`migrate-docs-tables: ${changed.length} table(s) regenerated from the token model\n`);
if (!WRITE) process.stdout.write('migrate-docs-tables: dry run — pass --write to apply\n');

for (const note of skipped) process.stdout.write(`  skipped  ${note}\n`);
if (unresolved.length) {
  process.stdout.write(`\nNeeds a human (${unresolved.length}):\n`);
  for (const note of unresolved) process.stdout.write(`  ${note}\n`);
}
