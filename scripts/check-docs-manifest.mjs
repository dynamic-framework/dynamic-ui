/**
 * check-docs-manifest.mjs
 *
 * Comprueba el contenido de las páginas que se publican en
 * `manifests/docs.json`, que los agentes leen como documentación:
 *
 * - `prefers-color-scheme` no aparece en ninguna página, salvo en las que
 *   documentan los utilitarios `dark:`, que sí compilan con esa media query.
 * - En ninguna página, sin excepción, `@media (prefers-color-scheme…)` va
 *   seguido de `:root`, `html` o `body` redefiniendo `--bs-*`: Dynamic se
 *   compila con `$enable-dark-mode: false` y no tiene esquema oscuro global; un
 *   subárbol con su propia paleta es una zona `[data-bs-theme="<nombre>"]`.
 * - Ningún role (`--bs-primary`, `--bs-danger`…) recibe un hex: los colores se
 *   sobrescriben en el triplete `-rgb`.
 *
 * Uso:
 *   node scripts/check-docs-manifest.mjs [docs/manifests/docs.json]
 *   node scripts/check-docs-manifest.mjs --stories [stories]
 *
 * El primer modo lee el manifiesto que genera `npm run build:storybook`. El
 * segundo lee los MDX de `stories/`, que son el `content` publicado, sin
 * compilar Storybook. Los dos aplican la misma función, `checkDocs`. Sale con
 * 1 si alguna página incumple una regla.
 */

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Páginas que documentan los utilitarios `dark:`, generados con
// `@media (prefers-color-scheme: dark)` en src/style/abstracts/_utilities-dark.scss.
export const COLOR_SCHEME_ALLOWED = [
  'design-system-examples-dark-utilities--docs',
  'design-system-quick-start--docs',
];

const ROLES = 'primary|secondary|success|info|warning|danger|light|dark';

// Los comentarios de una región de código se cambian por espacios: no ocultan
// una regla ni separan una propiedad de su valor, y los índices siguen
// apuntando a la misma línea. Se aplica región por región (ver `stripRegions`):
// un `/*` sin cerrar llega hasta el final de su bloque, como en CSS, y no
// hasta el final de la página. Un
// `/*` dentro de una cadena (`content: "/*"`) no abre comentario; las cadenas
// siguen las reglas del escáner: comillas simples o dobles, `\` escapa y una
// cadena sin cerrar termina en el salto de línea.
function stripComments(content) {
  let out = '';
  let quote = null;
  let escaped = false;
  let i = 0;
  while (i < content.length) {
    const char = content[i];
    if (quote) {
      out += char;
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote || char === '\n') quote = null;
      i += 1;
    } else if (char === '/' && content[i + 1] === '*') {
      const close = content.indexOf('*/', i + 2);
      const end = close === -1 ? content.length : close + 2;
      out += content.slice(i, end).replace(/[^\n]/g, ' ');
      i = end;
    } else {
      if (char === '"' || char === "'") quote = char;
      out += char;
      i += 1;
    }
  }
  return out;
}

// Regiones de código de una página MDX, con su posición: los bloques con triple
// comilla, los `code={`…`}` de `<Source>` y el código en línea. Fuera de ellas
// las llaves son JSX o prosa y desordenarían la pila de selectores.
// - Un bloque abre con tres o más comillas invertidas o virgulillas en su propia
//   línea (con sangría, y detrás de una viñeta de lista `- ` o `1. `) y cierra
//   con el mismo carácter, al menos tantas veces:
//   una triple comilla en línea, como ```nombre``` en una frase, no lo abre ni
//   desplaza el emparejamiento de los siguientes. Sin cierre, como en
//   CommonMark, el bloque llega hasta el final de la página.
// - El contenido de cada `<style>` se lee también como región propia, esté en
//   un bloque HTML, en `<Source>` o en el MDX: dentro del bloque que lo
//   contiene, la etiqueta quedaría pegada al preludio de la primera regla.
function cssRegions(code) {
  const regions = [];
  const blank = (text, start, length) => text.slice(0, start) + ' '.repeat(length) + text.slice(start + length);
  // Los prefijos de cita (`> `, también anidados) se cambian por espacios del
  // mismo largo: un bloque dentro de una cita se reconoce igual y las líneas no
  // se mueven.
  const unquoted = code.replace(/^(?:[ \t]*>)+[ \t]?/gm, (prefix) => ' '.repeat(prefix.length));
  let rest = unquoted;
  [
    /^[ \t]*(?:(?:[-*+]|\d+[.)])[ \t]+)*(?<fence>(?<char>[`~])\k<char>{2,})[^\n`]*\n(?<body>[\s\S]*?)(?:^[ \t]*\k<fence>\k<char>*[ \t]*$|(?![\s\S]))/dgm,
    /code=\{\s*`(?<body>[\s\S]*?)`\s*\}/dg,
    /`(?<body>[^`\n]+)`/dg,
  ].forEach((pattern) => {
    [...rest.matchAll(pattern)].forEach((match) => {
      regions.push({ start: match.indices.groups.body[0], text: match.groups.body });
      rest = blank(rest, match.index, match[0].length);
    });
  });
  [...unquoted.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/dg)].forEach((match) => {
    regions.push({ start: match.indices[1][0], text: match[1] });
  });
  return regions;
}

// Parte `text` por los separadores que casan con `separator` fuera de paréntesis
// y corchetes: `:is(html, body)` es un solo selector y `[data-x="a b"]` un
// solo compuesto.
function splitTopLevel(text, separator) {
  const parts = [];
  let depth = 0;
  let current = '';
  [...text].forEach((char) => {
    if (char === '(' || char === '[') depth += 1;
    if (char === ')' || char === ']') depth -= 1;
    if (depth === 0 && separator.test(char)) {
      parts.push(current);
      current = '';
    } else {
      current += char;
    }
  });
  parts.push(current);
  return parts.map((part) => part.trim()).filter(Boolean);
}

// Argumentos de cada `:<nombre>(…)` del compuesto, y el compuesto sin ellos.
function extractPseudo(compound, names) {
  const args = [];
  let rest = '';
  let i = 0;
  while (i < compound.length) {
    const match = compound.slice(i).match(new RegExp(`^:(?:${names})\\(`, 'i'));
    if (match) {
      let depth = 1;
      let j = i + match[0].length;
      while (j < compound.length && depth > 0) {
        if (compound[j] === '(') depth += 1;
        if (compound[j] === ')') depth -= 1;
        j += 1;
      }
      args.push(compound.slice(i + match[0].length, j - 1));
      i = j;
    } else {
      rest += compound[i];
      i += 1;
    }
  }
  return { args, rest };
}

// Si una lista de selectores apunta a `:root`, `html` o `body` (`html.dark`,
// `.dark:root`, `html body`, `:is(body)`) y no a un descendiente suyo
// (`body .btn-primary`). Se mira el último compuesto de cada selector:
// - `:not(…)` y `:has(…)` no cambian el elemento al que apunta;
// - con un pseudoelemento (`body::before`) apunta al pseudoelemento;
// - `:is(…)`, `:where(…)` y `:matches(…)` apuntan a lo que apunten sus argumentos;
// - `:root` puede ir en cualquier posición del compuesto; `html` y `body`, como
//   selector de tipo, siempre al principio.
function targetsGlobal(selectorList) {
  return splitTopLevel(selectorList, /,/).some((selector) => {
    const compounds = splitTopLevel(selector.replace(/\s*([>+~])\s*/g, ' '), /\s/);
    const last = compounds[compounds.length - 1] ?? '';
    const { rest } = extractPseudo(last, 'not|has');
    // Con un pseudoelemento, lo declarado es del pseudoelemento, no del elemento.
    if (/::[\w-]|:(?:before|after|first-line|first-letter)(?![\w-])/i.test(rest)) return false;
    const { args, rest: own } = extractPseudo(rest, 'is|where|matches');
    return args.some(targetsGlobal)
      || /:root(?![\w-])/i.test(own) || /^(?:html|body)(?![\w-])/i.test(own);
  });
}

// Selector efectivo de una regla anidada: `&` se sustituye por `:is(<padre>)` y
// una regla sin `&` se lee como descendiente, `:is(<padre>) <regla>`.
function nestedSelector(preludes) {
  return preludes.reduce((parent, prelude) => {
    if (parent === null) return prelude;
    if (prelude.includes('&')) return prelude.replace(/&/g, `:is(${parent})`);
    return splitTopLevel(prelude, /,/).map((part) => `:is(${parent}) ${part}`).join(', ');
  }, null);
}

// En cualquier posición del preludio: si un bloque muestra otro bloque literal
// (```` con ```css dentro), la línea de apertura queda delante del `@media`.
// La página con los comentarios quitados dentro de cada región de código y el
// resto intacto. Un `/*` fuera de CSS, como `cp dist/* public/` en un bloque de
// shell o `dist/*` en una frase, no se empareja con el `*/` de otro bloque.
function stripRegions(content) {
  let out = content;
  cssRegions(content).forEach(({ start, text }) => {
    const end = start + text.length;
    out = out.slice(0, start) + stripComments(out.slice(start, end)) + out.slice(end);
  });
  return out;
}

// Con valor (`: dark`) o en forma booleana (`(prefers-color-scheme)`), y sin
// distinguir mayúsculas, como en CSS: `@MEDIA (Prefers-Color-Scheme: dark)`.
// Lo mismo vale para `:root`, `html`, `body` y las pseudoclases de `targetsGlobal`;
// los nombres de propiedad `--bs-*` sí distinguen mayúsculas.
const isColorSchemeMedia = (prelude) => /@media\b[^{;]*\(\s*prefers-color-scheme\s*[:)]/i.test(prelude);

// Índices de los `@media (… prefers-color-scheme …)` bajo los que una declaración
// `--bs-*` pertenece a una regla que apunta a `:root`, `html` o `body`. La pila
// conserva todo el contexto: reglas de fuera de la media query (`:root { @media
// … }`), `@media` o `@supports` anidados entre la regla y la declaración, y
// selectores con `&`.
function findColorSchemeRoot(content) {
  const hits = new Set();
  const regions = cssRegions(content)
    .map(({ start, text }) => ({ start, text: stripComments(text) }));
  regions.forEach(({ start, text }) => {
    const stack = [];
    let buffer = '';
    let bufferStart = 0;
    let quote = null;
    let escaped = false;
    const commit = () => {
      const media = stack.find((entry) => isColorSchemeMedia(entry.prelude));
      if (media && /^\s*--bs-[\w-]+\s*:/.test(buffer)) {
        // Una at-rule puede llevar delante la línea de apertura de un bloque.
        const rules = stack.map((entry) => entry.prelude).filter((prelude) => !/(?:^|\n)\s*@[\w-]/.test(prelude));
        const selector = nestedSelector(rules);
        if (selector && targetsGlobal(selector)) hits.add(media.index);
      }
      buffer = '';
    };
    [...text].forEach((char, i) => {
      // Dentro de una cadena (`content: "}"`) o tras `\`, llaves y punto y coma
      // son texto: no abren ni cierran reglas. Como en CSS, una cadena sin
      // cerrar termina en el salto de línea, y un apóstrofo suelto en prosa no
      // esconde el resto del bloque.
      if (escaped || quote) {
        buffer += char;
        if (escaped) escaped = false;
        else if (char === '\\') escaped = true;
        else if (char === quote || char === '\n') quote = null;
        return;
      }
      if (char === '\\' || char === '"' || char === "'") {
        if (!buffer.trim()) bufferStart = i;
        buffer += char;
        if (char === '\\') escaped = true;
        else quote = char;
        return;
      }
      if (char === '{') {
        stack.push({ prelude: buffer.trim(), index: start + bufferStart });
        buffer = '';
      } else if (char === '}') {
        commit();
        stack.pop();
      } else if (char === ';') {
        commit();
      } else {
        if (!buffer.trim() && /\S/.test(char)) bufferStart = i;
        buffer += char;
      }
    });
  });
  return [...hits];
}

const findAll = (pattern, { code = false } = {}) => (content) => (
  [...(code ? stripRegions(content) : content).matchAll(pattern)].map((match) => match.index)
);

const RULES = [
  {
    id: 'prefers-color-scheme',
    find: findAll(/prefers-color-scheme/gi),
    applies: (docId) => !COLOR_SCHEME_ALLOWED.includes(docId),
    message: 'menciona prefers-color-scheme; un subárbol con su propia paleta es una zona [data-bs-theme="<nombre>"]',
  },
  {
    id: 'color-scheme-root',
    find: findColorSchemeRoot,
    applies: () => true,
    message: 'redefine --bs-* en :root, html o body dentro de @media (prefers-color-scheme); Dynamic no tiene esquema oscuro global',
  },
  {
    id: 'role-hex',
    find: findAll(new RegExp(`--bs-(?:${ROLES})\\s*:\\s*#`, 'g'), { code: true }),
    applies: () => true,
    message: 'asigna un hex a un role; el color se sobrescribe en el triplete --bs-<role>-rgb',
  },
];

function lineOf(content, index) {
  return content.slice(0, index).split('\n').length;
}

/**
 * @param {Record<string, { content: string }>} docs Páginas por id de story.
 * @returns {{ docId: string, rule: string, line: number, message: string }[]}
 */
export function checkDocs(docs) {
  const problems = [];
  Object.entries(docs).forEach(([docId, { content }]) => {
    RULES.filter((rule) => rule.applies(docId)).forEach((rule) => {
      rule.find(content).forEach((index) => {
        problems.push({
          docId, rule: rule.id, line: lineOf(content, index), message: rule.message,
        });
      });
    });
  });
  return problems;
}

// Mismo id que Storybook da a una página MDX con `<Meta title="…" />`.
function storyIdFromTitle(title) {
  const slug = title.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  return `${slug}--docs`;
}

function listMdx(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listMdx(full);
    return entry.name.endsWith('.mdx') ? [full] : [];
  });
}

export function docsFromStories(dir) {
  return Object.fromEntries(listMdx(dir).map((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const title = content.match(/<Meta\s+title=["']([^"']+)["']/)?.[1];
    return [title ? storyIdFromTitle(title) : path.relative(dir, file), { content }];
  }));
}

function main(argv) {
  const args = argv.slice(2);
  let docs;
  if (args[0] === '--stories') {
    docs = docsFromStories(path.resolve(args[1] ?? 'stories'));
  } else {
    const manifestPath = path.resolve(args[0] ?? 'docs/manifests/docs.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (!manifest?.docs || typeof manifest.docs !== 'object') {
      process.stderr.write(`${manifestPath}: no tiene la forma { v, docs }.\n`);
      return 1;
    }
    docs = manifest.docs;
  }

  const problems = checkDocs(docs);
  problems.forEach(({
    docId, rule, line, message,
  }) => {
    process.stderr.write(`${docId}:${line}  [${rule}]  ${message}\n`);
  });
  const total = Object.keys(docs).length;
  if (problems.length) {
    process.stderr.write(`\n${problems.length} problema(s) en ${total} página(s).\n`);
    return 1;
  }
  process.stdout.write(`${total} página(s) sin problemas.\n`);
  return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  process.exit(main(process.argv));
}
