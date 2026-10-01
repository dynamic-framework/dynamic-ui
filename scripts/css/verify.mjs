/**
 * verify.mjs — resolves the built stylesheet and checks what it actually
 * computes to.
 *
 * `validate.mjs` proves no reference dangles. This goes further: it walks the
 * real `dist/css/dynamic.css`, resolves the `var()` chains the way a browser
 * would, and checks the resulting colours.
 *
 * That end-to-end path is where a mistake would otherwise hide. The token
 * validator checks `role.primary.on-base` against `role.primary.base` — but the
 * button does not use those directly. It uses `--df-button-fg` and
 * `--df-button-bg`, which the generated matrix wires to the role, which aliases
 * a primitive. A wrong slot mapping in `build-variants.mjs` would pass every
 * check so far and still ship white text on a white button.
 *
 * Checks:
 *   1. Every variant x role combination resolves to a real colour, in both modes.
 *   2. Opaque fills clear 4.5:1 between their resolved foreground and background.
 *   3. The dark mode block actually overrides — i.e. the two modes differ.
 *
 * Usage: node scripts/css/verify.mjs
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { contrastRatio } from '../tokens/lib/color.mjs';
import { loadManifest } from '../tokens/lib/model.mjs';

/**
 * The selector each colour mode is emitted under, read from the token manifest
 * rather than hardcoded.
 *
 * This was a literal `:root[data-df-theme="dark"]` until the selector changed
 * to an unscoped `[data-df-theme="dark"]` so a theme could apply to a subtree.
 * The lookup then matched nothing, DARK silently became a copy of LIGHT, and
 * every dark-mode contrast check passed against light values. Only the
 * "does the dark block exist at all" guard noticed — which is why that guard
 * is worth having, and why this now comes from the manifest.
 */
const MODE_SELECTORS = (() => {
  const manifest = loadManifest();
  const out = new Map();
  for (const col of manifest.collections) {
    for (const mode of col.modes) {
      if (mode.selector) out.set(mode.name, mode.selector);
    }
  }
  return out;
})();

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const BUNDLE = resolve(ROOT, 'dist/css/dynamic.css');

if (!existsSync(BUNDLE)) {
  process.stderr.write('css-verify: dist/css/dynamic.css not found — run `npm run css` first\n');
  process.exit(1);
}

// Comments are stripped first. Without this, the rule reader captures the
// comment that precedes a selector as part of the selector itself — `:root`
// arrives as `/* Primitives */ :root` and matches nothing.
const css = readFileSync(BUNDLE, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

/* ------------------------------------------------------------------ *
 * A very small CSS reader
 *
 * Deliberately not a full parser: the bundle is machine-generated and its
 * shape is known, so matching `selector { decls }` at brace depth is enough
 * and keeps this dependency-free.
 * ------------------------------------------------------------------ */

/** Every `selector { ... }` rule in the file, in source order. */
function readRules(source) {
  const rules = [];
  const re = /([^{}]+)\{([^{}]*)\}/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    const selector = m[1].trim().replace(/\s+/g, ' ');
    // Skip at-rule preludes captured as selectors (`@media (...)`, `@layer`).
    if (selector.startsWith('@')) continue;
    rules.push({ selector, body: m[2] });
  }
  return rules;
}

/** `--df-x: value;` pairs inside a rule body. */
function readDecls(body) {
  const decls = new Map();
  const re = /(--df-[a-zA-Z0-9-]+)\s*:\s*([^;]+)/g;
  let m;
  while ((m = re.exec(body)) !== null) decls.set(m[1], m[2].trim());
  return decls;
}

const allRules = readRules(css);

/**
 * Declarations for one mode, taken from its explicit attribute block rather
 * than the media query — same content, and no need to model a media context.
 */
function modeDecls(modeName) {
  const selector = MODE_SELECTORS.get(modeName);
  if (!selector) return new Map();
  const rule = allRules.find((r) => r.selector === selector);
  return rule ? readDecls(rule.body) : new Map();
}

/** Root custom properties for the light mode: every `:root` rule, merged. */
function lightDecls() {
  const merged = new Map();
  for (const rule of allRules) {
    if (rule.selector !== ':root') continue;
    for (const [k, v] of readDecls(rule.body)) merged.set(k, v);
  }
  return merged;
}

const LIGHT = lightDecls();
const DARK = new Map([...LIGHT, ...modeDecls('dark')]);

/** Local slot assignments per variant x colour selector. */
function variantDecls(block, variant, color) {
  const sel = variant
    ? `${block}[data-variant="${variant}"][data-color="${color}"]`
    : `${block}[data-color="${color}"]`;
  const rule = allRules.find((r) => r.selector === sel);
  return rule ? readDecls(rule.body) : null;
}

/** The block's own default slot values. */
function blockDefaults(block) {
  const rule = allRules.find((r) => r.selector === block);
  return rule ? readDecls(rule.body) : new Map();
}

/**
 * Resolves a value through `var()` chains against a scope, the way the cascade
 * would. Handles the `var(--x, fallback)` form, because the component defaults
 * use it.
 */
function resolveValue(value, scope, seen = new Set()) {
  if (value == null) return null;
  const trimmed = String(value).trim();

  const m = /^var\(\s*(--[a-zA-Z0-9-]+)\s*(?:,\s*([\s\S]+))?\)$/.exec(trimmed);
  if (!m) return trimmed;

  const [, name, fallback] = m;
  if (seen.has(name)) return null; // cycle
  seen.add(name);

  if (scope.has(name)) return resolveValue(scope.get(name), scope, seen);
  if (fallback != null) return resolveValue(fallback, scope, seen);
  return null;
}

/* ------------------------------------------------------------------ *
 * Checks
 * ------------------------------------------------------------------ */

const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'neutral', 'inverse'];

/**
 * Which variants paint an opaque fill, and so have a meaningful ratio between
 * their own foreground and background. `outline` and `link` sit on whatever is
 * behind them, so their text is checked against the page surfaces by the token
 * validator's `role.*.emphasis` rules instead.
 */
const OPAQUE = new Set(['solid', 'soft', null]);

const errors = [];
const checked = [];

function checkComponent(block, variants, slots) {
  for (const [modeName, rootScope] of [['light', LIGHT], ['dark', DARK]]) {
    const defaults = blockDefaults(block);

    for (const variant of variants) {
      for (const role of ROLES) {
        const local = variantDecls(block, variant, role);
        if (!local) {
          errors.push(`[missing] no rule for ${block}${variant ? `[data-variant="${variant}"]` : ''}[data-color="${role}"]`);
          continue;
        }

        // Cascade: root properties, then the block's defaults, then the
        // variant's local assignments — which is the order a browser applies.
        const scope = new Map([...rootScope, ...defaults, ...local]);

        const bg = resolveValue(`var(${slots.bg})`, scope);
        const fg = resolveValue(`var(${slots.fg})`, scope);

        const label = `${block}[${variant ?? '-'}][${role}] ${modeName}`;

        if (!bg) errors.push(`[unresolved] ${label}: ${slots.bg} resolves to nothing`);
        if (!fg) errors.push(`[unresolved] ${label}: ${slots.fg} resolves to nothing`);
        if (!bg || !fg) continue;

        if (!OPAQUE.has(variant)) continue;
        if (!/^#[0-9a-f]{6}$/i.test(bg) || !/^#[0-9a-f]{6}$/i.test(fg)) {
          errors.push(`[not-a-colour] ${label}: bg=${bg} fg=${fg}`);
          continue;
        }

        const ratio = contrastRatio(fg, bg);
        checked.push({ label, fg, bg, ratio });
        if (ratio < 4.5) {
          errors.push(`[contrast] ${label}: ${fg} on ${bg} is ${ratio.toFixed(2)}:1, needs 4.5:1`);
        }
      }
    }
  }
}

checkComponent('.df-button', ['solid', 'soft', 'outline', 'link'], {
  bg: '--df-button-bg',
  fg: '--df-button-fg',
});

checkComponent('.df-badge', ['solid', 'soft', 'outline'], {
  bg: '--df-badge-bg',
  fg: '--df-badge-fg',
});

// Chip and alert have no variant axis; `null` means "the colour selector alone".
checkComponent('.df-chip', [null], {
  bg: '--df-chip-bg',
  fg: '--df-chip-fg',
});

checkComponent('.df-progress', [null], {
  bg: '--df-progress-bar-bg',
  fg: '--df-progress-bar-fg',
});

checkComponent('.df-list-item', [null], {
  bg: '--df-list-item-bg',
  fg: '--df-list-item-fg',
});

checkComponent('.df-alert', [null], {
  bg: '--df-alert-bg',
  fg: '--df-alert-fg',
});

/* --- form controls must agree with each other ------------------------- *
 *
 * A combobox and a text input sit side by side in the same form. Nothing about
 * the box should say they came from different places — and because each owns
 * its own token group, nothing stops them drifting apart either. They had:
 * the combobox on half the vertical padding and twice the corner radius, so
 * two controls in one row were different heights with different corners.
 *
 * Each pair below must resolve to the same value in BOTH modes. Deliberate
 * divergence is fine — delete the pair and say why.
 */

const CONTROL_PARITY = [
  ['padding-block', '--df-input-padding-block', '--df-combobox-padding-block'],
  ['padding-inline', '--df-input-padding-inline', '--df-combobox-padding-inline'],
  ['radius', '--df-input-radius', '--df-combobox-radius'],
  ['border-width', '--df-input-border-width', '--df-combobox-border-width'],
  ['background', '--df-input-bg', '--df-combobox-bg'],
  ['border colour', '--df-input-border-color', '--df-combobox-border-color'],
  ['focus border', '--df-input-focus-border-color', '--df-combobox-focus-border-color'],
  ['invalid border', '--df-input-invalid-border-color', '--df-combobox-invalid-border-color'],
  ['valid border', '--df-input-valid-border-color', '--df-combobox-valid-border-color'],
];

for (const [what, a, b] of CONTROL_PARITY) {
  for (const [mode, scope] of [['light', LIGHT], ['dark', DARK]]) {
    const left = resolveValue(`var(${a})`, scope);
    const right = resolveValue(`var(${b})`, scope);
    if (left !== right) {
      errors.push(
        `[parity] ${what} differs between the input and the combobox in ${mode}: `
        + `${a} is ${left}, ${b} is ${right} — two controls in one form should not `
        + 'be different shapes',
      );
    }
  }
}

/* --- the UA `<dialog>` box must be answered whole --------------------- */

/**
 * Every property Chrome's UA stylesheet sets on a `<dialog>`.
 *
 * An author rule beats a UA rule whatever its specificity — but only for the
 * properties it declares. Anything the UA sets and `.df-overlay` leaves alone
 * is inherited silently, and `<dialog>`'s UA block is unusually opinionated:
 * it is a sizing and positioning rule, not just a cosmetic one.
 *
 * This check exists because the same cause produced three bugs that looked
 * unrelated and were each fixed on its own: a stray 2px border, a ring of
 * `1em` padding, and then `width`/`height: fit-content` with `margin: auto`,
 * which left every offcanvas content-sized and centred instead of filling its
 * edge — a drawer rendering as a modal that slid in from the side.
 *
 * Listing the properties turns "did we remember this one" into a build error.
 * `display` is absent on purpose: the base rule sets it, and the separate
 * `dialog.df-overlay:not([open])` rule is what answers the UA's hiding rule.
 */
const UA_DIALOG_PROPS = [
  ['width', 'UA: width: fit-content'],
  ['height', 'UA: height: fit-content'],
  ['max-width', 'UA: dialog:modal max-width: calc(100% - 6px - 2em)'],
  ['max-height', 'UA: dialog:modal max-height: calc(100% - 6px - 2em)'],
  ['margin', 'UA: margin: auto — centres an over-constrained box'],
  ['padding', 'UA: padding: 1em'],
  ['border', 'UA: border: solid'],
  ['inset', 'UA: inset-inline: 0 and dialog:modal inset-block: 0'],
  ['overflow', 'UA: dialog:modal overflow: auto'],
];

{
  const base = allRules.find((r) => r.selector.split(',').some((s2) => s2.trim() === '.df-overlay'));
  if (!base) {
    errors.push('[dialog] no `.df-overlay` rule in the bundle — the panel has no base styles');
  } else {
    const declared = new Set(
      [...base.body.matchAll(/(^|[;{])\s*([a-z-]+)\s*:/g)].map((m) => m[2].toLowerCase()),
    );
    for (const [prop, why] of UA_DIALOG_PROPS) {
      if (declared.has(prop)) continue;
      errors.push(
        `[dialog] .df-overlay does not declare \`${prop}\` (${why}) — the UA value `
        + 'applies instead, and nothing in the build will say so',
      );
    }
  }
}

/* --- which axes each placement fills ---------------------------------- */

/**
 * The overlay geometry contract, as a table.
 *
 * A box FILLS an axis when both of that axis's insets are pinned and its size
 * on that axis is `auto` — then the browser zeroes any `auto` margins and
 * solves for the size. It CENTRES on that axis when the size is definite
 * instead, because that over-constrains the box and the leftover space goes to
 * the margins.
 *
 * One property decides which, and getting it wrong is invisible in every other
 * check: the stylesheet is valid, every token resolves, no class is undefined.
 * It has now gone wrong three times on this one component —
 *
 * - a drawer pinned one axis and left the other to the UA's `fit-content`
 *   plus `margin: auto`, so every offcanvas came out centred and content-sized;
 * - resetting the UA box replaced that `fit-content` with `auto`, and the
 *   centred dialog — which had been relying on the UA value — started filling
 *   the viewport height;
 * - and `top`/`bottom` needed the opposite fix from `start`/`end`.
 *
 * Each looked like a different bug. They are one question asked four times, so
 * the answer is written down once here.
 */
const FILLS = {
  center: { inline: false, block: false },
  start: { inline: false, block: true },
  end: { inline: false, block: true },
  top: { inline: true, block: false },
  bottom: { inline: true, block: false },
  fill: { inline: true, block: true },
};

/** Expands the `inset*` shorthands into the four physical-ish longhands. */
function applyInsets(into, prop, value) {
  const parts = value.trim().split(/\s+/);
  const set = (key, v) => { into[key] = v; };
  if (prop === 'inset') {
    const [a, b = a, c = a, d = b] = parts;
    set('block-start', a); set('inline-end', b); set('block-end', c); set('inline-start', d);
  } else if (prop === 'inset-block' || prop === 'inset-inline') {
    const axis = prop.slice(6);
    const [a, b = a] = parts;
    set(`${axis}-start`, a); set(`${axis}-end`, b);
  } else if (/^inset-(block|inline)-(start|end)$/.test(prop)) {
    set(prop.slice(6), parts[0]);
  }
}

{
  const applies = (selector, placement) => selector.split(',').some((one) => {
    const trimmed = one.trim();
    if (trimmed.includes(':') || trimmed.startsWith('dialog')) return false;
    return trimmed === '.df-overlay'
      || trimmed === `.df-overlay[data-placement="${placement}"]`;
  });

  for (const [placement, expected] of Object.entries(FILLS)) {
    const insets = {};
    const size = {};

    for (const rule of allRules) {
      if (!applies(rule.selector, placement)) continue;
      for (const m of rule.body.matchAll(/(^|[;{])\s*([a-z-]+)\s*:\s*([^;}]+)/g)) {
        const prop = m[2].toLowerCase();
        const value = m[3].trim();
        if (prop.startsWith('inset')) applyInsets(insets, prop, value);
        if (prop === 'width') size.inline = value;
        if (prop === 'height') size.block = value;
      }
    }

    for (const axis of ['inline', 'block']) {
      const pinned = insets[`${axis}-start`] !== undefined
        && insets[`${axis}-start`] !== 'auto'
        && insets[`${axis}-end`] !== undefined
        && insets[`${axis}-end`] !== 'auto';
      const fills = pinned && size[axis] === 'auto';

      if (fills === expected[axis]) continue;
      errors.push(
        `[geometry] placement "${placement}" ${fills ? 'FILLS' : 'does not fill'} the ${axis} `
        + `axis and should ${expected[axis] ? '' : 'not '}— both insets `
        + `${pinned ? 'are' : 'are not'} pinned and ${axis === 'inline' ? 'width' : 'height'} `
        + `is \`${size[axis] ?? '(undeclared)'}\`. A pinned axis with an \`auto\` size fills; `
        + 'a definite size centres.',
      );
    }
  }
}

/* --- the dark block must actually change something -------------------- */

const darkOnly = modeDecls('dark');
if (darkOnly.size === 0) {
  errors.push(
    `[dark] no "${MODE_SELECTORS.get('dark') ?? '(no selector in manifest)'}" block found `
    + '— dark mode would silently render light',
  );
} else {
  const sample = '--df-bg-canvas';
  if (resolveValue(`var(${sample})`, LIGHT) === resolveValue(`var(${sample})`, DARK)) {
    errors.push(`[dark] ${sample} resolves identically in both modes`);
  }
}

/* ------------------------------------------------------------------ */

const worst = [...checked].sort((a, b) => a.ratio - b.ratio).slice(0, 3);

process.stdout.write(`css-verify: resolved ${allRules.length} rules, ${LIGHT.size} root properties\n`);
process.stdout.write(`css-verify: checked ${checked.length} opaque fill(s) for contrast\n`);
process.stdout.write(`css-verify: ${CONTROL_PARITY.length} form-control properties agree across input and combobox\n`);
process.stdout.write(`css-verify: ${UA_DIALOG_PROPS.length} UA \`<dialog>\` properties answered by .df-overlay\n`);
process.stdout.write(`css-verify: ${Object.keys(FILLS).length} overlay placements fill the axes they should\n`);
if (worst.length) {
  process.stdout.write('css-verify: tightest pairs —\n');
  for (const w of worst) {
    process.stdout.write(`             ${w.ratio.toFixed(2)}:1  ${w.label}  ${w.fg} on ${w.bg}\n`);
  }
}

if (errors.length) {
  process.stderr.write('\n');
  for (const e of errors) process.stderr.write(`ERROR ${e}\n`);
  process.stderr.write(`\ncss-verify: ${errors.length} problem(s)\n`);
  process.exit(1);
}
process.stdout.write('css-verify: every variant resolves and every opaque fill clears 4.5:1\n');
