/**
 * model.mjs — loads `tokens/` into a flat, typed token model.
 *
 * This is the only module that knows the DTCG file layout. Every emitter and
 * the validator consume the model it returns, so adding an output format never
 * means re-reading the JSON.
 *
 * ## Aliases are name references, not value references
 *
 * A token whose `$value` is `{color.blue.500}` is NOT resolved to a hex here.
 * It stays an alias, because that is what each consumer needs:
 *
 *   - CSS emits `var(--df-color-blue-500)`, which is what makes runtime
 *     theming work — override one primitive and every consumer follows.
 *   - Figma emits a VARIABLE_ALIAS to the target variable, which is what makes
 *     a mode switch work inside Figma.
 *   - The DTCG output keeps the alias string, because that is the contract.
 *
 * Only the validator flattens aliases to literals, and only to check contrast.
 * `resolveLiteral()` exists for that.
 */

import { readFileSync, readdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
export const TOKENS_DIR = resolve(ROOT, 'tokens');

/** DTCG reserved keys. Anything else in a group object is a child token/group. */
const RESERVED = new Set(['$value', '$type', '$description', '$extensions', '$deprecated']);

const EXT_CSS = 'dev.dynamicframework.css';
const EXT_FIGMA = 'dev.dynamicframework.figma';

const ALIAS_RE = /^\{([^}]+)\}$/;

/** `"{color.blue.500}"` -> `"color.blue.500"`, anything else -> null. */
export function aliasTarget(value) {
  if (typeof value !== 'string') return null;
  const m = ALIAS_RE.exec(value.trim());
  return m ? m[1] : null;
}

/** Reads and parses one JSON file, with the path in the error message. */
function readJson(absPath) {
  try {
    return JSON.parse(readFileSync(absPath, 'utf8'));
  } catch (err) {
    throw new Error(`tokens: cannot parse ${absPath.replace(`${ROOT}/`, '')}: ${err.message}`);
  }
}

/** Expands a single trailing `*.json` glob; other patterns are returned as-is. */
function expandSource(pattern) {
  if (!pattern.endsWith('*.json')) return [pattern];
  const dir = dirname(pattern);
  return readdirSync(join(TOKENS_DIR, dir))
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => join(dir, f));
}

/**
 * Walks one DTCG document, emitting a flat token record per leaf.
 *
 * A leaf is any object carrying `$value`. Note that a group may carry `$value`
 * too (a family ramp with a base value), so recursion continues past a leaf.
 */
function walk(node, path, inherited, source, out) {
  const type = node.$type ?? inherited;

  if (Object.prototype.hasOwnProperty.call(node, '$value')) {
    if (!type) {
      throw new Error(`tokens: ${source} -> ${path.join('.')} has $value but no $type (and no group $type to inherit)`);
    }
    const ext = node.$extensions ?? {};
    out.push({
      path: [...path],
      id: path.join('.'),
      name: path.join('-'),
      type,
      value: node.$value,
      alias: aliasTarget(node.$value),
      description: node.$description,
      source,
      cssUnit: ext[EXT_CSS]?.unit ?? inheritedCssUnit(path, out),
      keepZeroUnit: ext[EXT_CSS]?.keepZeroUnit ?? inheritedKeepZeroUnit(path),
      figma: ext[EXT_FIGMA] ?? {},
      extensions: ext,
    });
  }

  for (const [key, child] of Object.entries(node)) {
    if (RESERVED.has(key)) continue;
    if (child === null || typeof child !== 'object' || Array.isArray(child)) continue;
    walk(child, [...path, key], type, source, out);
  }
}

// `cssUnit` and `figma.publish` are declared on a GROUP but apply to its
// leaves. Groups are visited before their children, so the nearest declaring
// ancestor is recorded here and looked up by path prefix.
const groupMeta = new Map();

function inheritedCssUnit(path) {
  for (let i = path.length - 1; i > 0; i -= 1) {
    const meta = groupMeta.get(path.slice(0, i).join('.'));
    if (meta?.cssUnit) return meta.cssUnit;
  }
  return undefined;
}

function inheritedKeepZeroUnit(path) {
  for (let i = path.length; i > 0; i -= 1) {
    const meta = groupMeta.get(path.slice(0, i).join('.'));
    if (meta?.keepZeroUnit !== undefined) return meta.keepZeroUnit;
  }
  return undefined;
}

function inheritedFigma(path) {
  const merged = {};
  for (let i = 1; i <= path.length; i += 1) {
    const meta = groupMeta.get(path.slice(0, i).join('.'));
    if (meta?.figma) Object.assign(merged, meta.figma);
  }
  return merged;
}

/** Pre-pass: record group-level `$extensions` so leaves can inherit them. */
function indexGroups(node, path) {
  const ext = node.$extensions ?? {};
  if (ext[EXT_CSS] || ext[EXT_FIGMA]) {
    groupMeta.set(path.join('.'), {
      cssUnit: ext[EXT_CSS]?.unit,
      keepZeroUnit: ext[EXT_CSS]?.keepZeroUnit,
      figma: ext[EXT_FIGMA],
    });
  }
  for (const [key, child] of Object.entries(node)) {
    if (RESERVED.has(key)) continue;
    if (child === null || typeof child !== 'object' || Array.isArray(child)) continue;
    indexGroups(child, [...path, key]);
  }
}

/** Loads the manifest. */
export function loadManifest() {
  return readJson(resolve(TOKENS_DIR, '$manifest.json'));
}

/**
 * Loads every collection and mode declared in the manifest.
 *
 * @returns {{
 *   manifest: object,
 *   collections: Array<{
 *     name: string, layer: string, figma: object,
 *     modes: Array<{ name: string, tokens: Array<object>, [k:string]: any }>
 *   }>,
 *   byName: Map<string, object>,
 *   byId: Map<string, object>,
 * }}
 */
export function loadModel() {
  const manifest = loadManifest();
  groupMeta.clear();

  const collections = manifest.collections.map((col) => ({
    name: col.name,
    layer: col.layer,
    description: col.description,
    figma: col.figma ?? {},
    modes: col.modes.map((mode) => {
      const sources = mode.sources.flatMap(expandSource);
      const tokens = [];
      for (const rel of sources) {
        const doc = readJson(resolve(TOKENS_DIR, rel));
        indexGroups(doc, []);
        walk(doc, [], undefined, rel, tokens);
      }
      for (const t of tokens) {
        t.collection = col.name;
        t.layer = col.layer;
        t.mode = mode.name;
        t.figma = { ...inheritedFigma(t.path), ...t.figma };
        if (!t.cssUnit) t.cssUnit = inheritedCssUnit(t.path);
        if (t.keepZeroUnit === undefined) t.keepZeroUnit = inheritedKeepZeroUnit(t.path);
      }
      return { ...mode, sources, tokens };
    }),
  }));

  // Name index. Every mode of a collection declares the same token names, so
  // the index stores one representative record per name (the default mode's,
  // when one is marked default) plus a per-mode value map.
  const byName = new Map();
  const byId = new Map();

  for (const col of collections) {
    for (const mode of col.modes) {
      for (const t of mode.tokens) {
        if (!byName.has(t.name) || mode.default) byName.set(t.name, t);
        if (!byId.has(t.id) || mode.default) byId.set(t.id, t);
      }
    }
  }

  return { manifest, collections, byName, byId };
}

/**
 * Follows an alias chain to a literal value within one mode.
 *
 * `modeIndex` maps token id -> record and must describe a single consistent
 * mode (primitives plus that mode's semantic/component tokens). Returns null
 * on a dangling reference and throws on a cycle, both of which the validator
 * reports as errors rather than crashing the build.
 */
export function resolveLiteral(token, modeIndex, seen = new Set()) {
  if (!token) return null;
  if (seen.has(token.id)) {
    throw new Error(`tokens: alias cycle through ${[...seen, token.id].join(' -> ')}`);
  }
  if (!token.alias) return token.value;
  seen.add(token.id);
  return resolveLiteral(modeIndex.get(token.alias), modeIndex, seen);
}

/**
 * Builds a token-id index describing one colour mode: the given mode's tokens
 * plus every single-mode collection (primitives, components). This is the view
 * an alias resolves against when checking contrast for `light` or for `dark`.
 */
export function modeIndexFor(model, modeName) {
  const index = new Map();
  for (const col of model.collections) {
    const mode = col.modes.find((m) => m.name === modeName)
      ?? (col.modes.length === 1 ? col.modes[0] : col.modes.find((m) => m.default));
    if (!mode) continue;
    for (const t of mode.tokens) index.set(t.id, t);
  }
  return index;
}

/** Every distinct mode name across colour-moded collections. */
export function colorModes(model) {
  const names = new Set();
  for (const col of model.collections) {
    if (col.modes.length > 1) col.modes.forEach((m) => names.add(m.name));
  }
  return names.size ? [...names] : ['light'];
}
