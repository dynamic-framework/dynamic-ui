#!/usr/bin/env node
//
// build-known-tokens — vuelca los nombres de custom properties que Dynamic UI
// define en su CSS compilado a known-tokens.json. theme-expand lo usa para
// comprobar que un `var(--bs-…)` de un theme apunta a algo que existe, y
// theme-validate para saber qué tokens define la librería.
//
//   node scripts/theme/build-known-tokens.mjs [dist/css/dynamic-ui.css]
//   node scripts/theme/build-known-tokens.mjs --check [dist/css/dynamic-ui.css]
//
// dist/ es build output y está gitignoreado, así que este script se corre a
// mano después de `npm run build:scss` (o contra el CSS de un tarball
// publicado) y el JSON resultante sí se versiona. `prepack` lo corre antes de
// `npm pack` y `npm publish` para que el JSON empaquetado con los binarios
// coincida con el CSS de esa versión.
//
// Con --check no escribe nada: compara la lista de tokens del CSS con la del
// JSON versionado y sale con 1 si difieren. No compara `dynamicUi`, porque la
// PR de release sube la versión del paquete sin regenerar el inventario; el
// JSON publicado la lleva al día porque `prepack` lo regenera. CI lo corre
// después del build para que el inventario no vuelva a quedar desfasado.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const DEFAULT_CSS = 'dist/css/dynamic-ui.css';
const OUT = new URL('./known-tokens.json', import.meta.url);

function main(argv) {
  const args = argv.slice(2);
  const check = args.includes('--check');
  const source = path.resolve(args.find((arg) => arg !== '--check') ?? DEFAULT_CSS);
  let css;
  try {
    css = fs.readFileSync(source, 'utf8');
  } catch (error) {
    process.stderr.write(`No se pudo leer ${source}: ${error.message}\n`);
    return 2;
  }

  const version = css.match(/dynamic-framework\s+([\d.]+)/)?.[1] ?? null;
  if (!version) {
    process.stderr.write(`${source} no lleva la cabecera de versión de Dynamic UI.\n`);
    return 2;
  }

  const tokens = [...new Set(css.match(/--bs-[A-Za-z0-9_-]+(?=\s*:)/g) ?? [])].sort();

  if (check) {
    let versioned;
    try {
      versioned = JSON.parse(fs.readFileSync(OUT, 'utf8')).tokens ?? [];
    } catch (error) {
      process.stderr.write(`No se pudo leer known-tokens.json: ${error.message}\n`);
      return 2;
    }
    const inJson = new Set(versioned);
    const inCss = new Set(tokens);
    const added = tokens.filter((token) => !inJson.has(token));
    const removed = versioned.filter((token) => !inCss.has(token));
    if (added.length === 0 && removed.length === 0) {
      process.stdout.write(`known-tokens.json coincide con el CSS: ${tokens.length} tokens.\n`);
      return 0;
    }
    process.stderr.write(
      `known-tokens.json no coincide con ${path.relative(process.cwd(), source)}.\n`
      + added.map((token) => `  + ${token}\n`).join('')
      + removed.map((token) => `  - ${token}\n`).join('')
      + 'Regenéralo con `npm run build:known-tokens` y versiona el resultado.\n',
    );
    return 1;
  }
  // Sin la ruta de entrada: era relativa al directorio desde el que se corriera
  // el script, así que el JSON versionado cambiaba según la máquina y llegó a
  // llevar dentro una ruta temporal. La procedencia que importa es la versión.
  const payload = {
    dynamicUi: version,
    count: tokens.length,
    tokens,
  };
  fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  process.stdout.write(`known-tokens.json: ${tokens.length} tokens de Dynamic UI ${version}.\n`);
  return 0;
}

process.exit(main(process.argv));
