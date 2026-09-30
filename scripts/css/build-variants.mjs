/**
 * build-variants.mjs — generates the variant x colour matrices.
 *
 * ## What this replaces
 *
 * 2.x emitted roughly 350 custom properties into `:root` for the button alone
 * (`--bs-btn-soft-warning-hover-bg` and friends), via four Sass mixins called
 * in a loop over the theme colours. Every one of them was a global, shipped to
 * every page, whether or not a soft warning button existed on it.
 *
 * None of those are design decisions. They are derivations of the role
 * semantics: "a soft primary button" means "the primary role's subtle fill with
 * its on-subtle text". So they belong in the stylesheet as local custom
 * properties, scoped to the selector that needs them, and they belong in a
 * generator rather than in hand-written CSS — because the one thing that must
 * never drift is the mapping from variant to role sub-token.
 *
 * ## How it works
 *
 * The role list is read from the token model, not hardcoded: adding a ninth
 * role to `semantic/color.light.json` extends every matrix automatically. Each
 * variant is a map from component slot to role sub-token name, or to a literal
 * for the cases where the answer is "nothing" (`transparent`).
 *
 * Usage: node scripts/css/build-variants.mjs
 */

import { loadModel } from '../tokens/lib/model.mjs';

/** `transparent` is not a role sub-token; mark it so the emitter passes it through. */
const LITERAL = (value) => ({ literal: value });

/**
 * Component matrices.
 *
 * Slot names are the local custom properties the hand-written component CSS
 * reads. If a slot is missing from a variant, the component's own fallback
 * applies — that is why `.df-button` declares defaults for all of them.
 */
const SPECS = {
  button: {
    selector: '.df-button',
    prefix: 'df-button',
    // `data-variant` x `data-color`.
    axis: 'variant',
    variants: {
      solid: {
        bg: 'base',
        'bg-hover': 'base-hover',
        'bg-active': 'base-active',
        fg: 'on-base',
        'fg-hover': 'on-base',
        'border-color': LITERAL('transparent'),
      },
      soft: {
        bg: 'subtle',
        'bg-hover': 'subtle-hover',
        'bg-active': 'subtle-active',
        fg: 'on-subtle',
        'fg-hover': 'on-subtle',
        'border-color': LITERAL('transparent'),
      },
      outline: {
        bg: LITERAL('transparent'),
        'bg-hover': 'subtle',
        'bg-active': 'subtle-hover',
        fg: 'emphasis',
        'fg-hover': 'on-subtle',
        'border-color': 'border',
        'border-color-hover': 'base',
      },
      link: {
        bg: LITERAL('transparent'),
        'bg-hover': LITERAL('transparent'),
        'bg-active': 'subtle',
        fg: 'emphasis',
        'fg-hover': 'base-hover',
        'border-color': LITERAL('transparent'),
        'decoration-hover': LITERAL('underline'),
      },
    },
  },

  badge: {
    selector: '.df-badge',
    prefix: 'df-badge',
    axis: 'variant',
    variants: {
      solid: {
        bg: 'base',
        fg: 'on-base',
        'border-color': LITERAL('transparent'),
      },
      soft: {
        bg: 'subtle',
        fg: 'on-subtle',
        'border-color': LITERAL('transparent'),
      },
      outline: {
        bg: LITERAL('transparent'),
        fg: 'emphasis',
        'border-color': 'border',
      },
    },
  },

  icon: {
    selector: '.df-icon',
    prefix: 'df-icon',
    axis: null,
    variants: {
      // Only the foreground; `[data-circle]` derives its ground from it with
      // color-mix(), so there is no second rule per colour.
      _: { color: 'emphasis' },
    },
  },

  chip: {
    selector: '.df-chip',
    prefix: 'df-chip',
    axis: null,
    variants: {
      _: {
        bg: 'subtle',
        fg: 'on-subtle',
        'border-color': 'border',
      },
    },
  },

  progress: {
    selector: '.df-progress',
    prefix: 'df-progress',
    axis: null,
    variants: {
      _: { 'bar-bg': 'base', 'bar-fg': 'on-base' },
    },
  },

  'list-item': {
    selector: '.df-list-item',
    prefix: 'df-list',
    axis: null,
    variants: {
      _: {
        'item-bg': 'subtle',
        'item-fg': 'on-subtle',
      },
    },
  },

  'timeline-item': {
    selector: '.df-timeline-item',
    prefix: 'df-timeline',
    axis: null,
    variants: {
      _: { 'marker-fg': 'emphasis', 'marker-border-color': 'border' },
    },
  },

  toast: {
    selector: '.df-toast',
    prefix: 'df-toast',
    axis: null,
    variants: {
      _: { accent: 'emphasis' },
    },
  },

  alert: {
    selector: '.df-alert',
    prefix: 'df-alert',
    // No variant axis — one treatment, eight colours.
    axis: null,
    variants: {
      _: {
        bg: 'subtle',
        fg: 'on-subtle',
        'border-color': 'border',
        accent: 'emphasis',
      },
    },
  },
};

/* ------------------------------------------------------------------ */

const model = loadModel();

/**
 * Role names, discovered from the semantic layer rather than hardcoded.
 * Sorted so the output is deterministic and diffs stay readable.
 */
function discoverRoles() {
  const roles = new Set();
  for (const col of model.collections) {
    if (col.layer !== 'semantic') continue;
    for (const mode of col.modes) {
      for (const t of mode.tokens) {
        if (t.path[0] === 'role' && t.path.length === 3) roles.add(t.path[1]);
      }
    }
  }
  return [...roles].sort();
}

/** Sub-tokens each role actually declares, so a typo in SPECS fails loudly. */
function discoverSubTokens(role) {
  const subs = new Set();
  for (const col of model.collections) {
    if (col.layer !== 'semantic') continue;
    for (const mode of col.modes) {
      for (const t of mode.tokens) {
        if (t.path[0] === 'role' && t.path[1] === role) subs.add(t.path[2]);
      }
    }
  }
  return subs;
}

const roles = discoverRoles();
if (!roles.length) throw new Error('build-variants: no role.* tokens found in the semantic layer');

const errors = [];

function emitBlock({ selector, prefix, axis }, variantName, role, slots) {
  const available = discoverSubTokens(role);
  const decls = [];

  for (const [slot, source] of Object.entries(slots)) {
    if (source && typeof source === 'object' && 'literal' in source) {
      decls.push(`    --${prefix}-${slot}: ${source.literal};`);
      continue;
    }
    if (!available.has(source)) {
      errors.push(`${selector}[${variantName}][${role}] slot "${slot}" wants role.${role}.${source}, which does not exist`);
      continue;
    }
    decls.push(`    --${prefix}-${slot}: var(--df-role-${role}-${source});`);
  }

  const sel = axis
    ? `${selector}[data-${axis}="${variantName}"][data-color="${role}"]`
    : `${selector}[data-color="${role}"]`;

  return `  ${sel} {\n${decls.join('\n')}\n  }`;
}

const out = [
  '/*!',
  ' * Variant x colour matrices — GENERATED by scripts/css/build-variants.mjs.',
  ' * Do not edit. The mapping from variant to role sub-token lives in that file.',
  ' */',
  '@layer df.components {',
];

let blocks = 0;
for (const [name, spec] of Object.entries(SPECS)) {
  out.push('');
  out.push(`  /* ${name}: ${Object.keys(spec.variants).length} variant(s) x ${roles.length} role(s) */`);
  for (const [variantName, slots] of Object.entries(spec.variants)) {
    for (const role of roles) {
      out.push(emitBlock(spec, variantName, role, slots));
      blocks += 1;
    }
  }
}
out.push('}');
out.push('');

if (errors.length) {
  for (const e of errors) process.stderr.write(`ERROR ${e}\n`);
  process.stderr.write(`\nbuild-variants: ${errors.length} bad slot mapping(s)\n`);
  process.exit(1);
}

export const css = out.join('\n');
export const stats = { blocks, roles: roles.length, components: Object.keys(SPECS).length };

// Running the file directly prints the CSS, which is handy for inspection;
// the build imports it instead.
if (process.argv[1] && process.argv[1].endsWith('build-variants.mjs')) {
  process.stdout.write(css);
  process.stderr.write(`\nbuild-variants: ${blocks} blocks, ${roles.length} roles, ${stats.components} components\n`);
}
