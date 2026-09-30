/**
 * migrate-variables.mjs — rewrites `--bs-*` custom properties to `--df-*`.
 *
 * The stories reach into the framework's variables from inline styles and from
 * their own stylesheets: `style={{ color: 'var(--bs-primary)' }}`. With
 * Bootstrap gone every one of those resolves to nothing, and a `var()` that
 * resolves to nothing does not fall back to a sensible default — the
 * declaration is simply dropped. So this is not tidying: it is the difference
 * between a story rendering and a story rendering wrong, silently.
 *
 * ## The interesting part is the colour steps
 *
 * 2.x exposed a full `--bs-{role}-{25..900}` ramp, and the stories use the
 * middle of it freely. 3.x deliberately does not: a component that picks step
 * 600 has decided what "primary, a bit darker" means, and that decision then
 * cannot follow a rebrand or a theme. The semantic layer offers four rungs per
 * role — `base`, `base-hover`, `base-active`, `subtle` — so the eleven steps
 * map onto those, and the mapping is lossy ON PURPOSE.
 *
 * Where a story genuinely wanted a specific step it now gets the role's own
 * colour, which is the right answer in a dark theme too. Where it wanted a
 * tint it gets `subtle`. Neither is the same pixel; both are the same intent,
 * and only one of them survives the next theme.
 *
 * Usage:
 *   node scripts/css/migrate-variables.mjs           # report only
 *   node scripts/css/migrate-variables.mjs --write   # apply
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const WRITE = process.argv.includes('--write');
const TARGETS = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const ROOTS = TARGETS.length ? TARGETS : ['stories'];

const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

/** Exact renames, for the properties that are not part of a ramp. */
const EXACT = {
  // ground and ink
  'body-bg': 'bg-canvas',
  'body-color': 'fg-default',
  'secondary-bg': 'bg-muted',
  'secondary-color': 'fg-muted',
  'heading-color': 'fg-default',
  'link-color': 'fg-link',
  'link-hover-color': 'fg-link-hover',
  white: 'color-white',
  black: 'color-black',
  dark: 'bg-inverse',
  light: 'bg-muted',

  // type
  'body-font-family': 'font-family-sans',
  'body-font-size': 'font-size-300',
  'body-line-height': 'line-height-normal',
  'heading-line-height': 'line-height-tight',
  'lh-sm': 'line-height-snug',
  'lh-base': 'line-height-normal',
  'lh-lg': 'line-height-loose',
  'fs-small': 'font-size-200',
  'fs-1': 'text-heading-1-font-size',
  'fs-2': 'text-heading-2-font-size',
  'fs-3': 'text-heading-3-font-size',
  'fs-4': 'text-heading-4-font-size',
  'fs-5': 'text-heading-5-font-size',
  'fs-6': 'text-heading-6-font-size',
  'fs-display-1': 'text-display-1-font-size',
  'fs-display-2': 'text-display-2-font-size',
  'fs-display-3': 'text-display-3-font-size',
  'fs-display-4': 'text-display-4-font-size',
  'fs-display-5': 'text-display-5-font-size',
  'fs-display-6': 'text-display-6-font-size',

  // shape, stroke, elevation
  'border-color': 'border-default',
  'border-color-translucent': 'border-muted',
  'border-width': 'stroke-control',
  'border-radius': 'shape-control',
  'border-radius-sm': 'shape-control-sm',
  'border-radius-lg': 'shape-control-lg',
  'border-radius-xl': 'shape-surface',
  'border-radius-xxl': 'shape-surface-lg',
  'border-radius-2xl': 'shape-surface-lg',
  'border-radius-pill': 'shape-pill',
  'box-shadow': 'elevation-md',
  'box-shadow-sm': 'elevation-sm',
  'box-shadow-lg': 'elevation-lg',

  // focus
  'focus-ring-color': 'focus-ring',
  'focus-ring-width': 'focus-ring-width',
  'focus-ring-border-color': 'role-primary-base',

  // validity
  'form-valid-color': 'role-success-base',
  'form-invalid-color': 'role-danger-base',

  // components, where 3.x kept the same knob under its own name
  'btn-bg': 'button-bg',
  'btn-color': 'button-fg',
  'btn-border-color': 'button-border-color',
  'btn-border-radius': 'button-radius',
  'btn-hover-bg': 'button-hover-bg',
  'btn-hover-border-color': 'button-hover-border-color',
  'btn-active-bg': 'button-active-bg',
  'btn-active-border-color': 'button-active-border-color',
  'progress-height': 'progress-height',
  'progress-bg': 'progress-track-color',
  'progress-bar-bg': 'progress-bar-bg',
  'list-group-bg': 'list-bg',
  'list-group-border-width': 'list-border-width',
  'list-group-border-radius': 'list-radius',
  'list-group-active-bg': 'list-active-bg',
  'list-group-active-color': 'list-active-fg',
  'list-group-action-active-bg': 'list-hover-bg',
  'nav-link-color': 'tabs-tab-fg',
  'nav-pills-link-active-bg': 'tabs-tab-active-bg',
  'nav-pills-link-active-color': 'tabs-tab-active-fg',
  'chip-font-size': 'chip-font-size',
};

/**
 * Names with no 3.x equivalent, and why.
 *
 * Listed rather than silently passed through, so the report separates "we
 * decided not to have this" from "we have not looked at this yet".
 */
const DROPPED = {
  'primary-rgb': 'the `-rgb` channels existed so `rgba()` could take an alpha; `color-mix()` does that from the colour itself',
  'secondary-rgb': 'same as `primary-rgb`',
  'white-rgb': 'same as `primary-rgb`',
  columns: 'the grid column count is fixed at 12 and set by `df-grid-cols-*`',
  'border-style': '3.x sets the style at the rule, and `df-border-dashed` switches it',
  'focus-ring-opacity': 'the focus ring is one token, not a colour times an opacity',
  'display-font-size': 'superseded by the `text-display-*` type set',
  'btn-focus-box-shadow': 'the focus ring is shared across components, not per-component',
  'btn-outline-hover-border-color': 'the outline variant derives its hover from the role',
  'btn-primary-color': 'the per-role button colours come from `data-color`, not a variable',
  'group-action-active-color': 'renamed with the component; use `--df-list-active-fg`',
  'input-phone': 'a third-party widget kept as-is',
};

/* ------------------------------------------------------------------ */

/**
 * Where one step of a 2.x colour ramp lands.
 *
 * 25-200 are tints and become `subtle`. 300-500 are the colour itself. 600 and
 * up were the hover and active shades, and 3.x names them that way.
 */
function rampTarget(roleName, step) {
  const n = Number(step);
  if (n <= 200) return `role-${roleName}-subtle`;
  if (n <= 500) return `role-${roleName}-base`;
  if (n <= 700) return `role-${roleName}-base-hover`;
  return `role-${roleName}-base-active`;
}

function target(name) {
  if (EXACT[name]) return EXACT[name];
  if (DROPPED[name]) return null;

  // `--bs-ref-spacer-{n}` was the spacing scale under its reference name.
  let m = /^ref-spacer-(\d+)$/.exec(name);
  if (m) return `size-${m[1]}`;

  // `--bs-{role}` with no step is the role's base colour.
  if (ROLES.includes(name)) return `role-${name}-base`;

  m = /^([a-z]+)-(\d+)$/.exec(name);
  if (m && ROLES.includes(m[1])) return rampTarget(m[1], m[2]);

  // `--bs-{role}-bg-subtle` and friends.
  m = /^([a-z]+)-bg-subtle$/.exec(name);
  if (m && ROLES.includes(m[1])) return `role-${m[1]}-subtle`;

  // The neutral ramp kept its steps, under the palette's own name.
  m = /^gray-(\d+)$/.exec(name);
  if (m) return `color-neutral-${m[1]}`;

  // Named hues are palette primitives in 3.x too.
  m = /^(blue|indigo|purple|pink|red|orange|yellow|green|teal|cyan)$/.exec(name);
  if (m) return `color-${m[1]}-500`;

  return undefined;
}

/* ------------------------------------------------------------------ */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (/\.(tsx?|jsx?|mdx|s?css|html)$/.test(entry)) out.push(abs);
  }
  return out;
}

const unknown = new Map();
const dropped = new Map();
const changedFiles = [];
let replaced = 0;

for (const rootDir of ROOTS) {
  for (const abs of walk(resolve(ROOT, rootDir))) {
    const source = readFileSync(abs, 'utf8');
    let touched = false;

    const next = source.replace(/--bs-([a-z0-9-]+)/g, (match, name) => {
      const to = target(name);
      if (to === null) {
        const list = dropped.get(name) ?? new Set();
        list.add(relative(ROOT, abs));
        dropped.set(name, list);
        return match;
      }
      if (to === undefined) {
        const list = unknown.get(name) ?? new Set();
        list.add(relative(ROOT, abs));
        unknown.set(name, list);
        return match;
      }
      touched = true;
      replaced += 1;
      return `--df-${to}`;
    });

    if (touched) {
      changedFiles.push(relative(ROOT, abs));
      if (WRITE) writeFileSync(abs, next);
    }
  }
}

/* ------------------------------------------------------------------ */

process.stdout.write(
  `migrate-variables: ${replaced} reference(s) rewritten across ${changedFiles.length} file(s)\n`,
);
if (!WRITE) process.stdout.write('migrate-variables: dry run — pass --write to apply\n');

if (dropped.size) {
  process.stdout.write(`\nNo 3.x equivalent by design (${dropped.size}) — the declaration needs rewriting, not renaming:\n`);
  for (const [name, files] of dropped) {
    process.stdout.write(`  --bs-${name.padEnd(28)} ${[...files].join(', ')}\n`);
    process.stdout.write(`  ${' '.repeat(30)} ${DROPPED[name]}\n`);
  }
}

if (unknown.size) {
  process.stdout.write(`\nUnrecognised (${unknown.size}) — needs a human:\n`);
  for (const [name, files] of [...unknown].sort((a, b) => b[1].size - a[1].size)) {
    process.stdout.write(`  --bs-${name.padEnd(28)} ${files.size} file(s)\n`);
  }
}
