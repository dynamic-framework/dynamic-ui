/**
 * svg-vars.mjs
 *
 * Falla si algún `url("data:image/svg+xml…")` del CSS compilado lleva un
 * `var()` dentro.
 *
 * Un SVG servido como imagen se renderiza como un documento aislado y no
 * hereda las custom properties de la página: el `var()` se queda sin valor y
 * la propiedad cae a su valor inicial. No hay error en consola ni nada que lo
 * delate — `.navbar-toggler-icon` simplemente desaparecía, porque el valor
 * inicial de `stroke` es `none`.
 *
 * Ojo con cómo se busca: `escape-svg()` de Bootstrap codifica los paréntesis,
 * así que en el CSS compilado la referencia aparece como `var%28--x%29` y no
 * como `var(--x)`. Buscar sólo el literal no encuentra nada, y decodificar el
 * data URI antes de mirarlo tampoco sirve: si trae un `%` literal (un
 * `width='100%'`, por ejemplo) el decode falla y la referencia codificada se
 * escapa. Por eso se buscan las dos formas sobre el texto crudo.
 *
 * Uso:
 *   node scripts/svg-vars.mjs [ruta.css]        (por defecto dist/css/dynamic-ui.css)
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const DEFAULT_CSS = 'dist/css/dynamic-ui.css';

/**
 * Cada `url(...)` con un data URI de SVG, con su posición en el archivo.
 *
 * El cierre depende de las comillas: un SVG lleva comillas simples por dentro
 * (`xmlns='…'`), así que una expresión que pare en la primera comilla corta el
 * data URI por la mitad y no llega nunca al `var()`. Para `url("…")` el final
 * es la comilla doble; sólo el caso sin comillas acaba en `)`, y ahí los
 * paréntesis del contenido van codificados.
 */
function svgDataUris(css) {
  const found = [];
  const re = /url\(\s*(?:"(data:image\/svg\+xml[^"]*)"|'(data:image\/svg\+xml[^']*)'|(data:image\/svg\+xml[^)]*))\s*\)/g;
  let match = re.exec(css);
  while (match !== null) {
    found.push({ index: match.index, raw: match[1] ?? match[2] ?? match[3] });
    match = re.exec(css);
  }
  return found;
}

/** La declaración (`--x:` o `background-image:`) en la que cae una posición. */
function declarationAt(css, index) {
  const start = Math.max(0, css.lastIndexOf(';', index), css.lastIndexOf('{', index));
  const name = css.slice(start + 1, index).match(/([\w-]+)\s*:/);
  return name ? name[1] : '(desconocida)';
}

const lineAt = (css, index) => css.slice(0, index).split('\n').length;

/**
 * Una referencia a custom property, con el paréntesis literal o codificado:
 * `escape-svg()` de Bootstrap deja `var%28--x%29` en el CSS compilado.
 */
const VAR_REF = /var(?:\(|%28)(?:\s|%20)*(--[\w-]+)/g;

export function findSvgVars(css) {
  return svgDataUris(css).flatMap(({ index, raw }) => {
    const refs = [...raw.matchAll(VAR_REF)].map(([, v]) => v);
    if (refs.length === 0) return [];
    return [{
      declaration: declarationAt(css, index),
      line: lineAt(css, index),
      refs: [...new Set(refs)],
    }];
  });
}

function main(argv) {
  const file = path.resolve(argv[2] ?? DEFAULT_CSS);
  if (!fs.existsSync(file)) {
    process.stderr.write(`No existe ${file}. Corre \`npm run build:scss\` antes.\n`);
    return 1;
  }

  const hits = findSvgVars(fs.readFileSync(file, 'utf8'));
  if (hits.length === 0) {
    process.stdout.write(`${path.relative(process.cwd(), file)}: ningún SVG en data URI usa var().\n`);
    return 0;
  }

  process.stderr.write(
    `${hits.length} SVG en data URI con var() dentro, en ${path.relative(process.cwd(), file)}:\n\n`,
  );
  process.stderr.write(
    `${hits.map(({ declaration, line, refs }) => `  ${declaration} (línea ${line}): ${refs.join(', ')}`).join('\n')}\n`,
  );
  process.stderr.write(
    '\nUn SVG servido como imagen no hereda las custom properties de la página: '
    + 'ese var() se queda sin valor y la propiedad cae a su valor inicial.\n'
    + 'Usa el SVG como máscara y pon el color en un background-color '
    + '(ver src/style/base/_svg-icons.scss).\n',
  );
  return 1;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exit(main(process.argv));
}

export { main };
