#!/usr/bin/env node
//
// theme-diff — compara el CSS compilado de dos versiones de Dynamic UI y
// describe en JSON lo que afecta a un theme o a un UI Kit:
//
//   - customProperties: todas las custom properties del CSS, en cualquier
//     selector (`:root`, componentes, utilidades, zonas) y en cualquier
//     `@media`/`@supports`: agregadas, eliminadas, con otro valor y renombres
//     sugeridos.
//   - classes: clases que aparecen o desaparecen de los selectores.
//
//   node scripts/theme/theme-diff.mjs <prev.css> <next.css> [--out <archivo>]
//   node scripts/theme/theme-diff.mjs --previous-version <manifest.json> <semver>
//
// Una custom property se identifica por su nombre, su selector y la cadena de
// at-rules que la envuelve. Las listas de selectores se separan, así que
// reagrupar reglas en Sass no aparece como cambio. `[data-bs-theme=dynamic]`
// se cuenta como `:root`: la librería siempre los declara juntos.
//
// Las declaraciones normales (`padding`, `color`…) quedan fuera: una release
// puede mover cientos y taparían lo que un theme tiene que revisar.
//
// La entrada es el CSS y no known-tokens.json: el inventario solo lleva
// nombres, sin valores ni selector, así que no alcanza para `changed` ni para
// `renamed`.
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

import postcss from 'postcss';

import { cascadeSet, normalizeCssValue } from './theme-tokens.mjs';

/** Similitud mínima entre nombres para sugerir un renombre entre varios candidatos. */
export const RENAME_MIN_SIMILARITY = 0.5;

const USAGE = 'uso: theme-diff.mjs <prev.css> <next.css> [--out <archivo>]\n'
  + '     theme-diff.mjs --previous-version <manifest.json> <semver>\n';

// -- Lectura ------------------------------------------------------------------

export function cssVersion(css) {
  return css.match(/dynamic-framework\s+(\d+\.\d+\.\d+[\w.+-]*)/)?.[1] ?? null;
}

/**
 * Selector comparable entre versiones: espacios colapsados y valores de
 * atributo entre comillas dobles (Sass compila `[data-bs-theme=dark]`; un CSS
 * escrito a mano suele llevar comillas).
 */
export function normalizeSelector(selector) {
  const canonical = selector
    .replace(/\s+/g, ' ')
    .replace(/\[\s*([\w-]+)\s*=\s*["']?([^"'\]]*?)["']?\s*\]/g, '[$1="$2"]')
    .trim();
  return canonical === '[data-bs-theme="dynamic"]' ? ':root' : canonical;
}

const CLASS_NAME = /\.(-?[_a-zA-Z -￿](?:\\.|[\w -￿-])*)/g;

/** Clases de un selector, con el punto: `.btn-check:checked + .btn` → `.btn-check`, `.btn`. */
export function classesOf(selector) {
  // Los atributos y strings pueden llevar puntos (`[href$=".pdf"]`).
  const bare = selector.replace(/\[[^\]]*\]/g, '').replace(/(["'])(?:\\.|(?!\1).)*\1/g, '');
  return [...bare.matchAll(CLASS_NAME)].map((match) => `.${match[1]}`);
}

function atRuleChain(node) {
  const chain = [];
  for (let parent = node.parent; parent && parent.type === 'atrule'; parent = parent.parent) {
    chain.unshift(`@${parent.name} ${parent.params.replace(/\s+/g, ' ').trim()}`);
  }
  return chain.length > 0 ? chain.join(' ') : null;
}

const keyOf = ({ media, selector, name }) => `${media ?? ''}\u0000${selector}\u0000${name}`;

/**
 * Inventario de un CSS: `props` (Map de clave → { name, selector, media,
 * value }) y `classes` (Set). Dentro de una misma clave gana la última
 * declaración, salvo que una anterior lleve `!important` y la nueva no.
 */
export function readInventory(css) {
  const props = new Map();
  const classes = new Set();
  postcss.parse(css).walkRules((rule) => {
    if (rule.parent?.type === 'atrule' && /keyframes$/i.test(rule.parent.name)) return;
    const media = atRuleChain(rule);
    const decls = rule.nodes.filter((node) => node.type === 'decl' && node.prop.startsWith('--'));
    const selectors = [...new Set(rule.selectors.map(normalizeSelector))];
    for (const selector of selectors) {
      for (const className of classesOf(selector)) classes.add(className);
      for (const decl of decls) {
        const entry = {
          name: decl.prop, selector, media, value: decl.value, important: decl.important,
        };
        cascadeSet(props, keyOf(entry), entry);
      }
    }
  });
  return { props, classes };
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

const valueOf = (entry) => (entry.important ? `${entry.value} !important` : entry.value);

// -- Diff ---------------------------------------------------------------------

/** Por código de carácter, no por locale: el orden no cambia entre máquinas. */
const compareText = (a, b) => (a < b ? -1 : Number(a > b));

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

const contextOf = ({ media, selector }) => `${media ?? ''}\u0000${selector}`;

/**
 * Pares (eliminada, agregada) con el mismo selector, la misma at-rule y el
 * mismo valor. Se acepta un par si es el único candidato de los dos lados y
 * los nombres comparten algún segmento, o si su similitud llega a
 * RENAME_MIN_SIMILARITY. Entre varios candidatos gana el de mayor similitud, y
 * cada variable entra en un solo par.
 */
function suggestRenames(removed, added) {
  const candidates = [];
  for (const r of removed) {
    for (const a of added) {
      if (contextOf(r) === contextOf(a) && comparable(r.value) === comparable(a.value)) {
        candidates.push({ r, a, similarity: nameSimilarity(r.name, a.name) });
      }
    }
  }
  const countBy = (side) => candidates.reduce(
    (acc, c) => acc.set(keyOf(c[side]), (acc.get(keyOf(c[side])) ?? 0) + 1),
    new Map(),
  );
  const perRemoved = countBy('r');
  const perAdded = countBy('a');

  candidates.sort((x, y) => y.similarity - x.similarity
    || compareText(keyOf(x.r), keyOf(y.r))
    || compareText(keyOf(x.a), keyOf(y.a)));

  const used = new Set();
  const renamed = [];
  for (const { r, a, similarity } of candidates) {
    const rKey = `r${keyOf(r)}`;
    const aKey = `a${keyOf(a)}`;
    if (used.has(rKey) || used.has(aKey)) continue;
    const oneToOne = perRemoved.get(keyOf(r)) === 1 && perAdded.get(keyOf(a)) === 1;
    if ((oneToOne && similarity > 0) || similarity >= RENAME_MIN_SIMILARITY) {
      used.add(rKey);
      used.add(aKey);
      renamed.push({
        from: r.name,
        to: a.name,
        selector: a.selector,
        media: a.media,
        value: a.value,
        similarity,
        suggestion: true,
      });
    }
  }
  return renamed;
}

/**
 * Orden estable: primero lo que no está bajo una at-rule, `:root` antes que el
 * resto de selectores, y después por selector y nombre.
 */
const order = (x, y) => compareText(x.media ?? '', y.media ?? '')
  || (y.selector === ':root') - (x.selector === ':root')
  || compareText(x.selector, y.selector)
  || compareText(x.name ?? x.from, y.name ?? y.from);

const describe = (entry) => ({
  name: entry.name, selector: entry.selector, media: entry.media, value: valueOf(entry),
});

/** Diferencia entre dos inventarios, tal como los devuelve `readInventory`. */
export function diffInventories(prev, next) {
  const added = [];
  const removed = [];
  const changed = [];
  for (const [key, entry] of next.props) {
    const before = prev.props.get(key);
    if (!before) {
      added.push(describe(entry));
    } else if (comparable(valueOf(before)) !== comparable(valueOf(entry))) {
      changed.push({
        name: entry.name,
        selector: entry.selector,
        media: entry.media,
        from: valueOf(before),
        to: valueOf(entry),
      });
    }
  }
  for (const [key, entry] of prev.props) {
    if (!next.props.has(key)) removed.push(describe(entry));
  }
  const sortedClasses = (from, to) => [...to].filter((c) => !from.has(c)).sort();
  return {
    customProperties: {
      added: added.sort(order),
      removed: removed.sort(order),
      changed: changed.sort(order),
      renamed: suggestRenames(removed, added).sort(order),
    },
    classes: {
      added: sortedClasses(prev.classes, next.classes),
      removed: sortedClasses(next.classes, prev.classes),
    },
  };
}

const counts = (group) => Object.fromEntries(Object.entries(group).map(([key, list]) => [key, list.length]));

export function diffCss(prevCss, nextCss) {
  const changes = diffInventories(readInventory(prevCss), readInventory(nextCss));
  return {
    from: cssVersion(prevCss),
    to: cssVersion(nextCss),
    summary: {
      customProperties: counts(changes.customProperties),
      classes: counts(changes.classes),
    },
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

  let result;
  try {
    result = diffCss(sources[0].text, sources[1].text);
  } catch (error) {
    process.stderr.write(`No se pudo leer el CSS: ${error.message}\n`);
    return 2;
  }
  const json = `${JSON.stringify(result, null, 2)}\n`;
  if (!out) {
    process.stdout.write(json);
    return 0;
  }
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, json, 'utf8');
  const { customProperties: props, classes } = result.summary;
  process.stdout.write(
    `${out}: ${result.from} → ${result.to}. Custom properties: ${props.added} agregada(s), `
    + `${props.removed} eliminada(s), ${props.changed} cambiada(s), ${props.renamed} renombre(s) sugerido(s). `
    + `Clases: ${classes.added} agregada(s), ${classes.removed} eliminada(s).\n`,
  );
  return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  process.exit(main(process.argv));
}

export { main };
