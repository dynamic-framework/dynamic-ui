/**
 * figma-pull.mjs — reads Variables back from Figma and reports how they differ
 * from `tokens/`.
 *
 * This is the "Figma -> code" half of the round-trip, and the drift check that
 * runs on every PR.
 *
 * ## It reports; it does not overwrite
 *
 * A designer changing a value in Figma is a proposal, not a fact. So this
 * script prints a diff and exits non-zero when the two sides disagree; turning
 * that into a commit is a human act (or a scheduled job that opens a PR from
 * this output). The alternative — letting Figma write straight into `tokens/`
 * — would mean an unreviewed edit in a Figma file could change every client's
 * production colours.
 *
 * ## What counts as drift
 *
 * Only values of tokens that exist on both sides. A variable that exists only
 * in Figma is reported as `extra` (someone added it by hand, outside the flow),
 * and one that exists only in `tokens/` as `missing` (the push has not run).
 * Neither fails the check on its own — they are reported so the reason is
 * visible.
 *
 * Usage:
 *   FIGMA_TOKEN=… FIGMA_FILE_KEY=… node scripts/tokens/figma-pull.mjs
 *   …                                node scripts/tokens/figma-pull.mjs --json
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

import { ROOT } from './lib/model.mjs';
import { figmaColor } from './lib/emit.mjs';

const API = 'https://api.figma.com/v1';
const AS_JSON = process.argv.includes('--json');

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!TOKEN || !FILE_KEY) {
  process.stderr.write('figma-pull: needs FIGMA_TOKEN and FIGMA_FILE_KEY in the environment\n');
  process.exit(1);
}

const local = JSON.parse(
  readFileSync(resolve(ROOT, 'dist/tokens/dynamic.figma.json'), 'utf8'),
);

const res = await fetch(`${API}/files/${FILE_KEY}/variables/local`, {
  headers: { 'X-Figma-Token': TOKEN },
});
if (!res.ok) {
  process.stderr.write(`figma-pull: GET /variables/local -> ${res.status} ${res.statusText}\n`);
  process.exit(1);
}
const { meta } = await res.json();

/* ------------------------------------------------------------------ *
 * Normalise both sides to the same shape: Map<"Collection|name|mode", value>
 * ------------------------------------------------------------------ */

/** Figma floats are not exact; compare colours at 8-bit precision. */
const colorKey = (c) => ['r', 'g', 'b', 'a']
  .map((k) => Math.round((c[k] ?? 1) * 255))
  .join(',');

function normalise(value, type) {
  if (value == null) return null;
  if (typeof value === 'object' && value.type === 'VARIABLE_ALIAS') {
    return `alias:${value.id}`;
  }
  if (type === 'COLOR') return `color:${colorKey(value)}`;
  if (type === 'FLOAT') return `float:${Math.round(Number(value) * 1e4) / 1e4}`;
  return `string:${value}`;
}

const localMap = new Map();
const localTypes = new Map();
for (const col of local.variableCollections) {
  for (const v of col.variables) {
    localTypes.set(`${col.name}|${v.name}`, v.resolvedType);
    for (const [mode, value] of Object.entries(v.valuesByMode)) {
      // A local alias references its target by name; rewrite it to the same
      // shape the remote side will produce once ids are mapped back to names.
      const normalised = value && typeof value === 'object' && value.type === 'VARIABLE_ALIAS'
        ? `alias:${value.id}`
        : normalise(value, v.resolvedType);
      localMap.set(`${col.name}|${v.name}|${mode}`, normalised);
    }
  }
}

const remoteMap = new Map();
const idToName = new Map();
for (const v of Object.values(meta.variables ?? {})) idToName.set(v.id, v.name);

for (const v of Object.values(meta.variables ?? {})) {
  const col = meta.variableCollections?.[v.variableCollectionId];
  if (!col) continue;
  const modeName = Object.fromEntries(col.modes.map((m) => [m.modeId, m.name]));

  for (const [modeId, value] of Object.entries(v.valuesByMode ?? {})) {
    const mode = modeName[modeId];
    if (!mode) continue;
    const normalised = value && typeof value === 'object' && value.type === 'VARIABLE_ALIAS'
      // Remote aliases carry ids; map back to the name so both sides compare.
      ? `alias:${idToName.get(value.id) ?? value.id}`
      : normalise(value, v.resolvedType);
    remoteMap.set(`${col.name}|${v.name}|${mode}`, normalised);
  }
}

/* ------------------------------------------------------------------ */

const drift = [];
const missing = [];
const extra = [];

for (const [key, value] of localMap) {
  if (!remoteMap.has(key)) { missing.push(key); continue; }
  const remoteValue = remoteMap.get(key);
  if (remoteValue !== value) {
    drift.push({ token: key, code: value, figma: remoteValue });
  }
}
for (const key of remoteMap.keys()) {
  if (!localMap.has(key)) extra.push(key);
}

if (AS_JSON) {
  process.stdout.write(`${JSON.stringify({ drift, missing, extra }, null, 2)}\n`);
} else {
  const show = (label, list) => {
    if (!list.length) return;
    process.stdout.write(`\n${label} (${list.length}):\n`);
    for (const item of list.slice(0, 40)) {
      process.stdout.write(typeof item === 'string'
        ? `  ${item}\n`
        : `  ${item.token}\n      tokens/: ${item.code}\n      figma:   ${item.figma}\n`);
    }
    if (list.length > 40) process.stdout.write(`  … and ${list.length - 40} more\n`);
  };

  process.stdout.write(`figma-pull: compared ${localMap.size} local values against ${remoteMap.size} in Figma\n`);
  show('DRIFT — same token, different value', drift);
  show('MISSING from Figma — the push has not run', missing);
  show('EXTRA in Figma — created outside the PR flow', extra);

  if (!drift.length && !missing.length && !extra.length) {
    process.stdout.write('figma-pull: in sync\n');
  }
}

// Only real disagreement fails the check. `missing`/`extra` are informational:
// they mean the push is stale or someone worked outside the flow, both of which
// are visible in the output without blocking a merge.
if (drift.length) {
  process.stderr.write(`\nfigma-pull: ${drift.length} value(s) differ between tokens/ and Figma\n`);
  process.exit(1);
}
