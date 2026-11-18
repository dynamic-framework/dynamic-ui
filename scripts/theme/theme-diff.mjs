#!/usr/bin/env node
//
// theme-diff — compara las custom properties que define el CSS compilado de
// dos versiones de Dynamic UI y describe la diferencia en JSON: qué variables
// se agregaron, cuáles se eliminaron, cuáles cambiaron de valor por defecto y
// cuáles parecen haberse renombrado.
//
//   node scripts/theme/theme-diff.mjs <prev.css> <next.css> [--out <archivo>]
//   node scripts/theme/theme-diff.mjs --previous-version <manifest.json> <semver>
//
// Alcance: el bloque raíz (`:root`, `[data-bs-theme="dynamic"]`) y ese mismo
// bloque dentro de `@media (min-width: 1200px)`. Los tokens de componente
// (`--bs-btn-*`, `--bs-alert-*`…) quedan fuera por ahora.
//
// La entrada es el CSS y no known-tokens.json: el inventario solo lleva
// nombres, sin valores, y mezcla los tokens de componente con los del bloque
// raíz, así que no alcanza para `changed` ni para `renamed`.
//
// `renamed` es una sugerencia: los dos lados del par siguen en `removed` y
// `added`, que son exhaustivas aunque la heurística se equivoque.
//
// --previous-version imprime la mayor versión estable del índice del CDN
// (manifest.json) menor a <semver>, o nada si no hay. Es la base contra la que
// cdn.yml compara cada release.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

import { normalizeCssValue } from './theme-tokens.mjs';
import { readCss } from './theme-validate.mjs';

export const SCOPES = {
  root: ':root, [data-bs-theme="dynamic"]',
  'media-1200': '@media (min-width: 1200px)',
};

/** Similitud mínima entre nombres para sugerir un renombre entre varios candidatos. */
export const RENAME_MIN_SIMILARITY = 0.5;

const USAGE = 'uso: theme-diff.mjs <prev.css> <next.css> [--out <archivo>]\n'
  + '     theme-diff.mjs --previous-version <manifest.json> <semver>\n';

// -- Lectura ------------------------------------------------------------------

export function cssVersion(css) {
  return css.match(/dynamic-framework\s+(\d+\.\d+\.\d+[\w.+-]*)/)?.[1] ?? null;
}

const withImportant = (entry) => (entry.important ? `${entry.value} !important` : entry.value);

/** Custom properties del CSS por scope: `{ root: Map<name, value>, 'media-1200': … }`. */
export function readTokens(css) {
  const { root, wideRoot } = readCss(css);
  const pick = (map) => new Map([...map].map(([name, entry]) => [name, withImportant(entry)]));
  return { root: pick(root), 'media-1200': pick(wideRoot) };
}

/**
 * Valor comparable: los hex en minúscula y sin diferencias de espacios. Que el
 * compilador pase de `rgba(0,0,0,.5)` a `rgba(0, 0, 0, .5)` no es un cambio
 * que un theme tenga que atender.
 */
export const comparable = (value) => normalizeCssValue(value)
  .replace(/\s+/g, ' ')
  .replace(/\s*([,()])\s*/g, '$1')
  .trim();

// -- Diff ---------------------------------------------------------------------

const segments = (name) => name.replace(/^--bs-/, '').split('-').filter(Boolean);

/** Coeficiente de Dice entre los segmentos de dos nombres (multiconjunto). */
export function nameSimilarity(a, b) {
  const left = segments(a);
  const right = segments(b);
  if (left.length + right.length === 0) return 0;
  const pool = [...right];
  let common = 0;
  for (const segment of left) {
    const index = pool.indexOf(segment);
    if (index !== -1) {
      common += 1;
      pool.splice(index, 1);
    }
  }
  return Math.round(((2 * common) / (left.length + right.length)) * 100) / 100;
}

/**
 * Pares (eliminado, agregado) del mismo scope con el mismo valor. Se acepta un
 * par si es el único candidato de los dos lados y los nombres comparten algún
 * segmento, o si su similitud llega a RENAME_MIN_SIMILARITY. Entre varios
 * candidatos gana el de mayor similitud, y cada variable entra en un solo par.
 */
function suggestRenames(scope, removed, added) {
  const candidates = [];
  for (const r of removed) {
    for (const a of added) {
      if (comparable(r.value) === comparable(a.value)) {
        candidates.push({ r, a, similarity: nameSimilarity(r.name, a.name) });
      }
    }
  }
  const countBy = (key) => candidates.reduce(
    (acc, c) => acc.set(c[key].name, (acc.get(c[key].name) ?? 0) + 1),
    new Map(),
  );
  const perRemoved = countBy('r');
  const perAdded = countBy('a');

  candidates.sort((x, y) => y.similarity - x.similarity
    || x.r.name.localeCompare(y.r.name)
    || x.a.name.localeCompare(y.a.name));

  const used = new Set();
  const renamed = [];
  for (const { r, a, similarity } of candidates) {
    if (used.has(r.name) || used.has(a.name)) continue;
    const oneToOne = perRemoved.get(r.name) === 1 && perAdded.get(a.name) === 1;
    if ((oneToOne && similarity > 0) || similarity >= RENAME_MIN_SIMILARITY) {
      used.add(r.name);
      used.add(a.name);
      renamed.push({
        from: r.name, to: a.name, scope, value: a.value, similarity, suggestion: true,
      });
    }
  }
  return renamed;
}

const byName = (x, y) => (x.name ?? x.from).localeCompare(y.name ?? y.from);

/** Diferencia entre los tokens de dos versiones, tal como los devuelve `readTokens`. */
export function diffTokens(prev, next) {
  const result = {
    added: [], removed: [], changed: [], renamed: [],
  };
  for (const scope of Object.keys(SCOPES)) {
    const before = prev[scope] ?? new Map();
    const after = next[scope] ?? new Map();
    const added = [];
    const removed = [];
    for (const [name, value] of after) {
      if (!before.has(name)) {
        added.push({ name, scope, value });
      } else if (comparable(before.get(name)) !== comparable(value)) {
        result.changed.push({
          name, scope, from: before.get(name), to: value,
        });
      }
    }
    for (const [name, value] of before) {
      if (!after.has(name)) removed.push({ name, scope, value });
    }
    result.added.push(...added.sort(byName));
    result.removed.push(...removed.sort(byName));
    result.renamed.push(...suggestRenames(scope, removed, added).sort(byName));
  }
  // `changed` se llena en orden de aparición; se ordena dentro de cada scope.
  const scopeOrder = Object.keys(SCOPES);
  result.changed.sort((x, y) => scopeOrder.indexOf(x.scope) - scopeOrder.indexOf(y.scope)
    || byName(x, y));
  return result;
}

export function diffCss(prevCss, nextCss) {
  const changes = diffTokens(readTokens(prevCss), readTokens(nextCss));
  return {
    from: cssVersion(prevCss),
    to: cssVersion(nextCss),
    scopes: SCOPES,
    summary: Object.fromEntries(Object.entries(changes).map(([key, list]) => [key, list.length])),
    ...changes,
  };
}

// -- Versión anterior ---------------------------------------------------------

const STABLE = /^(\d+)\.(\d+)\.(\d+)$/;

const compareStable = (a, b) => {
  const left = a.match(STABLE).slice(1).map(Number);
  const right = b.match(STABLE).slice(1).map(Number);
  for (let i = 0; i < 3; i += 1) {
    if (left[i] !== right[i]) return left[i] - right[i];
  }
  return 0;
};

/**
 * Mayor versión estable de `manifest.versions` estrictamente menor a `version`.
 * Los prereleases nunca son base. En un backport (2.11.1 con 2.12.x publicado)
 * devuelve 2.11.0, y al re-ejecutar un release su propia versión no cuenta.
 */
export function previousVersion(manifest, version) {
  const current = String(version).replace(/^v/, '').replace(/[-+].*$/, '');
  if (!STABLE.test(current)) return null;
  const versions = Object.keys(manifest?.versions ?? {}).filter((v) => STABLE.test(v));
  const lower = versions.filter((v) => compareStable(v, current) < 0).sort(compareStable);
  return lower.at(-1) ?? null;
}

// -- CLI ----------------------------------------------------------------------

function readFile(file) {
  try {
    return { text: fs.readFileSync(path.resolve(file), 'utf8') };
  } catch (error) {
    process.stderr.write(`No se pudo leer ${file}: ${error.message}\n`);
    return { error: true };
  }
}

function mainPreviousVersion(args) {
  if (args.length !== 2) {
    process.stderr.write(USAGE);
    return 2;
  }
  const { text, error } = readFile(args[0]);
  if (error) return 2;
  let manifest;
  try {
    manifest = JSON.parse(text);
  } catch (parseError) {
    process.stderr.write(`${args[0]} no es JSON válido: ${parseError.message}\n`);
    return 2;
  }
  const previous = previousVersion(manifest, args[1]);
  if (previous) process.stdout.write(`${previous}\n`);
  return 0;
}

function main(argv) {
  const args = argv.slice(2);
  if (args.includes('-h') || args.includes('--help')) {
    process.stdout.write(USAGE);
    return 0;
  }
  if (args[0] === '--previous-version') return mainPreviousVersion(args.slice(1));

  const positional = [];
  let out = null;
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === '--out') {
      out = args[i + 1] ?? null;
      i += 1;
    } else {
      positional.push(args[i]);
    }
  }
  if (positional.length !== 2 || (args.includes('--out') && !out)) {
    process.stderr.write(USAGE);
    return 2;
  }

  const sources = positional.map(readFile);
  if (sources.some((source) => source.error)) return 2;
  for (const [index, source] of sources.entries()) {
    if (!cssVersion(source.text)) {
      process.stderr.write(`${positional[index]} no lleva la cabecera de versión de Dynamic UI.\n`);
      return 2;
    }
  }

  const result = diffCss(sources[0].text, sources[1].text);
  const json = `${JSON.stringify(result, null, 2)}\n`;
  if (!out) {
    process.stdout.write(json);
    return 0;
  }
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, json, 'utf8');
  const { summary } = result;
  process.stdout.write(
    `${out}: ${result.from} → ${result.to}, ${summary.added} agregada(s), ${summary.removed} eliminada(s), `
    + `${summary.changed} cambiada(s), ${summary.renamed} renombre(s) sugerido(s).\n`,
  );
  return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  process.exit(main(process.argv));
}

export { main };
