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
 * Solo mira nombres de custom property, no el texto que los imita. Antes de
 * buscar, blanquea comentarios, cadenas y el contenido sin comillas de `url()`,
 * y luego exige que el nombre esté en posición de declaración —detrás de `{` o
 * de `;`— o dentro de un `var()`. Así no fallan por un nombre que no es tal:
 *
 *   .react-datepicker__header--time--only { … }   // clase BEM con doble guion
 *   .--bs-bs-gray-400:hover { … }                 // selector, no declaración
 *   .a::before { content: "var(--bs-bs-gray-400)" }
 *   /* historical var(--bs-bs-gray-400) *\/
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

// Comentario, cadena entre comillas y `url()` sin comillas: tramos donde un
// `--bs-bs-…` es texto, no código. El orden importa poco porque la alternancia
// se resuelve por la posición más a la izquierda, que es la que abre el tramo.
const NON_CODE = /\/\*[\s\S]*?\*\/|"(?:[^"\\\n]|\\[\s\S])*"|'(?:[^'\\\n]|\\[\s\S])*'|\burl\(\s*[^)"'\s][^)]*\)/gi;

// Declaración: el nombre va detrás de `{` o de `;`, que es la única posición en
// la que una custom property puede declararse. Un selector como
// `.--bs-bs-gray-400:hover` va detrás de `.`, así que no entra.
const DECLARATION = /[{;]\s*(--[\w-]*)\s*:/g;
const REFERENCE = /var\(\s*(--[\w-]*)/g;

/**
 * El CSS con los tramos que no son código sustituidos por espacios. No se
 * recortan: así los índices —y con ellos los números de línea— no se mueven.
 */
function code(content) {
  return content.replace(NON_CODE, (chunk) => chunk.replace(/[^\n]/g, ' '));
}

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
  const scanned = code(content);
  const lineOf = (index) => content.slice(0, index).split('\n').length;

  // matchAll clona el literal antes de recorrerlo, así que no hay lastIndex
  // compartido entre llamadas.
  [DECLARATION, REFERENCE].forEach((pattern) => {
    [...scanned.matchAll(pattern)].forEach(({ 1: name, index }) => {
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
