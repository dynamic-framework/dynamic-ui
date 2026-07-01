/**
 * generate-token-overrides.mjs  (Dynamic UI 2.6)
 *
 * Generates registry/token-overrides.json — an ADDITIVE, machine-readable
 * descriptor of Dynamic UI's CSS custom-property OVERRIDE SURFACE, aimed at
 * AI/agents that need to recreate a client's brand by overriding custom
 * properties.
 *
 * It does NOT change how Dynamic ships styles: the compiled CSS is untouched.
 * This is a new build artifact only (cp'd to the CDN alongside api.json).
 *
 * SOURCE OF TRUTH: the SCSS source, not the shipped CSS. Two dart-sass
 * compilations of dedicated harnesses (NOT the global Ruby `sass`):
 *   1. defs  (scripts/tokens/_defs-harness.scss)  — abstracts + root only.
 *      Defines the custom properties. No component layer ⇒ no carousel typo.
 *      Source of token VALUES and override-behavior CLASSIFICATION.
 *   2. full  (scripts/tokens/_full-harness.scss)  — full style chain.
 *      Used ONLY to extract `var(--bs-*)` references the component layer
 *      CONSUMES, for slot detection: (R − D − denylist).
 *
 * NOT DTCG. Deliberately avoids the names claimed by the open DTCG PRs
 * (#1104/#1107): generate-tokens.mjs / registry/tokens.json / etc.
 *
 * Usage: node scripts/generate-token-overrides.mjs
 */

import {
  readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync,
} from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT_DIR = resolve(ROOT, 'registry');
const OUTPUT_PATH = resolve(OUTPUT_DIR, 'token-overrides.json');

const THEME_ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const SEMANTIC_SUFFIXES = ['bg-subtle', 'text-emphasis', 'border-subtle'];

// Derived from CDN_BASE_URL like generate-schema.mjs / api.json, so the doc's
// `$schema` stays aligned with the schema generator's `$id` (incl. staging/custom CDNs).
const CDN_BASE = (process.env.CDN_BASE_URL ?? 'https://cdn.dynamicframework.dev/assets').replace(/\/$/, '');
const SCHEMA_URL = `${CDN_BASE}/schema/token-overrides.v1.json`;

// ---------------------------------------------------------------------------
// SCSS compilation (dart-sass from node_modules/.bin, never the PATH `sass`)
// ---------------------------------------------------------------------------
function compileHarness(relPath) {
  // Run dart-sass's JS entry with the current Node binary. This is the
  // node_modules dart-sass (the `.bin/sass` shim points here), NOT the PATH
  // `sass` (Ruby gem). Invoking via `node sass.js` is cross-platform — it
  // avoids the `.bin/sass` vs `sass.cmd` split and the shell needed to run a
  // .cmd from execFileSync on Windows.
  const sassEntry = resolve(ROOT, 'node_modules/sass/sass.js');
  if (!existsSync(sassEntry)) {
    process.stderr.write(`Error: dart-sass not found at ${sassEntry}. Run npm ci first.\n`);
    process.exit(1);
  }
  return execFileSync(
    process.execPath,
    [sassEntry, '--no-source-map', '--load-path=./', '--load-path=src/style/', relPath],
    { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
}

// ---------------------------------------------------------------------------
// Parsing helpers
// ---------------------------------------------------------------------------
const DECL_RE = /(--bs-[a-z0-9-]+)\s*:\s*([^;]+);/gi;
const VARREF_RE = /var\((--bs-[a-z0-9-]+)/gi;

/** Splits compiled CSS into the base :root block and the trailing @media tail. */
function splitBaseAndMedia(css) {
  const i = css.indexOf('@media');
  return i === -1 ? { base: css, media: '' } : { base: css.slice(0, i), media: css.slice(i) };
}

/** name -> first value, preserving the order names first appear. */
function parseDecls(css) {
  const map = new Map();
  const order = [];
  let m;
  DECL_RE.lastIndex = 0;
  while ((m = DECL_RE.exec(css)) !== null) {
    const [, name, rawValue] = m;
    const value = rawValue.trim();
    if (!map.has(name)) {
      map.set(name, value);
      order.push(name);
    }
  }
  return { map, order };
}

function collectVarRefs(css) {
  const set = new Set();
  let m;
  VARREF_RE.lastIndex = 0;
  while ((m = VARREF_RE.exec(css)) !== null) set.add(m[1]);
  return set;
}

/** Follows `var(--bs-x)` aliases through the defs map until a literal value. */
function resolveLiteral(name, defs, seen = new Set()) {
  if (seen.has(name)) return null;
  seen.add(name);
  const v = defs.get(name);
  if (v == null) return null;
  const ref = v.match(/^var\((--bs-[a-z0-9-]+)\)$/);
  if (ref) return resolveLiteral(ref[1], defs, seen);
  return v;
}

const isVarAlias = (v) => /^var\(--bs-[a-z0-9-]+\)$/.test(v);
const aliasTarget = (v) => (v.match(/^var\((--bs-[a-z0-9-]+)\)$/) || [])[1] || null;
const isDataUri = (v) => /^url\("data:/.test(v);

/** A reference is malformed (typo, not a slot) if it double-prefixes or leads with a dash. */
function isMalformedRef(name) {
  const rest = name.slice('--bs-'.length);
  return rest.startsWith('-') || rest.startsWith('bs-');
}

// ---------------------------------------------------------------------------
// Source scan (for slot referencedBy) — read the whole src/style tree once,
// including root-level files (e.g. _shame.scss, imported by dynamic-ui.scss)
// and every subdir (abstracts/root/base/components/helpers), so no referencing
// file — nor the documented typos under abstracts/variables — is missed.
// ---------------------------------------------------------------------------
function readSourceFiles() {
  const styleRoot = resolve(ROOT, 'src/style');
  const files = [];
  const walk = (dir) => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir)) {
      const p = join(dir, entry);
      if (statSync(p).isDirectory()) walk(p);
      // Store the path relative to src/style/ (not just the basename): duplicate
      // basenames across dirs (e.g. abstracts/variables/_breadcrumb.scss vs
      // base/_breadcrumb.scss) would otherwise collapse into one ambiguous entry.
      // Normalize to forward slashes so referencedBy is stable across
      // Windows/macOS/Linux (and so the `_([^/]+)$` strip below still matches).
      else if (entry.endsWith('.scss')) files.push({ rel: relative(styleRoot, p).replace(/\\/g, '/'), content: readFileSync(p, 'utf8') });
    }
  };
  walk(styleRoot);
  return files;
}

// ===========================================================================
// MAIN
// ===========================================================================
process.stdout.write('Generating registry/token-overrides.json...\n');

if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

const { version } = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
const generatedAt = process.env.RELEASE_PUBLISHED_AT ?? new Date().toISOString();

const defsCss = compileHarness('scripts/tokens/_defs-harness.scss');
const fullCss = compileHarness('scripts/tokens/_full-harness.scss');

const { base: defsBase, media: defsMedia } = splitBaseAndMedia(defsCss);
const { map: defs, order: defsOrder } = parseDecls(defsBase);
const mediaRedefs = new Set([...parseDecls(defsMedia).map.keys()]);

// --- classify a single ramp step / base value ------------------------------
// Order matters: a `-rgb` base (no numbered step) is ALWAYS override-base — it
// is the canonical thing you override to rebrand — even when its default value
// is itself a hue alias (e.g. --bs-primary-rgb: var(--bs-blue-rgb)).
function classifyRgb(name, value) {
  if (isDataUri(value)) return 'not-overridable';
  if (/-rgb$/.test(name) && !/-\d+-rgb$/.test(name)) return 'override-base';
  if (isVarAlias(value)) return 'follows';
  return 'override-leaf';
}

// ---------------------------------------------------------------------------
// COLOR ramps
// ---------------------------------------------------------------------------
const rampSteps = new Map(); // ramp -> { step -> value }
for (const name of defsOrder) {
  const m = name.match(/^--bs-([a-z]+)-(\d+)-rgb$/);
  if (m) {
    const [, ramp, step] = m;
    if (!rampSteps.has(ramp)) rampSteps.set(ramp, new Map());
    rampSteps.get(ramp).set(Number(step), defs.get(name));
  }
}

const colorRamps = {};
const hueGroupsAcc = {}; // hue -> Set(ramps)

for (const [ramp, steps] of [...rampSteps.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const baseVar = `--bs-${ramp}-rgb`;
  const baseValueRaw = defs.get(baseVar);
  const baseResolved = resolveLiteral(baseVar, defs);
  const baseAlias = baseValueRaw && isVarAlias(baseValueRaw) ? aliasTarget(baseValueRaw) : null;

  // hue this ramp aliases (family hue only, e.g. blue/green; gray-NNN excluded)
  let hue = null;
  if (baseAlias) {
    const hm = baseAlias.match(/^--bs-([a-z]+)-rgb$/);
    if (hm) { [, hue] = hm; }
  }

  let kind;
  if (ramp === 'gray') kind = 'neutral';
  else if (THEME_ROLES.includes(ramp)) kind = 'role';
  else kind = 'family';

  // L2 (role) only for semantic role ramps; raw family/neutral bases are L1 (palette).
  const baseLayer = kind === 'role' ? 'role' : 'palette';

  const stepNodes = {};
  const leafVars = [];
  for (const step of [...steps.keys()].sort((a, b) => a - b)) {
    const cssVar = `--bs-${ramp}-${step}-rgb`;
    const value = steps.get(step);
    const cls = classifyRgb(cssVar, value);
    const followsAlias = cls === 'follows' ? aliasTarget(value) : null;
    stepNodes[String(step)] = {
      cssVar,
      // `value` is always a valid CSS value (never a sentinel): the literal
      // triplet for leaves, the raw var(--bs-...) for `follows`. Aliasing is
      // surfaced via `aliasOf`, as on the base node — note the base RESOLVES
      // its alias to a literal triplet (effective color), while follows steps
      // keep the raw var(). In both cases `aliasOf` is the machine-readable target.
      value,
      class: cls,
      ...(followsAlias ? { aliasOf: followsAlias } : {}),
      // Ramp steps are the raw L1 scale (palette) by design — even for role
      // ramps like primary, whose L2 entry point is the `base` node (role).
      layer: 'palette',
    };
    if (cls === 'override-leaf') leafVars.push(cssVar);
  }

  const baseClass = baseValueRaw ? classifyRgb(baseVar, baseValueRaw) : 'override-base';
  const minimalRebrandSet = [baseVar, ...leafVars];

  const semanticFollowers = SEMANTIC_SUFFIXES
    .map((s) => `--bs-${ramp}-${s}`)
    .filter((v) => defs.has(v));

  const node = {
    kind,
    layer: kind === 'role' ? 'role' : 'palette',
    base: {
      cssVar: baseVar,
      value: baseResolved ?? baseValueRaw ?? null,
      class: baseClass,
      layer: baseLayer,
      ...(baseAlias ? { aliasOf: baseAlias } : {}),
    },
    steps: stepNodes,
    minimalRebrandSet,
    semanticFollowers,
  };
  if (hue) node.hue = hue;
  if (kind === 'neutral') {
    // gray is authored literally in $grays (not tint/shade-generated), so the
    // mix metadata does not apply — emit hand-authored provenance instead.
    node.method = 'hand-authored';
    node.regenerable = false;
  } else {
    // role/family steps are tint-color/shade-color mixes at these weights.
    node.rampMethod = 'bootstrap-mix-srgb';
    node.rampWeights = [95, 90, 80, 60, 40, 20, 0, -20, -40, -60, -80];
  }

  colorRamps[ramp] = node;

  if (hue && hue !== ramp) {
    (hueGroupsAcc[hue] ||= new Set()).add(ramp);
    if (rampSteps.has(hue)) hueGroupsAcc[hue].add(hue);
  }
}

const hueGroups = {};
for (const [hue, set] of Object.entries(hueGroupsAcc)) hueGroups[hue] = [...set].sort();

// secondary broken-ramp detection (non-monotonic lightness through the -500 alias)
function rampIsMonotonic(ramp) {
  const steps = rampSteps.get(ramp);
  if (!steps) return true;
  const lum = (str) => {
    const lit = isVarAlias(str) ? resolveLiteral(aliasTarget(str), defs) : str;
    const p = (lit || '').split(',').map((n) => Number(n.trim()));
    return p.length === 3 ? 0.299 * p[0] + 0.587 * p[1] + 0.114 * p[2] : NaN;
  };
  const ordered = [...steps.keys()].sort((a, b) => a - b).map((s) => lum(steps.get(s)));
  let dec = true; let inc = true;
  for (let i = 1; i < ordered.length; i += 1) {
    if (ordered[i] > ordered[i - 1]) dec = false;
    if (ordered[i] < ordered[i - 1]) inc = false;
  }
  return dec || inc;
}

// ---------------------------------------------------------------------------
// NON-COLOR tokens
// ---------------------------------------------------------------------------
const leaf = (cssVar, extra = {}) => (defs.has(cssVar)
  ? { cssVar, value: defs.get(cssVar), class: 'override-leaf', ...extra } : undefined);

// typography
const fwLevels = ['lighter', 'light', 'normal', 'semibold', 'bold', 'bolder'];
const weights = {};
for (const w of fwLevels) { const n = leaf(`--bs-fw-${w}`); if (n) weights[w] = n; }

const lhLevels = ['base', 'sm', 'lg'];
const lineHeight = {};
for (const l of lhLevels) { const n = leaf(`--bs-lh-${l}`); if (n) lineHeight[l] = n; }

const scale = {
  note: 'RFS gotcha: --bs-fs-N -> var(--bs-rfs-fs-N). Levels with hasResponsiveRedef=true have a responsive redefinition (calc(... + ...vw)) inside an @media (min-width: 1200px). Overriding the size means also beating the media-query rule; overriding only the base value is not enough on large viewports. The overridable target is --bs-rfs-fs-N (not --bs-fs-N, which is a follows).',
};
for (const name of defsOrder) {
  const m = name.match(/^--bs-rfs-fs-([0-9a-z]+)$/);
  if (m) {
    scale[`fs-${m[1]}`] = {
      cssVar: name,
      value: defs.get(name),
      class: 'override-leaf',
      hasResponsiveRedef: mediaRedefs.has(name),
    };
  }
}

const typography = {
  fontFamily: leaf('--bs-font-sans-serif', { layer: 'role' }),
  fontMonospace: leaf('--bs-font-monospace'),
  weights,
  lineHeight,
  scale,
};

// spacing
const spacing = { note: '31 literal levels --bs-ref-spacer-0..30. Derived from $spacer at build time; at runtime they are plain literals you can override directly.', levels: {} };
for (const name of defsOrder) {
  const m = name.match(/^--bs-ref-spacer-(\d+)$/);
  if (m) spacing.levels[m[1]] = { cssVar: name, value: defs.get(name), class: 'override-leaf' };
}

// radius (variants, not a derived scale)
const radius = { note: 'Independent literal variants (including "default" = --bs-border-radius, the most used), NOT a derived scale.', variants: {} };
for (const name of defsOrder) {
  const m = name.match(/^--bs-border-radius(-[a-z0-9]+)?$/);
  if (m) {
    const key = m[1] ? m[1].slice(1) : 'default';
    radius.variants[key] = { cssVar: name, value: defs.get(name), class: classifyRgb(name, defs.get(name)) };
  }
}

// shadow (partial coverage — only -lg is a Dynamic override; rest inherits Bootstrap)
const shadow = { coverage: 'partial', note: 'Only --bs-box-shadow-lg is a Dynamic-owned override in this version. The rest inherit Bootstrap defaults.', variants: {} };
for (const name of defsOrder) {
  const m = name.match(/^--bs-box-shadow(-[a-z]+)?$/);
  if (m) {
    const key = m[1] ? m[1].slice(1) : 'default';
    shadow.variants[key] = { cssVar: name, value: defs.get(name), class: 'override-leaf' };
  }
}

// ---------------------------------------------------------------------------
// ICONS (data-URI) — detected by value, classified not-overridable
// ---------------------------------------------------------------------------
const iconVars = defsOrder.filter((n) => isDataUri(defs.get(n)));

// ---------------------------------------------------------------------------
// SLOTS  (R − Dall − denylist)
// ---------------------------------------------------------------------------
const Dall = new Set(parseDecls(fullCss).map.keys());
const R = collectVarRefs(fullCss);
const unfilled = [...R].filter((n) => !Dall.has(n)).sort();

const denylist = unfilled.filter(isMalformedRef);
const slotCandidates = unfilled.filter((n) => !isMalformedRef(n));

const srcFiles = readSourceFiles();
function referencedBy(cssVar) {
  const core = cssVar.slice('--bs-'.length);
  // e.g. "abstracts/variables/_breadcrumb.scss" -> "abstracts/variables/breadcrumb"
  return srcFiles.filter((f) => f.content.includes(core))
    .map((f) => f.rel.replace(/\.scss$/, '').replace(/_([^/]+)$/, '$1'))
    .filter((v, i, a) => a.indexOf(v) === i).sort();
}

// Confident sub-pattern: family-hue semantic followers undefined by Dynamic
// (cyan/green/.../yellow × bg-subtle/text-emphasis/border-subtle).
const isFamilySemantic = (n) => /^--bs-(blue|indigo|purple|pink|red|orange|yellow|green|teal|cyan)-(bg-subtle|text-emphasis|border-subtle)$/.test(n);

const slotVars = slotCandidates.map((cssVar) => {
  const refs = referencedBy(cssVar);
  const familySemantic = isFamilySemantic(cssVar);
  return {
    cssVar,
    referencedBy: refs,
    suspected: !familySemantic, // honesty: only the regular family-semantic pattern is asserted as a real slot
    ...(familySemantic
      ? { note: 'Family-hue semantic follower not defined by Dynamic (only the 8 theme colors have it). The consumer can define it if they use these utility classes.' }
      : { note: 'Referenced but not defined anywhere. May be a theme slot, a Bootstrap runtime/utility var (set at the usage site), or a dead reference. Check referencedBy.' }),
  };
});

// ---------------------------------------------------------------------------
// GAPS
// ---------------------------------------------------------------------------
const gaps = {
  secondary: {
    state: 'broken-ramp',
    overridable: 'manual-only',
    monotonic: rampIsMonotonic('secondary'),
    detail: 'Non-monotonic ramp: the role anchor (--bs-secondary-rgb = gray-800) and the special -500 case (alias of the base) inject a dark tone into the middle of the ramp, so -500 ends up darker than -600/-700. Overriding the base does NOT fix the ramp shape.',
    workaround: 'The agent either (1) overrides the 10 leaves by hand with a coherent ramp, or (2) treats secondary as not rebrandable via override. Do NOT expect overriding the base to fix the ramp.',
    horizon: 'To be fixed in a future version (role-anchor refactor). Not available in this version (see dynamicUi).',
  },
  'icons-data-uri': {
    state: 'not-overridable-by-color',
    overridable: 'replace-whole-variable',
    vars: iconVars,
    detail: 'The color is baked into the data-URI SVG. Overriding the color role (--bs-success/--bs-danger/...) does NOT recolor them.',
    workaround: 'The agent CAN replace the whole variable with a new data-URI that bakes in the new color.',
  },
  tracking: { state: 'not-tokenized', detail: 'There is no brand letter-spacing token.' },
  shadow: { state: 'partial', detail: 'Only --bs-box-shadow-lg is a Dynamic-owned override; the rest inherit Bootstrap.' },
};

// ---------------------------------------------------------------------------
// ASSEMBLE
// ---------------------------------------------------------------------------
const doc = {
  $schema: SCHEMA_URL,
  dynamicUi: version,
  generatedFrom: 'scripts/tokens/_defs-harness.scss (abstracts + root → token values & classification) + scripts/tokens/_full-harness.scss (full src/style/dynamic-ui.scss chain → var(--bs-*) reference/slot scan)',
  generatedAt,

  consumption: {
    note: `This artifact corresponds to the Dynamic version in 'dynamicUi'. A consumer must fetch the artifact of the SAME version as the CSS bundle it loads (versioned CDN, e.g. assets/${version}/ui-react/).`,
    anchor: ':root, [data-bs-theme="dynamic"]',
    howOverrideWins: {
      withLayers: 'Dynamic emits its tokens WITHOUT a layer (base cascade), and in CSS unlayered styles beat those in any @layer. So if you import Dynamic inside a layer (e.g. @import url(dynamic) layer(framework)), declare your overrides layer AFTER it so it wins among layers: the last declared layer wins, e.g. "@layer framework, theme;" (theme wins). If Dynamic stays unlayered, use the withoutLayers path. Full detail at https://docs.modyo.com/en/dynamic/customization/theming.html.',
      withoutLayers: 'Without @layer, match or exceed the Dynamic selector, in a later rule. NEVER :where() (specificity 0).',
    },
    colorFormat: "'R, G, B' triplet WITHOUT an rgb() wrapper. The system does rgb(var(--bs-X-rgb)) and rgba(var(--bs-X-rgb), a). A hex or rgb() breaks opacity. Override the -rgb, never the wrappers.",
    clientVarBridge: 'To wire a brand: --bs-<role>-rgb: var(--client-<name>-rgb). The --client-* belong to the consumer and do NOT live in this artifact; minimalRebrandSet is the exact list of --bs-* to wire.',
  },

  behaviorClasses: {
    'override-base': 'Override the base --bs-X-rgb. Drags --bs-X and --bs-X-500-rgb along. Does NOT recolor the rest of the ramp.',
    'override-leaf': 'Baked literal. Override one by one; does not follow the base.',
    follows: 'Auto-derived (alias/wrapper). Do NOT override; it recolors itself.',
    'not-overridable': 'Baked value outside var() (data-URI). Replace the whole variable or treat as a gap.',
  },

  color: {
    ramps: colorRamps,
    hueGroups,
    rebrandScope: {
      default: 'role',
      role: 'Override only --bs-<role>-* (the minimalRebrandSet: 1 base + 10 leaves). Other ramps of the same hue do NOT change.',
      hue: 'Override ALL ramps in the hueGroup + the base --bs-<hue>-rgb. See hueGroups.',
      agentMustAsk: 'If the change targets a hue that surfaces in several ramps (see hueGroups), confirm with the requester whether the state roles (e.g. info) follow the new brand or stay as a semantic state color. Without confirmation, apply the "role" default.',
      warning: "Changing ONLY a role's base (what the 'override Layer 2' guidance suggests) leaves the ramp leaves (bg-subtle, hover/active -600/-700) on the old hue. For a faithful brand, override the full minimalRebrandSet, not just the base.",
    },
  },

  typography,
  spacing,
  radius,
  shadow,

  slots: {
    note: 'Vars the code REFERENCES but does NOT define anywhere in the compiled CSS (R - Dall). suspected=false only for the regular family-hue semantic-follower pattern; the rest are candidates to verify (theme slot, Bootstrap runtime, or dead reference). Malformed typos go in denylist, not here.',
    vars: slotVars,
    denylist,
    denylistNote: 'Malformed refs (double prefix --bs-bs- or leading dash --bs--). These are source typos, not slots. Known: --bs---bs-ref-spacer-4 (_d-carousel.scss:53), --bs-bs-gray-400 (_forms.scss:3). Report as separate CSS bugs.',
  },

  gaps,

  componentTokens: {
    status: 'deferred',
    deferredCount: [...Dall].filter((n) => !defs.has(n)).length, // component-local (Layer 3) tokens not enumerated in this version
    note: 'Layer 3 (--bs-{component}-{prop}, e.g. --bs-btn-bg, --bs-card-bg) is NOT enumerated in this version (see dynamicUi). Pattern for the agent: override them in the component selector, not in :root. To theme a specific component, inspect its --bs-{comp}-* vars in the component CSS and override them scoped. Full enumeration: candidate for a future minor.',
  },
};

writeFileSync(OUTPUT_PATH, `${JSON.stringify(doc, null, 2)}\n`);
process.stdout.write(`Generated registry/token-overrides.json (${Object.keys(colorRamps).length} ramps, ${slotVars.length} slot candidates, ${denylist.length} denylisted)\n`);
