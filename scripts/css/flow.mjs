/**
 * flow.mjs — checks that component chrome switches off the flow margins.
 *
 * `p`, the headings, lists and the rest carry a `margin-block` from the
 * `text.*` roles, because the markup this library has to serve includes markup
 * nobody can add a class to: a CMS body, a Liquid template, terms pasted into
 * a modal.
 *
 * That default is wrong for every flow element the library DRAWS. A toast
 * title, a voucher message, a confirm-modal heading all sit in a flex or grid
 * container whose `gap` owns the spacing; a margin there leaks out of the flex
 * item and fights the gap. Each of those has to turn it off in its own
 * stylesheet — the component layer beats the base layer, so a plain
 * `margin: 0` does it with no `!important` and no specificity game.
 *
 * The failure mode is why this is a build step rather than a convention:
 * nothing throws, nothing warns, and the result is a toast slightly taller
 * than it should be, or a gap that is 16px instead of 12px. It looks like a
 * design tweak, not a bug, and it survives review.
 *
 * Usage: node scripts/css/flow.mjs
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const BUNDLE = resolve(ROOT, 'dist/css/dynamic.css');

/** The elements `base/typography.css` gives a flow margin to. */
const FLOW = /<(p|h[1-6]|ul|ol|dl|blockquote|figure|pre|table)[\s>]/;

/**
 * Components still wrapping a third party, exempted whole.
 *
 * The same list `css:usage` keeps, and for the same reason: the exemption is
 * "this component is not ours yet", not "these particular elements are fine".
 */
const UNPORTED = [
  /^src\/components\/DDatePicker\//,
  /^src\/components\/DInputPhone\//,
];

/**
 * Flow elements that are meant to keep their margin.
 *
 * An entry here says the element is CONTENT the library happens to render,
 * not chrome — so the document rhythm is the right answer for it. Each needs
 * its reason; a long list would mean the check had stopped checking.
 */
const KEEPS_FLOW = new Map([]);

if (!existsSync(BUNDLE)) {
  process.stderr.write('css-flow: dist/css/dynamic.css is missing — run `npm run css` first\n');
  process.exit(1);
}

const css = readFileSync(BUNDLE, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

/**
 * Class names some rule zeroes a block margin on.
 *
 * `margin: 0`, `margin-block: 0`, `margin-block-end: 0` and the longhand
 * spellings all count, as does any rule that sets the margin to a token —
 * the point is that the component made a DECISION about it, not that the
 * decision was zero.
 */
const decided = new Set();
for (const rule of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const [, selector, body] = rule;
  if (!/(^|[;{\s])margin(-block(-start|-end)?|-top|-bottom)?\s*:/.test(body)) continue;
  for (const name of selector.matchAll(/\.((?:df-)(?:\\.|[a-zA-Z0-9_-])+)/g)) {
    decided.add(name[1].replace(/\\/g, ''));
  }
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

const findings = [];
let checked = 0;

for (const file of walk(resolve(ROOT, 'src/components'))) {
  const rel = relative(ROOT, file);
  if (UNPORTED.some((pattern) => pattern.test(rel))) continue;
  const source = readFileSync(file, 'utf8');

  source.split('\n').forEach((line, index) => {
    /* A comment naming an element is not an element. `DDropdown` has a
       `// Ref on the rendered <ul>` note, which is prose about the code. */
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;

    const tag = FLOW.exec(line);
    if (!tag) return;
    checked += 1;

    const where = `${rel}:${index + 1}`;
    /* The className may be on this line or the next few; JSX wraps freely. */
    const window = source.split('\n').slice(index, index + 3).join(' ');
    const classes = /className="([^"{}]*)"/.exec(window);

    if (!classes) {
      findings.push({ where, message: `<${tag[1]}> with no class — nothing can switch its flow margin off` });
      return;
    }

    const own = classes[1].split(/\s+/).filter((name) => name.startsWith('df-'));
    if (!own.length) {
      findings.push({ where, message: `<${tag[1]}> has no df- class — nothing can switch its flow margin off` });
      return;
    }
    if (own.some((name) => decided.has(name) || KEEPS_FLOW.has(name))) return;

    findings.push({
      where,
      message: `<${tag[1]} class="${own.join(' ')}"> — no rule decides its margin, so it inherits the document rhythm`,
    });
  });
}

process.stdout.write(`css-flow: ${checked} flow element(s) rendered by src/components\n`);

if (!findings.length) {
  process.stdout.write('css-flow: every one has its margin decided by a rule\n');
  process.exit(0);
}

process.stderr.write(`\n${findings.length} flow element(s) nothing decides:\n`);
for (const f of findings) process.stderr.write(`  ${f.where.padEnd(58)} ${f.message}\n`);
process.stderr.write(
  '\ncss-flow: add `margin: 0` to the class in its component stylesheet, or list it in '
  + 'KEEPS_FLOW if the document rhythm IS the right answer for it\n',
);
process.exit(1);
