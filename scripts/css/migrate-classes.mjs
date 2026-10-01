/**
 * migrate-classes.mjs — rewrites Bootstrap class names to their 3.x equivalents.
 *
 * Written for the 83 story and docs files that hardcode Bootstrap classes in
 * markup. Those kept working while the 2.x stylesheet was still loaded; with it
 * deleted they render unstyled, and hand-editing 302 distinct class names
 * across 83 files is exactly the kind of job a person does badly.
 *
 * ## What it will and will not do
 *
 * It maps by an explicit table, never by pattern-guessing a prefix. Anything
 * not in the table is left alone and REPORTED, because a silent partial rename
 * is worse than none: the file looks migrated and is not.
 *
 * It only touches `class=` and `className=` string literals. A class name
 * assembled in a variable or a template hole is left for a human — the point of
 * this script is the mechanical bulk, not the interesting cases.
 *
 * Usage:
 *   node scripts/css/migrate-classes.mjs            # report only
 *   node scripts/css/migrate-classes.mjs --write    # apply
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const WRITE = process.argv.includes('--write');
const TARGETS = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const ROOTS = TARGETS.length ? TARGETS : ['stories'];

/* ------------------------------------------------------------------ *
 * The mapping table
 * ------------------------------------------------------------------ */

/** Exact renames. */
const EXACT = {
  // display
  'd-flex': 'df-flex',
  'd-inline-flex': 'df-inline-flex',
  'd-block': 'df-block',
  'd-inline-block': 'df-inline-block',
  'd-inline': 'df-inline',
  'd-grid': 'df-grid',
  'd-none': 'df-hidden',

  // flex
  'flex-row': 'df-flex-row',
  'flex-column': 'df-flex-col',
  'flex-row-reverse': 'df-flex-row-reverse',
  'flex-column-reverse': 'df-flex-col-reverse',
  'flex-wrap': 'df-flex-wrap',
  'flex-nowrap': 'df-flex-nowrap',
  'flex-fill': 'df-flex-1',
  'flex-1': 'df-flex-1',
  'flex-grow-1': 'df-grow',
  'flex-grow-0': 'df-grow-0',
  'flex-shrink-1': 'df-shrink',
  'flex-shrink-0': 'df-shrink-0',

  // alignment
  'align-items-start': 'df-items-start',
  'align-items-center': 'df-items-center',
  'align-items-end': 'df-items-end',
  'align-items-stretch': 'df-items-stretch',
  'align-items-baseline': 'df-items-baseline',
  'align-self-start': 'df-self-start',
  'align-self-center': 'df-self-center',
  'align-self-end': 'df-self-end',
  'align-self-stretch': 'df-self-stretch',
  'align-self-auto': 'df-self-auto',
  'justify-content-start': 'df-justify-start',
  'justify-content-center': 'df-justify-center',
  'justify-content-end': 'df-justify-end',
  'justify-content-between': 'df-justify-between',
  'justify-content-around': 'df-justify-around',
  'justify-content-evenly': 'df-justify-evenly',

  // type
  'text-start': 'df-text-start',
  'text-center': 'df-text-center',
  'text-end': 'df-text-end',
  'text-nowrap': 'df-text-nowrap',
  'text-uppercase': 'df-text-uppercase',
  'text-lowercase': 'df-text-lowercase',
  'text-capitalize': 'df-text-capitalize',
  'text-truncate': 'df-text-truncate',
  'text-muted': 'df-text-muted',
  'text-body': 'df-text-default',
  'text-white': 'df-text-on-emphasis',
  small: 'df-fs-body-sm',
  'fw-light': 'df-fw-light',
  'fw-normal': 'df-fw-normal',
  'fw-medium': 'df-fw-medium',
  'fw-semibold': 'df-fw-semibold',
  'fw-bold': 'df-fw-semibold',
  'fw-bolder': 'df-fw-bold',
  'lh-1': 'df-lh-tight',
  'lh-sm': 'df-lh-snug',
  'lh-base': 'df-lh-normal',
  'lh-lg': 'df-lh-loose',
  'font-monospace': 'df-font-mono',

  // sizing
  'w-100': 'df-w-full',
  'w-auto': 'df-w-auto',
  'h-100': 'df-h-full',
  'h-auto': 'df-h-auto',
  'mw-100': 'df-w-full',
  'min-w-0': 'df-min-w-0',

  // box
  'position-relative': 'df-relative',
  'position-absolute': 'df-absolute',
  'position-static': 'df-static',
  'position-fixed': 'df-fixed',
  'position-sticky': 'df-sticky',
  'overflow-auto': 'df-overflow-auto',
  'overflow-hidden': 'df-overflow-hidden',
  'overflow-visible': 'df-overflow-visible',
  'overflow-x-auto': 'df-overflow-x-auto',
  'overflow-y-auto': 'df-overflow-y-auto',
  'visually-hidden': 'df-sr-only',
  'list-unstyled': 'df-list-unstyled',

  // shape and elevation
  'rounded-0': 'df-rounded-none',
  rounded: 'df-rounded-control',
  'rounded-1': 'df-rounded-control-sm',
  'rounded-2': 'df-rounded-control',
  'rounded-3': 'df-rounded-control',
  'rounded-4': 'df-rounded-surface',
  'rounded-circle': 'df-rounded-pill',
  'rounded-pill': 'df-rounded-pill',
  'shadow-none': 'df-shadow-none',
  'shadow-sm': 'df-shadow-sm',
  shadow: 'df-shadow-md',
  'shadow-lg': 'df-shadow-lg',
  'border-0': 'df-border-0',

  // spinner / feedback
  'spinner-border': 'df-spinner',
  'spinner-border-sm': 'df-spinner',

  // borders and position
  border: 'df-border-1',
  'border-1': 'df-border-1',
  'border-2': 'df-border-2',
  'border-3': 'df-border-3',
  'top-0': 'df-top-0',
  'bottom-0': 'df-bottom-0',
  'start-0': 'df-start-0',
  'end-0': 'df-end-0',

  // headings-as-utilities
  'fs-1': 'df-fs-heading-1',
  'fs-2': 'df-fs-heading-2',
  'fs-3': 'df-fs-heading-3',
  'fs-4': 'df-fs-heading-4',
  'fs-5': 'df-fs-heading-5',
  'fs-6': 'df-fs-heading-6',
  h1: 'df-h1',
  h2: 'df-h2',
  h3: 'df-h3',
  h4: 'df-h4',
  h5: 'df-h5',
  h6: 'df-h6',
  'display-1': 'df-display-1',
  'display-2': 'df-display-2',
  'display-3': 'df-display-3',
  'display-4': 'df-display-4',
  'display-5': 'df-display-5',
  'display-6': 'df-display-6',

  // directional borders
  'border-top': 'df-border-t-1',
  'border-bottom': 'df-border-b-1',
  'border-start': 'df-border-s-1',
  'border-end': 'df-border-e-1',
  'border-top-0': 'df-border-t-0',
  'border-bottom-0': 'df-border-b-0',

  // components that kept their own name, only prefixed
  'd-avatar-group': 'df-avatar-group',

  // presentational odds and ends
  'cursor-pointer': 'df-cursor-pointer',
  'fst-italic': 'df-italic',
  'fst-normal': 'df-not-italic',
  'text-decoration-none': 'df-no-underline',
  'text-decoration-underline': 'df-underline',
  'text-decoration-line-through': 'df-line-through',
  'object-fit-cover': 'df-object-cover',
  'object-fit-contain': 'df-object-contain',
  'align-top': 'df-align-top',
  'align-middle': 'df-align-middle',
  'align-bottom': 'df-align-bottom',
  'align-baseline': 'df-align-baseline',
  'v-align-middle': 'df-align-middle',
  'float-none': 'df-float-none',
  'float-start': 'df-float-start',
  'float-end': 'df-float-end',
  'bg-transparent': 'df-bg-transparent',
  'border-dashed': 'df-border-dashed',
  'opacity-0': 'df-opacity-0',
  'opacity-25': 'df-opacity-20',
  'opacity-50': 'df-opacity-50',
  'opacity-75': 'df-opacity-80',
  'opacity-100': 'df-opacity-100',
  'text-truncate': 'df-text-truncate',
  'text-sm': 'df-fs-body-sm',
  'line-height-1': 'df-lh-tight',
  'min-width-0': 'df-min-w-0',
  'rounded-5': 'df-rounded-surface',
  'rounded-start': 'df-rounded-s-control',
  'rounded-end': 'df-rounded-e-control',
  'rounded-top': 'df-rounded-t-control',
  'rounded-bottom': 'df-rounded-b-control',
  container: 'df-container df-container-xxl',
  'container-fluid': 'df-container',
  'container-sm': 'df-container df-container-sm',
  'container-md': 'df-container df-container-md',
  'container-lg': 'df-container df-container-lg',
  'container-xl': 'df-container df-container-xl',
  'container-xxl': 'df-container df-container-xxl',
  // A bordered, padded thumbnail. Five 2.x declarations, five utilities.
  'img-thumbnail': 'df-w-full df-h-auto df-p-1 df-bg-surface df-border-1 df-border-default df-rounded-control',
  // `border-opacity-*` faded the border by alpha. 3.x has a muted border token
  // instead, which stays legible on both grounds — an alpha does not.
  'border-opacity-10': 'df-border-muted',
  'border-opacity-25': 'df-border-muted',
  'border-opacity-50': 'df-border-muted',
  'img-fluid': 'df-w-full df-h-auto',
  'text-bg-dark': 'df-bg-inverse df-text-inverse',
  'text-bg-light': 'df-bg-muted df-text-default',

  // grid
  //
  // 2.x's two grids collapse onto one. `.row` and `.grid` both become a
  // 12-column grid; the gutter classes become gaps. `.col-*` was a flexbox
  // width and `.g-col-*` a grid span, and both are a span here.
  // The gap is a FALLBACK, stripped below when the element carries its own
  // gutter class. Both 2.x grids had a default gutter, so dropping it here
  // would silently close up every grid that relied on it.
  row: 'df-grid df-grid-cols-12 df-gap-4',
  grid: 'df-grid df-grid-cols-12 df-gap-4',
  'g-0': 'df-gap-0',
  'g-1': 'df-gap-1',
  'g-2': 'df-gap-2',
  'g-3': 'df-gap-3',
  'g-4': 'df-gap-4',
  'g-5': 'df-gap-6',
  'col-auto': 'df-col-auto',
  'col-12': 'df-col-span-full',
};

// `col-{n}` / `g-col-{n}` -> `col-span-{n}`, and their responsive forms.
for (let n = 1; n <= 12; n += 1) {
  EXACT[`col-${n}`] ??= `df-col-span-${n}`;
  EXACT[`g-col-${n}`] = `df-col-span-${n}`;
  for (const bp of ['sm', 'md', 'lg', 'xl', 'xxl']) {
    EXACT[`col-${bp}-${n}`] = `df-${bp}:col-span-${n}`;
    EXACT[`g-col-${bp}-${n}`] = `df-${bp}:col-span-${n}`;
  }
}

// The opacity steps the ramp actually has. 2.x's arbitrary percentages are
// snapped to the nearest one rather than adding a step per template.
for (const n of [0, 5, 10, 20, 40, 50, 65, 80, 100]) EXACT[`opacity-${n}`] ??= `df-opacity-${n}`;

/**
 * Class names the stories define in their OWN stylesheets.
 *
 * These were never Bootstrap. Verified by grepping `stories/**\/*.scss` for a
 * matching rule rather than assumed from the name — `list-group-white` and
 * `fs-body` in particular look like framework classes and are not.
 */
/**
 * Decorative hues 2.x exposed as utilities and 3.x has not decided on.
 *
 * `text-pink`, `bg-purple-500` and the rest tint an icon for decoration, not to
 * signal anything — a gift is pink because a gift is pink. 3.x's role scale has
 * no entry for that, and the primitives (`--df-color-pink-500`) exist but are
 * deliberately not reachable from a utility: shipping `df-text-pink-500` would
 * reopen the raw palette we closed on purpose.
 *
 * So these are left UNMAPPED and reported every run. Three stories render their
 * icons untinted until the call is made: either recolour them onto semantic
 * roles, or decide 3.x ships a documented decorative escape hatch. Mapping them
 * to a role would make the report go quiet and quietly change the design.
 */
/**
 * Decorative hue classes, RESOLVED.
 *
 * These were left unmapped and reported on every run, because 3.x had no
 * decorative colour surface: the utilities came from the role vocabulary, and
 * there is no role called pink. The palette now exposes nineteen ramps as
 * `bg-/text-/border-{hue}-{step}`, so each of these has an answer.
 *
 * The bare ones — `text-pink` with no step — take 500, which is what 2.x's
 * `$pink` meant.
 */
const DECORATIVE = {
  'text-pink': 'df-text-pink-500',
  'text-purple': 'df-text-purple-500',
  'text-teal': 'df-text-teal-500',
  'text-orange': 'df-text-orange-500',
  'text-indigo': 'df-text-indigo-500',
  'text-pink-500': 'df-text-pink-500',
  'text-purple-500': 'df-text-purple-500',
  'bg-pink-500': 'df-bg-pink-500',
  'bg-purple-500': 'df-bg-purple-500',
  'bg-purple-50': 'df-bg-purple-50',
};

const UNDECIDED_DECORATIVE = new Set([]);

Object.assign(EXACT, DECORATIVE);

const STORY_LOCAL = new Set([
  'campaign-progress', 'fc-card', 'fc-icon', 'feature-name', 'featured',
  'np-row', 'plan-comparator-table', 'plan-price', 'plan-title', 'ps-title',
  'tc-card', 'tc-check', 'welcome-photo-carousel', 'radio-custom', 'fade-in',
  'list-group-white', 'fs-body', 'd-box', 'd-close', 'd-close-white',
  'text-wrap-balance', 'text-wrap-wrap', 'code-example', 'overlay-50',
  'no-visible-scroll', 'text-truncate-3', 'ls-1',
  // State classes the 3.x components express as data attributes; on a
  // story-local element they mean whatever that story's CSS says.
  'active', 'show',
]);

/**
 * The raw palette utilities, which 3.x deliberately does not ship.
 *
 * There is no `.df-text-gray-600`: a page needing that exact step applies the
 * token, rather than everyone downloading 2,000 rules. So these map to the
 * SEMANTIC token that carries the same intent — which is a judgement call, and
 * the reason they are listed by hand instead of pattern-matched.
 */
const PALETTE = {
  'text-gray-900': 'df-text-default',
  'text-gray-800': 'df-text-default',
  'text-gray-700': 'df-text-default',
  'text-gray-600': 'df-text-muted',
  'text-gray-500': 'df-text-muted',
  'text-gray-400': 'df-text-subtle',
  'text-gray-300': 'df-text-subtle',
  'text-secondary': 'df-text-muted',
  'text-body-secondary': 'df-text-muted',
  'text-dark': 'df-text-default',
  'border-dark': 'df-border-strong',
  'border-light': 'df-border-muted',
  'bg-white': 'df-bg-surface',
  'bg-light': 'df-bg-muted',
  'bg-gray-25': 'df-bg-surface',
  'bg-gray-50': 'df-bg-muted',
  'bg-gray-100': 'df-bg-muted',
  'bg-gray-200': 'df-bg-sunken',
  'bg-body': 'df-bg-canvas',
  'bg-dark': 'df-bg-inverse',
  'border-light': 'df-border-muted',
  'border-secondary': 'df-border-default',
};

/** Role-coloured utilities: the role survives, the family is renamed. */
const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
const ROLE_MAP = {};
for (const role of ROLES) {
  ROLE_MAP[`text-${role}`] = `df-text-${role}`;
  ROLE_MAP[`bg-${role}`] = `df-bg-${role}`;
  ROLE_MAP[`bg-${role}-subtle`] = `df-bg-${role}-subtle`;
  ROLE_MAP[`border-${role}`] = `df-border-${role}`;
  ROLE_MAP[`link-${role}`] = `df-text-${role}`;
}
ROLE_MAP['text-light'] = 'df-text-inverse';
ROLE_MAP['bg-light'] = 'df-bg-muted';

// `text-bg-{role}` set a fill AND its readable foreground in one class. 3.x
// keeps those separate, because the pairing is a token decision — so this is
// the one mapping that produces two class names from one.
for (const role of ROLES) {
  ROLE_MAP[`text-bg-${role}`] = `df-bg-${role} df-text-on-emphasis`;
  // Palette-step utilities. 3.x ships no raw palette, so the tint steps
  // collapse onto the role's subtle fill and the deep ones onto its base.
  // Steps at or below 200 are tints and collapse onto the subtle fill; 300 and
  // up are the role's own colour. Foreground and border have no subtle step, so
  // they land on the role either way.
  for (const step of [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) {
    ROLE_MAP[`bg-${role}-${step}`] = step <= 200 ? `df-bg-${role}-subtle` : `df-bg-${role}`;
    ROLE_MAP[`text-${role}-${step}`] = `df-text-${role}`;
    ROLE_MAP[`border-${role}-${step}`] = `df-border-${role}`;
  }
  ROLE_MAP[`bg-${role}-subtle`] = `df-bg-${role}-subtle`;
  ROLE_MAP[`border-${role}-subtle`] = `df-border-${role}`;
  ROLE_MAP[`text-${role}-emphasis`] = `df-text-${role}`;
}

/** Numeric spacing: `mb-3` -> `df-mb-3`. The scale is identical. */
const SPACING_RE = /^([mp][txbsexy]?)-(auto|[0-9]{1,2})$/;
/** Gap: `gap-3` -> `df-gap-3`. */
const GAP_RE = /^(gap|row-gap|column-gap)-([0-9]{1,2})$/;
/** Responsive spacing/display: `p-md-4` -> `df-md:p-4`. */
const RESPONSIVE_RE = /^([a-z]+(?:-[a-z]+)*?)-(sm|md|lg|xl|xxl)-?(.*)$/;

const TABLE = { ...EXACT, ...PALETTE, ...ROLE_MAP };

/**
 * Class names 3.x owns already, that belong to a third party, or that belong to
 * Storybook's own chrome (`sb-unstyled`, `inline-story`) rather than to a page.
 */
const SKIP = /^(df-|react-|rdp-|bi$|bi-|material-symbols|fa-|sb-|inline-story|docblock|sbdocs)/;

/**
 * Resolves utilities that map to the same property.
 *
 * `grid` carries a default gutter, so `class="grid g-2"` maps to a list with
 * two `df-gap-*` in it. Which one wins is then down to source order in the
 * stylesheet — not something a template author can see, and not something they
 * should have to reason about. The explicit gutter wins, and the default is
 * dropped.
 */
function reconcile(mappedClasses, originalClasses) {
  const hadOwnGutter = originalClasses.some((c) => /^g-\d+$/.test(c));
  if (!hadOwnGutter) return mappedClasses;
  let seenDefault = false;
  return mappedClasses.filter((c) => {
    if (c !== 'df-gap-4') return true;
    if (seenDefault) return false;
    seenDefault = true;
    // Keep it only if nothing else sets a gap.
    return !mappedClasses.some((other) => other !== 'df-gap-4' && /^df-gap-\d+$/.test(other));
  });
}

/** 2.x's own variant prefixes, which the templates already use. */
const VARIANT_RE = /^(hover|dark):(.+)$/;

function mapClass(name) {
  if (!name || SKIP.test(name) || STORY_LOCAL.has(name)) return name;
  if (TABLE[name]) return TABLE[name];

  // `hover:text-danger` / `dark:bg-primary-100` — the variant survives, the
  // utility inside it is mapped, and the whole thing gains the `df-` prefix.
  const variant = VARIANT_RE.exec(name);
  if (variant) {
    const [, kind, inner] = variant;
    const mapped = mapClass(inner);
    if (mapped !== inner) {
      // A mapping that produced two classes has to carry the variant on both.
      return mapped.split(' ').map((c) => `df-${kind}:${c.replace(/^df-/, '')}`).join(' ');
    }
  }

  const spacing = SPACING_RE.exec(name);
  if (spacing) return `df-${name}`;

  const gap = GAP_RE.exec(name);
  if (gap) return `df-${name}`;

  // Responsive forms move the breakpoint to the front with a colon, and land
  // in the opt-in stylesheet — which is flagged, because a story relying on it
  // needs that file linked.
  const responsive = RESPONSIVE_RE.exec(name);
  if (responsive) {
    const [, head, bp, tail] = responsive;
    const base = tail ? `${head}-${tail}` : head;
    const mapped = mapClass(base);
    if (mapped !== base) return `df-${bp}:${mapped.replace(/^df-/, '')}`;
  }

  return name;
}

/* ------------------------------------------------------------------ */

function sourceFiles() {
  const out = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir)) {
      if (entry === 'node_modules') continue;
      const path = join(dir, entry);
      if (statSync(path).isDirectory()) { walk(path); continue; }
      if (/\.(tsx|ts|mdx|html)$/.test(entry)) out.push(path);
    }
  };
  for (const r of ROOTS) walk(resolve(ROOT, r));
  return out.sort();
}

const ATTR_RE = /(\bclassName=|\bclass=)(["'])([^"'\n]*)\2/g;

const unmapped = new Map();
const changedFiles = [];
let replacedCount = 0;
let responsiveCount = 0;

for (const abs of sourceFiles()) {
  const source = readFileSync(abs, 'utf8');
  let touched = false;

  const next = source.replace(ATTR_RE, (whole, attr, quote, value) => {
    const mapped = value.split(/\s+/).map((name) => {
      const out = mapClass(name);
      if (out !== name) {
        replacedCount += 1;
        if (out.includes(':') && !out.startsWith('df-hover') && !out.startsWith('df-dark')) {
          responsiveCount += 1;
        }
      } else if (name && !SKIP.test(name) && !STORY_LOCAL.has(name) && !/^[A-Z]/.test(name)) {
        // A deliberately-skipped class is not an unmapped one. Reporting it as
        // "needs a human" buries the classes that genuinely do.
        const list = unmapped.get(name) ?? new Set();
        list.add(relative(ROOT, abs));
        unmapped.set(name, list);
      }
      return out;
    }).join(' ');

    const reconciled = reconcile(mapped.split(/\s+/).filter(Boolean), value.split(/\s+/)).join(' ');

    // Compare on the normalised original: an attribute written across lines
    // differs from its single-spaced form without a single class having been
    // mapped, and counting that as a change makes the report claim work it
    // did not do.
    if (reconciled !== value.split(/\s+/).filter(Boolean).join(' ')) touched = true;
    return `${attr}${quote}${reconciled}${quote}`;
  });

  if (touched) {
    changedFiles.push(relative(ROOT, abs));
    if (WRITE) writeFileSync(abs, next, 'utf8');
  }
}

/* ------------------------------------------------------------------ */

process.stdout.write(`migrate-classes: ${replacedCount} class name(s) mapped across ${changedFiles.length} file(s)\n`);
if (responsiveCount) {
  process.stdout.write(
    `migrate-classes: ${responsiveCount} are responsive (df-{bp}:…) and need `
    + 'dynamic.utilities.responsive.css linked\n',
  );
}

if (unmapped.size) {
  const sorted = [...unmapped].sort((a, b) => b[1].size - a[1].size);
  const decorative = sorted.filter(([n]) => UNDECIDED_DECORATIVE.has(n));
  const rest = sorted.filter(([n]) => !UNDECIDED_DECORATIVE.has(n));

  if (decorative.length) {
    process.stdout.write(
      `\nAwaiting a decision on decorative hues (${decorative.length}) — see UNDECIDED_DECORATIVE:\n`
      + `  ${decorative.map(([n]) => n).join(', ')}\n`
      + `  in ${[...new Set(decorative.flatMap(([, f]) => [...f]))].join(', ')}\n`,
    );
  }
  if (!rest.length) process.exit(0);
  process.stdout.write(`\nNOT mapped — left untouched, needs a human (${rest.length}):\n`);
  for (const [name, files] of rest.slice(0, process.argv.includes("--all") ? 1e9 : 40)) {
    process.stdout.write(`  ${name.padEnd(30)} ${files.size} file(s)\n`);
  }
  if (rest.length > 40) process.stdout.write(`  … and ${sorted.length - 40} more\n`);
}

if (!WRITE) {
  process.stdout.write('\nmigrate-classes: dry run. Re-run with --write to apply.\n');
}
