/**
 * check-css-vars.mjs
 *
 * Comprueba que el CSS compilado no declara ni referencia custom properties
 * con el nombre mal formado. El caso que motiva el check son dos erratas de
 * interpolación que llegaron al CSS publicado y se corrigieron en #1117:
 *
 *   var(--bs---bs-ref-spacer-4)   // src/style/components/_d-carousel.scss
 *   var(--bs-bs-gray-400)         // src/style/abstracts/variables/_forms.scss
 *
 * Las dos vienen de escribir `--#{$prefix}` o `bs-` dentro de un nombre que ya
 * lleva el prefijo. Sass las interpola sin quejarse y stylelint no las ve
 * porque son nombres válidos a nivel de sintaxis: el síntoma es que `var()`
 * cae a su respaldo, o deja la declaración inválida si no lo tiene, y la regla
 * pierde el valor que pretendía usar.
 *
 * Que una errata así no se vea no quiere decir que no esté: las dos de #1117
 * resolvían al mismo valor que ahora porque otra declaración las tapaba (un
 * `margin: auto` en la misma regla, un `color … !important` más abajo). De ahí
 * que el check mire el nombre y no el render.
 *
 * Reglas:
 * - `prefijo-duplicado`: el nombre empieza por `--bs-bs-`.
 * - `segmento-vacio`: el nombre lleva `--` después del `--` inicial, o termina
 *   en `-`. Cubre `--bs---bs-ref-spacer-4`.
 *
 * Solo mira nombres de custom property —declaraciones `--nombre:` y
 * referencias `var(--nombre)`—, no el texto suelto: hay clases BEM con doble
 * guion (`.react-datepicker__header--time--only`) que no son un problema.
 *
 * Uso:
 *   node scripts/check-css-vars.mjs [dist/css/dynamic-ui.css …]
 *
 * Sin argumentos comprueba los dos artefactos que genera `npm run build:scss`.
 * Sale con 1 si encuentra algún nombre mal formado.
 */

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// El prefijo con el que Dynamic compila Bootstrap ($prefix en
// src/style/abstracts/_variables.scss).
const PREFIX = 'bs';

// Ruta relativa si el archivo cuelga del cwd; absoluta si no (un CSS de otra
// versión, por ejemplo), para no imprimir una ristra de `../`.
const display = (file) => {
  const relative = path.relative(process.cwd(), file);
  return relative.startsWith('..') ? file : relative;
};

const DEFAULT_FILES = [
  'dist/css/dynamic-ui.css',
  'dist/css/dynamic-ui.min.css',
];

// Declaración `--nombre:` y referencia `var(--nombre)`. El nombre de una custom
// property admite más caracteres, pero el CSS compilado solo usa estos.
const DECLARATION = /(?<![\w-])(--[\w-]*)\s*:/g;
const REFERENCE = /var\(\s*(--[\w-]*)/g;

/**
 * El nombre que probablemente se quería: colapsa los guiones repetidos y el
 * prefijo duplicado, las dos erratas, hasta que no queda ninguna.
 */
function suggest(name) {
  let fixed = name;
  let previous;
  do {
    previous = fixed;
    fixed = `--${fixed.slice(2).replace(/-{2,}/g, '-').replace(/-$/, '')}`;
    if (fixed.startsWith(`--${PREFIX}-${PREFIX}-`)) {
      fixed = `--${PREFIX}-${fixed.slice(`--${PREFIX}-${PREFIX}-`.length)}`;
    }
  } while (fixed !== previous);
  return fixed;
}

/**
 * @returns {{ rule: string, message: string } | undefined}
 */
function malformed(name) {
  const rule = (() => {
    if (name.startsWith(`--${PREFIX}-${PREFIX}-`)) return 'prefijo-duplicado';
    if (name.slice(2).includes('--') || name.endsWith('-')) return 'segmento-vacio';
    return undefined;
  })();
  if (!rule) return undefined;
  const detail = rule === 'prefijo-duplicado'
    ? `lleva el prefijo --${PREFIX}- dos veces`
    : 'lleva un segmento vacío';
  return { rule, message: `${name}: ${detail}; probablemente se quería ${suggest(name)}` };
}

/**
 * Nombres mal formados en el contenido de un CSS, con la línea en la que están.
 * @returns {{ line: number, name: string, rule: string, message: string }[]}
 */
export function checkCss(content) {
  const problems = [];
  const seen = new Set();
  const lineOf = (index) => content.slice(0, index).split('\n').length;

  // matchAll clona el literal antes de recorrerlo, así que no hay lastIndex
  // compartido entre llamadas.
  [DECLARATION, REFERENCE].forEach((pattern) => {
    [...content.matchAll(pattern)].forEach(({ 1: name, index }) => {
      const problem = malformed(name);
      // Un mismo nombre mal formado aparece muchas veces (la declaración y
      // cada var() que lo lee). Con una ocurrencia basta para localizarlo.
      if (problem && !seen.has(name)) {
        seen.add(name);
        problems.push({ line: lineOf(index), name, ...problem });
      }
    });
  });

  return problems.sort((a, b) => a.line - b.line);
}

function main(argv) {
  const files = argv.slice(2);
  const targets = (files.length ? files : DEFAULT_FILES).map((file) => path.resolve(file));

  const missing = targets.filter((file) => !fs.existsSync(file));
  if (missing.length) {
    process.stderr.write(`No existe(n): ${missing.join(', ')}. Compila con \`npm run build:scss\`.\n`);
    return 1;
  }

  let count = 0;
  targets.forEach((file) => {
    const problems = checkCss(fs.readFileSync(file, 'utf8'));
    problems.forEach(({ line, rule, message }) => {
      process.stderr.write(`${display(file)}:${line}  [${rule}]  ${message}\n`);
    });
    count += problems.length;
  });

  if (count) {
    process.stderr.write(`\n${count} custom propertie(s) con el nombre mal formado en ${targets.length} archivo(s).\n`);
    return 1;
  }
  process.stdout.write(`${targets.length} archivo(s) sin custom properties mal formadas.\n`);
  return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  process.exit(main(process.argv));
}
