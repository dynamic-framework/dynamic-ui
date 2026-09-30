/**
 * migrate-components.mjs — rewrites Bootstrap COMPONENT markup to 3.x.
 *
 * `migrate-classes.mjs` handles the utilities, where the job is one name for
 * another. Components are not that job: 2.x encoded every variant as another
 * class (`btn btn-outline-primary btn-sm`) and 3.x encodes it as an attribute
 * (`df-button data-variant="outline" data-color="primary" data-size="sm"`).
 * A rename cannot express that, which is why this is a second pass with a
 * different shape rather than more entries in the first one's table.
 *
 * ## What it does
 *
 * It reads a whole `class`/`className` attribute, recognises a component by its
 * base class, consumes the modifier classes belonging to that component, and
 * writes back the 3.x class list plus the attributes those modifiers became.
 * Classes it does not recognise are left in place, in order — a utility sitting
 * on the same element survives untouched.
 *
 * ## What it will not do
 *
 * It will not touch an element whose class list is built in a variable or a
 * template hole, and it will not guess. A component with no 3.x equivalent is
 * reported, not approximated: a `.table` silently rewritten to a `div` with
 * borders is worse than one that still says `table` and can be found.
 *
 * Usage:
 *   node scripts/css/migrate-components.mjs           # report only
 *   node scripts/css/migrate-components.mjs --write   # apply
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const WRITE = process.argv.includes('--write');
const TARGETS = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const ROOTS = TARGETS.length ? TARGETS : ['stories'];

/** The roles 3.x actually has. `data-color` accepts nothing else. */
const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'neutral', 'inverse'];

/**
 * 2.x roles 3.x dropped, and where they land.
 *
 * `dark` and `light` were a theme leaking into the role scale: they named a
 * fill, not a meaning, so a dark-themed page got a `btn-dark` that vanished.
 * `neutral` and `inverse` are the same intent expressed against the surface.
 */
const LEGACY_ROLE = { dark: 'inverse', light: 'neutral' };
const role = (name) => LEGACY_ROLE[name] ?? (ROLES.includes(name) ? name : null);

/* ------------------------------------------------------------------ *
 * The component table
 * ------------------------------------------------------------------ *
 *
 * Each entry: a `base` class that identifies the component, the class it
 * becomes, and a `modifiers` function turning one legacy class into either
 * more classes (`classes`) or attributes (`attrs`). Returning `null` leaves
 * the class alone, so it falls through to the untouched list and gets reported.
 */

const COMPONENTS = [
  {
    base: 'btn',
    className: 'df-button',
    // A bare `btn` had no variant in 2.x but rendered as a filled control, so
    // `solid` is the faithful default rather than an assumption.
    defaults: { 'data-variant': 'solid' },
    modifiers(cls) {
      let m = /^btn-outline-([a-z]+)$/.exec(cls);
      if (m && role(m[1])) return { attrs: { 'data-variant': 'outline', 'data-color': role(m[1]) } };
      m = /^btn-(sm|lg)$/.exec(cls);
      if (m) return { attrs: { 'data-size': m[1] } };
      if (cls === 'btn-link') return { attrs: { 'data-variant': 'link' } };
      m = /^btn-([a-z]+)$/.exec(cls);
      if (m && role(m[1])) return { attrs: { 'data-color': role(m[1]) } };
      return null;
    },
  },
  {
    base: 'card',
    className: 'df-card',
    modifiers(cls) {
      if (cls === 'card-body') return { classes: ['df-card-body'] };
      if (cls === 'card-header') return { classes: ['df-card-header'] };
      if (cls === 'card-footer') return { classes: ['df-card-footer'] };
      if (cls === 'card-img-top' || cls === 'card-img') return { classes: ['df-card-media'] };
      return null;
    },
  },
  {
    base: 'alert',
    className: 'df-alert',
    modifiers(cls) {
      const m = /^alert-([a-z]+)$/.exec(cls);
      if (m && role(m[1])) return { attrs: { 'data-color': role(m[1]) } };
      return null;
    },
  },
  {
    base: 'badge',
    className: 'df-badge',
    modifiers: () => null,
  },
  {
    base: 'list-group',
    className: 'df-list',
    modifiers(cls) {
      if (cls === 'list-group-flush') return { attrs: { 'data-flush': '' } };
      return null;
    },
  },
  {
    base: 'table',
    className: 'df-table',
    modifiers(cls) {
      if (cls === 'table-striped' || cls === 'table-striped-columns') return { attrs: { 'data-striped': '' } };
      if (cls === 'table-bordered') return { attrs: { 'data-bordered': '' } };
      if (cls === 'table-borderless') return { attrs: { 'data-borderless': '' } };
      if (cls === 'table-hover') return { attrs: { 'data-hover': '' } };
      if (cls === 'table-sm') return { attrs: { 'data-size': 'sm' } };
      // `table-dark` was a theme on one element. 3.x themes a subtree, which
      // is the same intent expressed where it can also reach the rows.
      if (cls === 'table-dark') return { attrs: { 'data-df-theme': 'dark' } };
      if (cls === 'table-light') return { attrs: { 'data-head': 'filled' } };
      const m = /^table-([a-z]+)$/.exec(cls);
      if (m && role(m[1])) return { attrs: { 'data-color': role(m[1]) } };
      return null;
    },
  },
  {
    base: 'nav',
    className: 'df-tablist',
    modifiers(cls) {
      if (cls === 'nav-pills') return { attrs: { 'data-style': 'pills' } };
      if (cls === 'nav-tabs') return { attrs: { 'data-style': 'underline' } };
      return null;
    },
  },
];

/**
 * Components whose base class never appears with its own modifiers, so they
 * need no consuming pass — a plain rename is the whole job. They live here
 * rather than in `migrate-classes.mjs` because they are only correct once the
 * component pass above has claimed their parents.
 */
const STANDALONE = {
  'list-group-item': 'df-list-item',
  'nav-link': 'df-tab',
  'nav-item': 'df-tab-item',
  'form-control': 'df-input',
  'form-select': 'df-select',
  'form-label': 'df-label',
  'col-form-label': 'df-label',
  'form-check-label': 'df-choice-label',
  'form-check-input': 'df-choice-input',
  'form-check': 'df-choice',
  'form-text': 'df-help',
  'invalid-feedback': 'df-error',
  'spinner-grow': 'df-spinner',
  // 2.x styled a card title and body copy with their own classes. 3.x has no
  // equivalent because they are type, not structure — so they become the type
  // utilities that produce the same result.
  'card-title': 'df-fs-heading-5 df-fw-semibold',
  'card-subtitle': 'df-fs-body-sm df-text-muted',
  'card-text': 'df-fs-body',
  'list-group-item-light': 'df-bg-muted',
  'form-select-sm': 'df-select',
  'table-responsive': 'df-table-scroll',
  // Card parts sometimes appear without the `card` itself on the same element,
  // so the consuming pass never sees them.
  'card-body': 'df-card-body',
  'card-header': 'df-card-header',
  'card-footer': 'df-card-footer',
  'card-img-top': 'df-card-media',
  'card-img': 'df-card-media',
  placeholder: 'df-skeleton',
  // The shimmer is the default in 3.x, so the class that used to switch it on
  // now adds nothing. Dropping it is the migration.
  'placeholder-wave': '',
  // A positioning wrapper. Every use already carries the position utilities
  // that actually place it, so the class was doing nothing but naming itself.
  'toast-container': '',
};

/** Modifiers that belong to a component but are written on the same element. */
const INLINE_ATTRS = {
  'nav-fill': { 'data-fill': '' },
  // 2.x's theme was a class, so `.dark` could only be styled by rules written
  // to look for it. 3.x themes on an attribute, which is what lets any element
  // carry a theme rather than only the root.
  dark: { 'data-df-theme': 'dark' },
  light: { 'data-df-theme': 'light' },
};

/** Size modifiers that apply to whatever component they sit on. */
const SIZE_ONLY = { 'form-select-sm': 'sm', 'form-control-sm': 'sm', 'form-control-lg': 'lg' };

/** Owned by 3.x, a third party, or the stories themselves. */
const SKIP = /^(df-|react-|rdp-|bi-|bi$|material-symbols|fa-|sb-|inline-story|docblock|sbdocs)/;

/* ------------------------------------------------------------------ */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (/\.(tsx?|jsx?|mdx|html)$/.test(entry)) out.push(abs);
  }
  return out;
}

const unmapped = new Map();
const changedFiles = [];
let componentCount = 0;
let attrCount = 0;

/**
 * Rewrites one class list.
 *
 * Returns the new list plus the attributes it produced, or `null` if nothing
 * in the list belongs to a component — in which case the file is left alone so
 * the two passes never fight over the same attribute.
 */
function rewrite(classes, file) {
  const active = COMPONENTS.filter((c) => classes.includes(c.base));
  if (!active.length) {
    // Still worth renaming the standalone ones, which have no parent to find.
    if (!classes.some((c) => STANDALONE[c] !== undefined || INLINE_ATTRS[c])) return null;
  }

  const attrs = {};
  const out = [];

  for (const cls of classes) {
    if (!cls) continue;

    const component = COMPONENTS.find((c) => c.base === cls);
    if (component) {
      out.push(component.className);
      Object.assign(attrs, component.defaults ?? {});
      continue;
    }

    if (INLINE_ATTRS[cls]) {
      Object.assign(attrs, INLINE_ATTRS[cls]);
      continue;
    }

    if (STANDALONE[cls] !== undefined) {
      out.push(...STANDALONE[cls].split(' ').filter(Boolean));
      if (SIZE_ONLY[cls]) attrs['data-size'] = SIZE_ONLY[cls];
      continue;
    }

    let handled = false;
    for (const c of active) {
      const result = c.modifiers(cls);
      if (!result) continue;
      if (result.classes) out.push(...result.classes);
      if (result.attrs) Object.assign(attrs, result.attrs);
      handled = true;
      break;
    }
    if (handled) continue;

    out.push(cls);
    if (!SKIP.test(cls) && !/^[A-Z]/.test(cls)) {
      const list = unmapped.get(cls) ?? new Set();
      list.add(relative(ROOT, file));
      unmapped.set(cls, list);
    }
  }

  return { classes: [...new Set(out)], attrs };
}

/** Serialises attributes, skipping any the element already carries. */
function renderAttrs(attrs, tail) {
  return Object.entries(attrs)
    .filter(([name]) => !tail.slice(0, 300).includes(`${name}=`) && !tail.slice(0, 300).includes(` ${name} `))
    .map(([name, value]) => (value === '' ? ` ${name}` : ` ${name}="${value}"`))
    .join('');
}

const ATTR_RE = /\b(class|className)="([^"{}]*)"/g;

for (const rootDir of ROOTS) {
  for (const abs of walk(resolve(ROOT, rootDir))) {
    const source = readFileSync(abs, 'utf8');
    let touched = false;

    const next = source.replace(ATTR_RE, (match, attr, value, offset) => {
      const result = rewrite(value.split(/\s+/), abs);
      if (!result) return match;

      const classList = result.classes.join(' ');
      const rendered = renderAttrs(result.attrs, source.slice(offset + match.length));
      // Every class on the element became an attribute. An empty `class=""` is
      // valid and meaningless, and it reads as a leftover — so drop it.
      const replacement = classList
        ? `${attr}="${classList}"${rendered}`
        : rendered.trimStart();
      if (replacement === match) return match;

      touched = true;
      componentCount += 1;
      attrCount += rendered ? Object.keys(result.attrs).length : 0;
      return replacement;
    });

    if (touched) {
      changedFiles.push(relative(ROOT, abs));
      if (WRITE) writeFileSync(abs, next);
    }
  }
}

/* ------------------------------------------------------------------ */

process.stdout.write(
  `migrate-components: ${componentCount} element(s) rewritten across ${changedFiles.length} file(s), `
  + `${attrCount} attribute(s) added\n`,
);
if (!WRITE) process.stdout.write('migrate-components: dry run — pass --write to apply\n');

if (unmapped.size) {
  const sorted = [...unmapped].sort((a, b) => b[1].size - a[1].size);
  process.stdout.write(`\nNo 3.x equivalent — left as-is (${unmapped.size}):\n`);
  for (const [name, files] of sorted) {
    process.stdout.write(`  ${name.padEnd(30)} ${files.size} file(s)\n`);
  }
}
