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
