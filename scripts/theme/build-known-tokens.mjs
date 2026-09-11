#!/usr/bin/env node
//
// build-known-tokens — vuelca los nombres de custom properties que Dynamic UI
// define en su CSS compilado a known-tokens.json, que theme-expand usa para
// comprobar que un `var(--bs-…)` de un theme apunta a algo que existe.
//
//   node scripts/theme/build-known-tokens.mjs [dist/css/dynamic-ui.css]
//
// dist/ es build output y está gitignoreado, así que este script se corre a
// mano después de `npm run build:scss` (o contra el CSS de un tarball
// publicado) y el JSON resultante sí se versiona.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const DEFAULT_CSS = 'dist/css/dynamic-ui.css';
const OUT = new URL('./known-tokens.json', import.meta.url);

function main(argv) {
  const source = path.resolve(argv[2] ?? DEFAULT_CSS);
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
  const payload = {
    dynamicUi: version,
    source: path.relative(process.cwd(), source),
    count: tokens.length,
    tokens,
  };
  fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  process.stdout.write(`known-tokens.json: ${tokens.length} tokens de Dynamic UI ${version}.\n`);
  return 0;
}

process.exit(main(process.argv));
