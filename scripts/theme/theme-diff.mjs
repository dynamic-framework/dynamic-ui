#!/usr/bin/env node
//
// theme-diff — compara el CSS compilado de dos versiones de Dynamic UI y
// describe en JSON lo que afecta a un theme o a un UI Kit:
//
//   - customProperties: custom properties de cualquier selector (`:root`,
//     componentes, utilidades, zonas) y de cualquier `@media`/`@supports`:
//     agregadas, eliminadas, con otro valor y renombradas.
//   - classes: clases que aparecen o desaparecen de los selectores.
//
//   node scripts/theme/theme-diff.mjs <prev.css> <next.css> [--out <archivo>]
//
// Una custom property se identifica por nombre, selector y cadena de at-rules.
// Las listas de selectores se separan, así que reagrupar reglas en Sass no
// aparece como cambio. `[data-bs-theme=dynamic]` se cuenta como `:root`: la
// librería siempre los declara juntos.
//
// Las declaraciones normales (`padding`, `color`…) quedan fuera: una release
// puede mover cientos y taparían lo que un theme tiene que revisar.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

import postcss from 'postcss';

import { cascadeSet, normalizeCssValue } from './theme-tokens.mjs';

const USAGE = 'uso: theme-diff.mjs <prev.css> <next.css> [--out <archivo>]\n';

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

const contextOf = ({ media, selector }) => `${media ?? ''}\u0000${selector}`;
const keyOf = (entry) => `${contextOf(entry)}\u0000${entry.name}`;

/**
 * Inventario de un CSS: `props` (Map de clave → { name, selector, media,
 * value }) y `classes` (Set). Dentro de una misma clave gana la última
 * declaración, salvo que una anterior lleve `!important` y la nueva no.
 * `value` incluye `!important` si la declaración lo lleva.
 */
export function readInventory(css) {
  const props = new Map();
  const classes = new Set();
  postcss.parse(css).walkRules((rule) => {
    if (rule.parent?.type === 'atrule' && /keyframes$/i.test(rule.parent.name)) return;
    const media = atRuleChain(rule);
    const decls = rule.nodes.filter((node) => node.type === 'decl' && node.prop.startsWith('--'));
    for (const selector of new Set(rule.selectors.map(normalizeSelector))) {
      for (const className of classesOf(selector)) classes.add(className);
      for (const decl of decls) {
        const entry = {
          name: decl.prop,
          selector,
          media,
          value: decl.important ? `${decl.value} !important` : decl.value,
          important: decl.important,
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

// -- Diff ---------------------------------------------------------------------

/** Por código de carácter, no por locale: el orden no cambia entre máquinas. */
const compareText = (a, b) => (a < b ? -1 : Number(a > b));

/**
 * Orden estable: primero lo que no está bajo una at-rule, `:root` antes que el
 * resto de selectores, y después por selector y nombre.
 */
const order = (x, y) => compareText(x.media ?? '', y.media ?? '')
  || (y.selector === ':root') - (x.selector === ':root')
  || compareText(x.selector, y.selector)
  || compareText(x.name ?? x.from, y.name ?? y.from);

const segments = (name) => name.replace(/^--bs-/, '').split('-').filter(Boolean);
const shareSegment = (a, b) => segments(a).some((segment) => segments(b).includes(segment));

/**
 * Renombres: una variable eliminada y una agregada con el mismo selector, la
 * misma at-rule y el mismo valor, cuando son las únicas de su lado con ese
 * valor y los nombres comparten algún segmento (`--bs-gray-25` →
 * `--bs-neutral-25`). Si hay más de un candidato no se adivina: quedan en
 * `added` y `removed`.
 */
function findRenames(removed, added) {
  const bucketOf = (entry) => `${contextOf(entry)}\u0000${comparable(entry.value)}`;
  const addedByBucket = Map.groupBy(added, bucketOf);
  const renames = [];
  for (const [bucket, [from, ...others]] of Map.groupBy(removed, bucketOf)) {
    const candidates = addedByBucket.get(bucket) ?? [];
    if (others.length === 0 && candidates.length === 1 && shareSegment(from.name, candidates[0].name)) {
      renames.push({ from, to: candidates[0] });
    }
  }
  return renames;
}

const describe = ({
  name, selector, media, value,
}) => ({
  name, selector, media, value,
});

/** Diferencia entre dos inventarios, tal como los devuelve `readInventory`. */
export function diffInventories(prev, next) {
  const added = [...next.props].filter(([key]) => !prev.props.has(key)).map(([, entry]) => entry);
  const removed = [...prev.props].filter(([key]) => !next.props.has(key)).map(([, entry]) => entry);
  const changed = [];
  for (const [key, entry] of next.props) {
    const before = prev.props.get(key);
    if (before && comparable(before.value) !== comparable(entry.value)) {
      changed.push({
        name: entry.name, selector: entry.selector, media: entry.media, from: before.value, to: entry.value,
      });
    }
  }

  const renames = findRenames(removed, added);
  const paired = new Set(renames.flatMap(({ from, to }) => [from, to]));
  const unpaired = (list) => list.filter((entry) => !paired.has(entry)).map(describe).sort(order);
  const newClasses = (from, to) => [...to].filter((name) => !from.has(name)).sort();

  return {
    customProperties: {
      added: unpaired(added),
      removed: unpaired(removed),
      changed: changed.sort(order),
      renamed: renames.map(({ from, to }) => ({
        from: from.name, to: to.name, selector: to.selector, media: to.media, value: to.value,
      })).sort(order),
    },
    classes: {
      added: newClasses(prev.classes, next.classes),
      removed: newClasses(next.classes, prev.classes),
    },
  };
}

export function diffCss(prevCss, nextCss) {
  return {
    from: cssVersion(prevCss),
    to: cssVersion(nextCss),
    ...diffInventories(readInventory(prevCss), readInventory(nextCss)),
  };
}

// -- CLI ----------------------------------------------------------------------

function readFile(file) {
  try {
    return fs.readFileSync(path.resolve(file), 'utf8');
  } catch (error) {
    process.stderr.write(`No se pudo leer ${file}: ${error.message}\n`);
    return null;
  }
}

function main(argv) {
  let args;
  try {
    args = parseArgs({
      args: argv.slice(2),
      allowPositionals: true,
      options: { out: { type: 'string' }, help: { type: 'boolean', short: 'h' } },
    });
  } catch {
    process.stderr.write(USAGE);
    return 2;
  }
  const { values, positionals } = args;
  if (values.help) {
    process.stdout.write(USAGE);
    return 0;
  }
  if (positionals.length !== 2) {
    process.stderr.write(USAGE);
    return 2;
  }

  const sources = positionals.map(readFile);
  if (sources.includes(null)) return 2;
  const missingHeader = positionals.find((_, index) => !cssVersion(sources[index]));
  if (missingHeader) {
    process.stderr.write(`${missingHeader} no lleva la cabecera de versión de Dynamic UI.\n`);
    return 2;
  }

  let result;
  try {
    result = diffCss(...sources);
  } catch (error) {
    process.stderr.write(`No se pudo leer el CSS: ${error.message}\n`);
    return 2;
  }
  const json = `${JSON.stringify(result, null, 2)}\n`;
  if (!values.out) {
    process.stdout.write(json);
    return 0;
  }
  fs.mkdirSync(path.dirname(path.resolve(values.out)), { recursive: true });
  fs.writeFileSync(values.out, json, 'utf8');
  const { customProperties: props, classes } = result;
  process.stdout.write(
    `${values.out}: ${result.from} → ${result.to}. Custom properties: ${props.added.length} agregada(s), `
    + `${props.removed.length} eliminada(s), ${props.changed.length} cambiada(s), ${props.renamed.length} renombrada(s). `
    + `Clases: ${classes.added.length} agregada(s), ${classes.removed.length} eliminada(s).\n`,
  );
  return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  process.exit(main(process.argv));
}

export { main };
