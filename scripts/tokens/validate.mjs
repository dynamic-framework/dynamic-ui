/**
 * validate.mjs — enforces the token contract. Exits non-zero on any error.
 *
 * These are the invariants that make the system exportable and safe to
 * rebrand. Most of them exist because 2.x violated them somewhere and the
 * violation only surfaced downstream:
 *
 *   A. Every token is a literal or an alias, never an expression.
 *      -> the rule that makes the Figma export mechanical.
 *   B. Only the primitive layer holds literals.
 *      -> the rule that makes a rebrand a one-file change.
 *   C. References point down the layers, never up or sideways.
 *      -> stops a component quietly depending on a raw palette step.
 *   D. Token names are unique across collections.
 *      -> two collections declaring `radius.none` would emit one custom
 *         property twice, the second aliasing itself.
 *   E. Every mode of a collection declares exactly the same token set.
 *      -> a token missing from `dark` silently renders the light value on a
 *         dark ground.
 *   F. Every foreground/background pair clears its contrast threshold, in
 *      every mode.
 *      -> 2.x had a gray-100 placeholder on a white field (1.3:1) and reached
 *         its warning-button contrast by hand-patching one variant.
 *
 * Usage: node scripts/tokens/validate.mjs
 */

import { loadModel, resolveLiteral, modeIndexFor } from './lib/model.mjs';
import { contrastRatio } from './lib/color.mjs';

const VALID_TYPES = new Set([
  'color', 'dimension', 'number', 'fontFamily', 'fontWeight',
  'duration', 'cubicBezier', 'shadow', 'strokeStyle', 'typography', 'transition', 'gradient', 'border',
]);

/** Which layers a given layer may reference. Enforces rule C. */
const MAY_REFERENCE = {
  primitive: new Set([]),
  semantic: new Set(['primitive']),
  component: new Set(['semantic', 'primitive']),
};

/**
 * DTCG composite types. A composite is a COMPOSITION of values rather than a
 * value, so rule B applies to it member by member: its geometry may be literal
 * (a 4px offset is not a design token anyone rebrands), but every colour member
 * must be an alias, because colour is exactly what a rebrand changes.
 */
const COMPOSITE_TYPES = new Set(['shadow', 'typography', 'border', 'transition', 'gradient']);

/** Composite members that carry a colour and therefore must be aliases. */
const COLOR_MEMBERS = new Set(['color', 'stops']);

/**
 * Contrast requirements, as [foreground token id, background token id, minimum].
 *
 * 4.5 is the WCAG AA threshold for normal-size text. 3.0 applies to large text
 * and to non-text boundaries such as a border or a focus ring.
 */
const CONTRAST_RULES = [
  // Body text on every ground it can sit on.
  ['fg.default', 'bg.canvas', 4.5],
  ['fg.default', 'bg.surface', 4.5],
  ['fg.default', 'bg.raised', 4.5],
  ['fg.muted', 'bg.canvas', 4.5],
  ['fg.muted', 'bg.surface', 4.5],
  ['fg.subtle', 'bg.surface', 3.0],
  ['fg.link', 'bg.canvas', 4.5],
  ['fg.link', 'bg.surface', 4.5],
  ['fg.link-hover', 'bg.surface', 4.5],
  ['fg.inverse', 'bg.inverse', 4.5],

  // Structural boundaries.
  ['border.strong', 'bg.surface', 3.0],
  ['focus.ring', 'bg.surface', 3.0],

  // Form fields.
  ['input.placeholder-color', 'input.bg', 4.5],
  ['input.fg', 'input.bg', 4.5],
  ['input.border-color', 'input.bg', 1.3],
  ['input.help.color', 'bg.surface', 4.5],
];

// The same pair, for all eight roles.
const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'neutral', 'inverse'];
for (const r of ROLES) {
  CONTRAST_RULES.push([`role.${r}.on-base`, `role.${r}.base`, 4.5]);
  CONTRAST_RULES.push([`role.${r}.on-base`, `role.${r}.base-hover`, 4.5]);
  CONTRAST_RULES.push([`role.${r}.on-subtle`, `role.${r}.subtle`, 4.5]);
  CONTRAST_RULES.push([`role.${r}.emphasis`, 'bg.canvas', 4.5]);
  CONTRAST_RULES.push([`role.${r}.emphasis`, 'bg.surface', 4.5]);
}

/* ------------------------------------------------------------------ */

const errors = [];
const warnings = [];
const err = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

const model = loadModel();

/**
 * Applies rule B member-wise to a composite token: every colour member must be
 * an alias, and that alias must point down the layers like any other.
 */
function checkComposite(token, col, index, allowed) {
  const layers = Array.isArray(token.value) ? token.value : [token.value];

  layers.forEach((layer, i) => {
    const at = layers.length > 1 ? `${token.id}[${i}]` : token.id;

    for (const [member, value] of Object.entries(layer)) {
      if (!COLOR_MEMBERS.has(member)) continue;

      const m = /^\{([^}]+)\}$/.exec(String(value).trim());
      if (!m) {
        err(`[literal] ${at}.${member} holds the literal ${JSON.stringify(value)}. A composite's colour members must be aliases — see rule B. (${token.source})`);
        continue;
      }

      const target = index.get(m[1]);
      if (!target) {
        err(`[dangling] ${at}.${member} -> {${m[1]}} does not resolve (${token.source})`);
      } else if (!allowed.has(target.layer)) {
        err(`[direction] ${at}.${member} (${col.layer}) -> {${m[1]}} (${target.layer}) — see rule C.`);
      }
    }
  });
}

/* --- A / structural: type is known, value is a literal or an alias ---- */

const EXPRESSION_RE = /(^|[^a-z-])(calc|clamp|min|max|var|rgba?|hsla?|color-mix)\s*\(/i;

for (const col of model.collections) {
  for (const mode of col.modes) {
    for (const t of mode.tokens) {
      if (!VALID_TYPES.has(t.type)) {
        err(`[type] ${t.id}: unknown $type "${t.type}" (${t.source})`);
      }
      if (typeof t.value === 'string' && !t.alias && EXPRESSION_RE.test(t.value)) {
        err(`[expression] ${t.id}: value "${t.value}" is an expression. A token must be a literal or an alias — see rule A.`);
      }
    }
  }
}

/* --- D: names unique across collections ------------------------------- */

const owner = new Map();
for (const col of model.collections) {
  for (const mode of col.modes) {
    for (const t of mode.tokens) {
      const prev = owner.get(t.name);
      if (prev && prev.collection !== t.collection) {
        err(`[collision] "${t.name}" is declared in both ${prev.collection} (${prev.source}) and ${t.collection} (${t.source}). One custom property, two definitions — see rule D.`);
      }
      if (!prev) owner.set(t.name, t);
    }
  }
}

/* --- E: mode parity --------------------------------------------------- */

for (const col of model.collections) {
  if (col.modes.length < 2) continue;
  const sets = col.modes.map((m) => new Set(m.tokens.map((t) => t.id)));
  const union = new Set(sets.flatMap((s) => [...s]));
  col.modes.forEach((mode, i) => {
    for (const id of union) {
      if (!sets[i].has(id)) {
        err(`[mode-parity] ${col.name}: "${id}" is missing from mode "${mode.name}" — see rule E.`);
      }
    }
  });
}

/* --- B / C: layer discipline ------------------------------------------ */

for (const col of model.collections) {
  const allowed = MAY_REFERENCE[col.layer];
  if (!allowed) {
    err(`[layer] collection ${col.name} declares unknown layer "${col.layer}"`);
    continue;
  }

  for (const mode of col.modes) {
    const index = modeIndexFor(model, mode.name);

    for (const t of mode.tokens) {
      if (!t.alias) {
        if (col.layer === 'primitive') continue;

        if (COMPOSITE_TYPES.has(t.type)) {
          checkComposite(t, col, index, allowed);
          continue;
        }

        // Rule B: literals are a primitive-layer privilege.
        err(`[literal] ${t.id} in ${col.name} holds the literal ${JSON.stringify(t.value)}. Only the primitive layer may hold literals — see rule B. (${t.source})`);
        continue;
      }

      const target = index.get(t.alias);
      if (!target) {
        err(`[dangling] ${t.id} -> {${t.alias}} does not resolve in mode "${mode.name}" (${t.source})`);
        continue;
      }
      if (target.id === t.id) {
        err(`[self-alias] ${t.id} aliases itself. Usually a name collision — see rule D.`);
        continue;
      }
      if (!allowed.has(target.layer)) {
        err(`[direction] ${t.id} (${col.layer}) -> {${t.alias}} (${target.layer}). A ${col.layer} token may only reference ${[...allowed].join(' or ') || 'nothing'} — see rule C.`);
      }

      try {
        if (resolveLiteral(t, index) === null) {
          err(`[dangling] ${t.id} -> {${t.alias}} resolves to nothing in mode "${mode.name}"`);
        }
      } catch (e) {
        err(`[cycle] ${e.message}`);
      }
    }
  }
}

/* --- F: contrast ------------------------------------------------------- */

const colorModeNames = model.collections
  .filter((c) => c.modes.length > 1)
  .flatMap((c) => c.modes.map((m) => m.name));
const modesToCheck = [...new Set(colorModeNames)];

for (const modeName of modesToCheck) {
  const index = modeIndexFor(model, modeName);

  for (const [fgId, bgId, min] of CONTRAST_RULES) {
    const fgTok = index.get(fgId);
    const bgTok = index.get(bgId);
    if (!fgTok || !bgTok) {
      warn(`[contrast] mode "${modeName}": skipped ${fgId} on ${bgId} — ${!fgTok ? fgId : bgId} not found`);
      continue;
    }

    let fg;
    let bg;
    try {
      fg = resolveLiteral(fgTok, index);
      bg = resolveLiteral(bgTok, index);
    } catch (e) {
      err(`[contrast] ${e.message}`);
      continue;
    }
    if (typeof fg !== 'string' || typeof bg !== 'string') continue;

    // A translucent colour has no single contrast ratio; it depends on what is
    // behind it. Reported rather than guessed at.
    if (fg.length > 7 || bg.length > 7) {
      warn(`[contrast] mode "${modeName}": ${fgId} on ${bgId} involves a translucent colour; not checked`);
      continue;
    }

    const ratio = contrastRatio(fg, bg);
    if (ratio < min) {
      err(`[contrast] mode "${modeName}": ${fgId} (${fg}) on ${bgId} (${bg}) is ${ratio.toFixed(2)}:1, needs ${min}:1 — see rule F.`);
    }
  }
}

/* ------------------------------------------------------------------ */

const counts = model.collections.map(
  (c) => `${c.name} ${c.modes.reduce((n, m) => n + m.tokens.length, 0)}`,
).join(', ');

for (const w of warnings) process.stdout.write(`warn  ${w}\n`);
for (const e of errors) process.stderr.write(`ERROR ${e}\n`);

process.stdout.write(`\ntokens: validated ${counts}\n`);
process.stdout.write(`tokens: ${modesToCheck.length} colour mode(s), ${CONTRAST_RULES.length} contrast rules\n`);

if (errors.length) {
  process.stderr.write(`\ntokens: ${errors.length} error(s), ${warnings.length} warning(s)\n`);
  process.exit(1);
}
process.stdout.write(`tokens: OK — 0 errors, ${warnings.length} warning(s)\n`);
