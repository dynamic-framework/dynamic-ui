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
  const sassBin = resolve(ROOT, 'node_modules/.bin/sass');
  if (!existsSync(sassBin)) {
    process.stderr.write('Error: dart-sass not found at node_modules/.bin/sass. Run npm ci first.\n');
    process.exit(1);
  }
  return execFileSync(
    sassBin,
    ['--no-source-map', '--load-path=./', '--load-path=src/style/', relPath],
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
// Source scan (for slot referencedBy) — read the style source once.
// Includes abstracts/ and root/ so references (and the documented typos) under
// abstracts/variables (_forms.scss, _list-group.scss) are found too.
// ---------------------------------------------------------------------------
function readSourceFiles() {
  const styleRoot = resolve(ROOT, 'src/style');
  const dirs = ['abstracts', 'root', 'base', 'components', 'helpers'].map((d) => resolve(styleRoot, d));
  const files = [];
  const walk = (dir) => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir)) {
      const p = join(dir, entry);
      if (statSync(p).isDirectory()) walk(p);
      // Store the path relative to src/style/ (not just the basename): duplicate
      // basenames across dirs (e.g. abstracts/variables/_breadcrumb.scss vs
      // base/_breadcrumb.scss) would otherwise collapse into one ambiguous entry.
      else if (entry.endsWith('.scss')) files.push({ rel: relative(styleRoot, p), content: readFileSync(p, 'utf8') });
    }
  };
  dirs.forEach(walk);
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
    stepNodes[String(step)] = {
      cssVar,
      value: cls === 'follows' ? `alias:${aliasTarget(value)}` : value,
      class: cls,
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
    rampMethod: 'bootstrap-mix-srgb',
    rampWeights: [95, 90, 80, 60, 40, 20, 0, -20, -40, -60, -80],
  };
  if (hue) node.hue = hue;
  if (kind === 'neutral') { node.method = 'hand-authored'; node.regenerable = false; }

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
  note: 'GOTCHA RFS: --bs-fs-N -> var(--bs-rfs-fs-N). Los niveles con hasResponsiveRedef=true tienen una redefinicion responsive (calc(... + ...vw)) dentro de un @media (min-width: 1200px). Pisar el tamano exige vencer tambien la regla del media query; pisar solo el valor base no alcanza en viewports grandes. El target overridable es --bs-rfs-fs-N (no --bs-fs-N, que es un follows).',
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
const spacing = { note: '31 niveles literales --bs-ref-spacer-0..30. En build derivan de $spacer; en runtime son literales pisables directo.', levels: {} };
for (const name of defsOrder) {
  const m = name.match(/^--bs-ref-spacer-(\d+)$/);
  if (m) spacing.levels[m[1]] = { cssVar: name, value: defs.get(name), class: 'override-leaf' };
}

// radius (variants, not a derived scale)
const radius = { note: 'Variantes literales independientes (incluye "default" = --bs-border-radius, la mas usada), NO una escala derivada.', variants: {} };
for (const name of defsOrder) {
  const m = name.match(/^--bs-border-radius(-[a-z0-9]+)?$/);
  if (m) {
    const key = m[1] ? m[1].slice(1) : 'default';
    radius.variants[key] = { cssVar: name, value: defs.get(name), class: classifyRgb(name, defs.get(name)) };
  }
}

// shadow (partial coverage — only -lg is a Dynamic override; rest inherits Bootstrap)
const shadow = { coverage: 'partial', note: 'Solo --bs-box-shadow-lg es un override propio de Dynamic en esta version. El resto hereda defaults de Bootstrap.', variants: {} };
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
      ? { note: 'Family-hue semantic follower no definido por Dynamic (solo los 8 theme colors lo tienen). Definible por el consumidor si usa estas clases de utilidad.' }
      : { note: 'Referenciado pero no definido en ninguna parte. Puede ser slot del theme, var de runtime/utilidad de Bootstrap (set en el sitio de uso) o ref muerta. Verificar en referencedBy.' }),
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
    detail: 'Rampa no-monotona: el ancla de rol (--bs-secondary-rgb = gray-800) y el caso especial -500 (alias de la base) meten un tono oscuro al medio de la rampa, por lo que -500 queda mas oscuro que -600/-700. Pisar la base NO arregla la forma de la rampa.',
    workaround: 'El agente o (1) pisa los 10 leaves a mano con una rampa coherente, o (2) declara secondary no-rebrandeable por override. NO esperar que pisar la base arregle la rampa.',
    horizon: 'Se sanea en una version futura (refactor del ancla de rol). NO disponible en 2.6.',
  },
  'icons-data-uri': {
    state: 'not-overridable-by-color',
    overridable: 'replace-whole-variable',
    vars: iconVars,
    detail: 'El color esta horneado dentro del SVG del data-URI. Pisar el rol de color (--bs-success/--bs-danger/...) NO los recolorea.',
    workaround: 'El agente PUEDE reemplazar la variable entera con un data-URI nuevo que lleve el color nuevo horneado.',
  },
  tracking: { state: 'not-tokenized', detail: 'No existe token de letter-spacing de marca.' },
  shadow: { state: 'partial', detail: 'Solo --bs-box-shadow-lg es override propio; el resto hereda Bootstrap.' },
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
    note: "Este artefacto corresponde a la version de Dynamic en 'dynamicUi'. Un consumidor debe bajar el artefacto de la MISMA version que la del bundle CSS que carga (CDN versionado, p.ej. assets/2.6.0/ui-react/).",
    anchor: ':root, [data-bs-theme="dynamic"]',
    howOverrideWins: {
      withLayers: 'Dynamic emite sus tokens SIN capa (cascada base), y en CSS los estilos sin capa ganan a los de cualquier @layer. Por eso, si importas Dynamic dentro de una capa (p.ej. @import url(dynamic) layer(framework)), declara tu capa de overrides DESPUES para que gane entre capas: la ultima capa declarada gana, p.ej. "@layer framework, theme;" (theme gana). Si Dynamic queda sin capa, usa el camino de withoutLayers. Detalle completo en https://docs.modyo.com/en/dynamic/customization/theming.html.',
      withoutLayers: 'Sin @layer, igualar o exceder el selector de Dynamic, en regla posterior. NUNCA :where() (especificidad 0).',
    },
    colorFormat: "Triplete 'R, G, B' SIN wrapper rgb(). El sistema hace rgb(var(--bs-X-rgb)) y rgba(var(--bs-X-rgb), a). Un hex o rgb() rompe la opacidad. Se pisan los -rgb, nunca los wrappers.",
    clientVarBridge: 'Para cablear marca: --bs-<rol>-rgb: var(--client-<name>-rgb). Los --client-* son del consumidor y NO viven en este artefacto; minimalRebrandSet es la lista exacta de --bs-* a cablear.',
  },

  behaviorClasses: {
    'override-base': 'Pisar la base --bs-X-rgb. Arrastra --bs-X y --bs-X-500-rgb. NO recolorea el resto de la rampa.',
    'override-leaf': 'Literal horneado. Pisar uno por uno; no sigue a la base.',
    follows: 'Auto-deriva (alias/wrapper). NO pisar; se recolorea solo.',
    'not-overridable': 'Valor horneado fuera de var() (data-URI). Reemplazar la variable entera o tratar como gap.',
  },

  color: {
    ramps: colorRamps,
    hueGroups,
    rebrandScope: {
      default: 'role',
      role: 'Pisar solo --bs-<rol>-* (el minimalRebrandSet: 1 base + 10 leaves). Otras rampas del mismo hue NO cambian.',
      hue: 'Pisar TODAS las rampas del hueGroup + la base --bs-<hue>-rgb. Ver hueGroups.',
      agentMustAsk: 'Si el cambio apunta a un hue que aflora en varias rampas (ver hueGroups), confirmar con el solicitante si los roles de estado (p.ej. info) siguen la marca nueva o se quedan como color de estado semantico. Sin confirmacion, aplicar el default "role".',
      warning: "Cambiar SOLO la base de un rol (lo que sugiere la guia 'override Layer 2') deja los leaves de rampa (bg-subtle, hover/active -600/-700) en el hue viejo. Para marca fiel, pisar el minimalRebrandSet completo, no solo la base.",
    },
  },

  typography,
  spacing,
  radius,
  shadow,

  slots: {
    note: 'Vars que el codigo REFERENCIA pero NO define en ninguna parte del CSS compilado (R - Dall). suspected=false solo para el patron regular de family-hue semantic followers; el resto es candidato a verificar (slot del theme, runtime de Bootstrap, o ref muerta). Los typos malformados van en denylist, no aca.',
    vars: slotVars,
    denylist,
    denylistNote: 'Refs malformadas (doble prefijo --bs-bs- o dash inicial --bs--). Son typos del source, no slots. Conocidos: --bs---bs-ref-spacer-4 (_d-carousel.scss:53), --bs-bs-gray-400 (_forms.scss:3). Reportar como bugs de CSS aparte.',
  },

  gaps,

  componentTokens: {
    status: 'deferred-2.6',
    deferredCount: [...Dall].filter((n) => !defs.has(n)).length, // component-local (Layer 3) tokens not enumerated in 2.6
    note: 'Layer 3 (--bs-{componente}-{prop}, --df-*) NO se enumera en 2.6. Patron para el agente: se pisan en el selector del componente, no en :root. Para tematizar un componente puntual, inspeccionar sus vars --bs-{comp}-* / --df-* en el CSS del componente y pisarlas scoped. Enumeracion completa: candidata a un minor futuro.',
  },
};

writeFileSync(OUTPUT_PATH, `${JSON.stringify(doc, null, 2)}\n`);
process.stdout.write(`Generated registry/token-overrides.json (${Object.keys(colorRamps).length} ramps, ${slotVars.length} slot candidates, ${denylist.length} denylisted)\n`);
