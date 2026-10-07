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

/**
 * The elements `base/typography.css` gives a flow margin to.
 *
 * Headings are NOT on this list. They carried one and no longer do — the rule
 * was removed deliberately, so there is nothing for a component to neutralise
 * and demanding a decision about it would be asking for a reset of a default
 * that does not exist.
 *
 * `li` WAS missing, and that is the gap this check was supposed to close and
 * did not. `base/typography.css` gives every `li + li` a block margin, every
 * component that renders a list lays it out with `gap`, and not one of them
 * reset the item — so the containers were all audited and the items inside
 * them were invisible to the audit.
 */
/*
 * `[\s>]` OR end of line.
 *
 * JSX breaks freely, and an element with several attributes is usually written
 * with the tag alone on its line:
 *
 *     <li
 *       role="presentation"
 *       className="df-tab-item"
 *     >
 *
 * The old pattern required a space or a `>` immediately after the tag name, so
 * every element written that way was INVISIBLE to this check — not passing it,
 * not reaching it. Seven of them across `src/components`, including the tab
 * item that sent me looking.
 */
const FLOW = /<(p|ul|ol|dl|li|blockquote|figure|pre|table)(?=[\s>]|$)/;

/**
 * Components still wrapping a third party, exempted whole.
 *
 * The same list `css:usage` keeps, and for the same reason: the exemption is
 * "this component is not ours yet", not "these particular elements are fine".
 */
const UNPORTED = [];

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
/**
 * Which block-margin ENDS each class has a decision for.
 *
 * Not a boolean. The first version recorded only THAT a margin was set, and
 * that is how a reset of `margin-block-start` passed the check while the
 * `<ul>`'s bottom margin from the same base rule sailed through — and how a
 * `margin-block-end: -1px` on a tab item, set for the divider overlap, read
 * as the item's start margin having been dealt with. It had not, and the
 * stray band above the tab strip was exactly that.
 */
const SHORTHAND = /(^|[;{\s])margin\s*:/;
const BLOCK_BOTH = /(^|[;{\s])margin-block\s*:/;
const BLOCK_START = /(^|[;{\s])margin(-block-start|-top)\s*:/;
const BLOCK_END = /(^|[;{\s])margin(-block-end|-bottom)\s*:/;

/** class -> { start, end } */
const decided = new Map();

for (const rule of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const [, selector, body] = rule;
  const covers = SHORTHAND.test(body) || BLOCK_BOTH.test(body);
  const start = covers || BLOCK_START.test(body);
  const end = covers || BLOCK_END.test(body);
  if (!start && !end) continue;

  for (const name of selector.matchAll(/\.((?:df-)(?:\\.|[a-zA-Z0-9_-])+)/g)) {
    const key = name[1].replace(/\\/g, '');
    const seen = decided.get(key) ?? { start: false, end: false };
    decided.set(key, { start: seen.start || start, end: seen.end || end });
  }
}

/**
 * Which ends the BASE layer gives each element, so a decision can be checked
 * against what there actually is to neutralise.
 */
const BASE_GIVES = {
  /* `li + li` sets the start only. */
  li: { start: true, end: false },
  /* `p, ul, ol, …` set `margin-block: 0 <end>` — the end only. */
  p: { start: false, end: true },
  ul: { start: false, end: true },
  ol: { start: false, end: true },
  dl: { start: false, end: true },
  blockquote: { start: false, end: true },
  figure: { start: false, end: true },
  pre: { start: false, end: true },
  table: { start: false, end: true },
};

/** Whether `names` cover every end the base layer gives `tag`. */
function covered(tag, names) {
  const needs = BASE_GIVES[tag] ?? { start: true, end: true };
  return names.some((name) => {
    if (KEEPS_FLOW.has(name)) return true;
    const has = decided.get(name);
    if (!has) return false;
    return (!needs.start || has.start) && (!needs.end || has.end);
  });
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (/\.tsx?$/.test(entry) && !/\.spec\.tsx?$/.test(entry)) out.push(abs);
  }
  return out;
}

/**
 * The vanilla build renders flow elements too, and in a different idiom.
 *
 * `createElement('li')` matches no JSX pattern, so the whole framework-free
 * layer was outside this check — and it builds the same markup the React side
 * does, so it inherits the same default and needs the same decision. Its
 * dropzone was appending an unclassed `<li>`.
 */
const CREATED = /createElement\(\s*'(p|ul|ol|dl|li|blockquote|figure|pre|table)'\s*\)/;

/**
 * Flow elements rendered through a VARIABLE tag, which `FLOW` cannot see.
 *
 * `DListGroupItem` takes `as?: 'li' | 'a' | 'button'`, resolves it to a
 * `const Tag`, and renders `<Tag className="df-list-item">`. There is no
 * `<li` anywhere in the file, so the element was never checked — and
 * `.df-list-item` went without a margin decision until somebody saw the gap
 * between two list rows. The container `.df-list` WAS in the reset, which is
 * what made it look handled: `li + li` sets the margin on the ITEM, and the
 * item was the half nothing could see.
 *
 * Resolved from two places, because a component states its tags in both:
 * the prop's type union, and the destructured default.
 */
const TAG_UNION = /\bas\??:\s*((?:'[a-z0-9]+'\s*\|\s*)*'[a-z0-9]+')/;
const TAG_DEFAULT = /\bas\s*=\s*'([a-z0-9]+)'/;
const FLOW_TAGS = new Set(['p', 'ul', 'ol', 'dl', 'li', 'blockquote', 'figure', 'pre', 'table']);

/**
 * Every flow element a file's `as` prop can resolve to.
 *
 * The union and the default are merged rather than one preferred over the
 * other: the default is what most call sites get, and the union is what the
 * rest can ask for. A class has to be right for both.
 */
function flowTagsOf(source) {
  const tags = new Set();

  const union = TAG_UNION.exec(source);
  if (union) {
    for (const quoted of union[1].matchAll(/'([a-z0-9]+)'/g)) {
      if (FLOW_TAGS.has(quoted[1])) tags.add(quoted[1]);
    }
  }

  const fallback = TAG_DEFAULT.exec(source);
  if (fallback && FLOW_TAGS.has(fallback[1])) tags.add(fallback[1]);

  /*
   * A tag resolver can also name a tag the union does not — `DListGroup`
   * returns `'ol'` for `numbered` while its union says `'ul' | 'ol' | 'div'`.
   * Reading the returns as well keeps the two from drifting.
   */
  for (const returned of source.matchAll(/return\s+'([a-z0-9]+)'\s*;/g)) {
    if (FLOW_TAGS.has(returned[1])) tags.add(returned[1]);
  }

  return [...tags];
}

/** The capitalised JSX identifiers a file renders, e.g. `<Tag`. */
const DYNAMIC_TAG = /<([A-Z][A-Za-z0-9_]*)(?=[\s>]|$)/;

/**
 * The capitalised identifiers that hold a TAG NAME rather than a component.
 *
 * `<DIcon>` and `<Tag>` are the same shape to a regex, and only one of them
 * is an element this check has an opinion about. What separates them is the
 * declaration: a tag variable is resolved from the `as` prop, so its
 * initialiser mentions `as` or a quoted tag.
 */
function tagVariablesOf(source) {
  const names = new Set();
  const lines = source.split('\n');

  lines.forEach((line, index) => {
    const declared = /^\s*const\s+([A-Z][A-Za-z0-9_]*)\s*=/.exec(line);
    if (!declared) return;

    /*
     * Fifteen lines, which is the whole of both resolvers in the library plus
     * room to grow. A resolver longer than that is doing enough that the
     * element is worth looking at by hand anyway.
     */
    const window = lines.slice(index, index + 15).join(' ');
    if (/\bas\b/.test(window) || /'(?:p|ul|ol|dl|li|blockquote|figure|pre|table)'/.test(window)) {
      names.add(declared[1]);
    }
  });

  return names;
}

const findings = [];
let checked = 0;

for (const file of walk(resolve(ROOT, 'src/vanilla'))) {
  const rel = relative(ROOT, file);
  const source = readFileSync(file, 'utf8');

  source.split('\n').forEach((line, index) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
    const tag = CREATED.exec(line);
    if (!tag) return;
    checked += 1;

    /*
     * The class is assigned on a following line, not in the same expression,
     * so the window has to cover the few lines after the creation. Five is
     * what the current code needs; a class set further away than that is far
     * enough from its element to be worth flagging anyway.
     */
    const window = source.split('\n').slice(index, index + 6).join(' ');
    const names = [...window.matchAll(/'(df-[a-z0-9-]+)'/g)].map((m) => m[1]);

    if (!covered(tag[1], names)) {
      findings.push({
        where: `${rel}:${index + 1}`,
        message: `createElement('${tag[1]}') — no rule decides its margin, so it inherits the document rhythm`,
      });
    }
  });
}

for (const file of walk(resolve(ROOT, 'src/components'))) {
  const rel = relative(ROOT, file);
  if (UNPORTED.some((pattern) => pattern.test(rel))) continue;
  const source = readFileSync(file, 'utf8');

  /* What `<Tag>` can be in this file, and which identifiers are tags at all. */
  const dynamicTags = flowTagsOf(source);
  const tagVariables = dynamicTags.length ? tagVariablesOf(source) : new Set();

  source.split('\n').forEach((line, index) => {
    /* A comment naming an element is not an element. `DDropdown` has a
       `// Ref on the rendered <ul>` note, which is prose about the code. */
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;

    const literalTag = FLOW.exec(line);
    const dynamic = DYNAMIC_TAG.exec(line);
    const isDynamic = !literalTag
      && dynamic !== null
      && tagVariables.has(dynamic[1]);

    if (!literalTag && !isDynamic) return;
    checked += 1;

    /*
     * `tags` is a LIST for the dynamic case: `as?: 'ul' | 'ol' | 'div'` can
     * be either, and the base layer gives `ul` and `ol` different ends, so
     * the class has to cover every end any of them could bring.
     */
    const tags = literalTag ? [literalTag[1]] : dynamicTags;
    const shown = literalTag ? `<${literalTag[1]}` : `<${dynamic[1]} as ${tags.join('|')}`;
    const where = `${rel}:${index + 1}`;
      /*
       * The window runs to the end of the OPENING TAG, not a fixed number of
       * lines.
       *
       * Three lines covered `<li role key className` by one line short, so the
       * tab item read as having no class at all — and a guess that happens to
       * fit today's formatting breaks on the next prop someone adds.
       */
      const rest = source.split('\n').slice(index);
      const close = rest.findIndex((text) => text.includes('>'));
      const window = rest.slice(0, close === -1 ? 1 : close + 1).join(' ');
    /*
     * A literal attribute, or the literals inside a `classNames()` call.
     *
     * `className={classNames('df-pagination', className)}` is how half the
     * library writes it, and reading only the quoted form reported those
     * elements as having no class AT ALL — a different and much more
     * alarming message than the truth, which sent me looking in the wrong
     * place.
     */
    const literal = /className="([^"{}]*)"/.exec(window);
    const computed = /className=\{[^}]*\}/.exec(window);
    const names = [
      ...(literal ? literal[1].split(/\s+/) : []),
      ...(computed ? [...computed[0].matchAll(/'([^']+)'/g)].map((m) => m[1]) : []),
    ];

    if (!names.length) {
      findings.push({ where, message: `${shown}> with no class — nothing can switch its flow margin off` });
      return;
    }

    const own = names.filter((name) => name.startsWith('df-'));
    if (!own.length) {
      findings.push({ where, message: `${shown}> has no df- class — nothing can switch its flow margin off` });
      return;
    }
    if (tags.every((candidate) => covered(candidate, own))) return;

    findings.push({
      where,
      message: `${shown} class="${own.join(' ')}"> — no rule decides its margin, so it inherits the document rhythm`,
    });
  });
}

process.stdout.write(`css-flow: ${checked} flow element(s) rendered by src/\n`);

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
