/**
 * build-vanilla.mjs — bundles the framework-free behaviour layer for a CDN.
 *
 * ## Three formats, and why each exists
 *
 * - **ESM** (`dynamic.js`) is the one to use: `<script type="module">` defers
 *   on its own, so it never blocks rendering.
 * - **IIFE** (`dynamic.iife.js`) exists because a Liquid template cannot always
 *   emit `type="module"` — a widget injected into a page it does not control,
 *   or a template that has to work in an inline context. It defines `window.DF`
 *   and nothing else.
 * - **Per component** (`vanilla/tabs.js`, …) for a page that wants one
 *   behaviour and not the rest.
 *
 * ## Size is the constraint
 *
 * This ships to every page of a bank's site. The budgets below are per format
 * and per component, minified, and CI fails on a regression — the same
 * discipline `scripts/css/build.mjs` applies to the stylesheet, for the same
 * reason: nobody notices a bundle growing a kilobyte at a time.
 */

import { build } from 'esbuild';
import { gzipSync } from 'zlib';
import { readFileSync, readdirSync, mkdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src/vanilla');
const OUT = join(ROOT, 'dist/vanilla');

/**
 * Minified KB. Raised deliberately, with the reason, never quietly.
 *
 *   6 -> 8   The first figure was measured on a bundle that was missing two of
 *            its four behaviours: `sideEffects` in `package.json` let esbuild
 *            drop the bare side-effect imports for tabs and collapse, so 4.6 KB
 *            was the size of a build that did not work. 6.8 KB is the first
 *            honest measurement, plus the usual ~15% headroom.
 *
 *   8 -> 10  `collapse-toggle`: a trigger that lives outside the collapse it
 *            controls, mirroring the modal's `data-df-modal-open`. It adds a
 *            registry keyed by body id, a `toggle(id, expanded?)` export, and
 *            a second behaviour registration — 8.2 KB min / 3.0 KB gzip for
 *            the ESM build, 8.7 / 3.2 for the IIFE, which carries the global
 *            wrapper. 10 is that plus the usual headroom.
 */
const BUDGETS = {
  'dynamic.min.js': 10,
  'dynamic.iife.min.js': 10,
};

const TARGET = ['chrome111', 'edge111', 'firefox113', 'safari16.4'];

const kb = (bytes) => (bytes / 1024).toFixed(1);

/** Everything that defines a behaviour, so a page can take one on its own. */
const modules = readdirSync(SRC)
  .filter((file) => file.endsWith('.ts')
    // Not the entry point, not the machinery, and — the one that actually bit
    // — not a spec file, which bundles its whole test framework with it.
    && !file.endsWith('.spec.ts')
    && !['index.ts', 'registry.ts'].includes(file))
  .map((file) => file.replace(/\.ts$/, ''));

mkdirSync(OUT, { recursive: true });

async function bundle({ entry, outfile, format, globalName, minify }) {
  await build({
    entryPoints: [entry],
    outfile: join(OUT, outfile),
    bundle: true,
    format,
    globalName,
    target: TARGET,
    minify,
    sourcemap: !minify,
    legalComments: 'none',
    logLevel: 'silent',
  });
  return outfile;
}

const results = [];

for (const minify of [false, true]) {
  const suffix = minify ? '.min.js' : '.js';

  results.push(await bundle({
    entry: join(SRC, 'index.ts'),
    outfile: `dynamic${suffix}`,
    format: 'esm',
    minify,
  }));

  results.push(await bundle({
    entry: join(SRC, 'index.ts'),
    outfile: `dynamic.iife${suffix}`,
    format: 'iife',
    globalName: 'DF',
    minify,
  }));

  for (const name of modules) {
    results.push(await bundle({
      entry: join(SRC, `${name}.ts`),
      outfile: `${name}${suffix}`,
      format: 'esm',
      minify,
    }));
  }
}

/* ------------------------------------------------------------------ */

process.stdout.write(`\n${'file'.padEnd(26)}${'raw'.padStart(9)}${'min'.padStart(9)}${'gzip'.padStart(9)}${'budget'.padStart(11)}\n`);

let over = 0;
const seen = new Set();

for (const name of results) {
  if (name.endsWith('.min.js') || seen.has(name)) continue;
  seen.add(name);

  const minName = name.replace(/\.js$/, '.min.js');
  const raw = readFileSync(join(OUT, name));
  const min = readFileSync(join(OUT, minName));
  const gzip = gzipSync(min);
  const minKb = Number(kb(min.length));

  const budget = BUDGETS[minName];
  let verdict = '—';
  if (budget) {
    verdict = minKb <= budget ? `${budget} ok` : `${budget} OVER`;
    if (minKb > budget) over += 1;
  }

  process.stdout.write(
    `${name.padEnd(26)}${`${kb(raw.length)} KB`.padStart(9)}${`${kb(min.length)} KB`.padStart(9)}`
    + `${`${kb(gzip.length)} KB`.padStart(9)}${verdict.padStart(11)}\n`,
  );
}

/**
 * Every behaviour must actually be in the bundle.
 *
 * `package.json` declares `sideEffects` so a consumer can tree-shake the React
 * build — and that declaration made esbuild drop a bare `import './tabs'` from
 * this entry point as dead code. The behaviours disappeared from the bundle
 * with nothing to show for it: no error, no warning, a smaller file, and tabs
 * that did nothing on a real page.
 *
 * Each module now exports its behaviour and the entry imports the value, which
 * cannot be dropped. This asserts it stayed that way.
 */
const bundled = readFileSync(join(OUT, 'dynamic.min.js'), 'utf8');

/*
 * The names are READ from the source, not listed here.
 *
 * This used to carry `name === 'modal' ? ['modal', 'modal-open']` — a hand-kept
 * exception for the one module that registers two behaviours. A second such
 * module is exactly the case a hand-kept list misses, and the check's whole
 * value is that it notices a behaviour going missing: a list that has to be
 * updated alongside the thing it checks does not notice anything.
 */
const declared = modules.flatMap((module) => {
  const source = readFileSync(join(SRC, `${module}.ts`), 'utf8');
  return Array.from(source.matchAll(/:\s*Behaviour\s*=\s*\{[\s\S]*?name:\s*'([^']+)'/g))
    .map((match) => match[1]);
});

const missing = declared.filter(
  (name) => !bundled.includes(`"${name}"`) && !bundled.includes(`'${name}'`),
);

if (missing.length) {
  process.stderr.write(
    `\nvanilla: ${missing.join(', ')} did not reach the bundle — a side-effect import `
    + 'was almost certainly tree-shaken away; export the behaviour and import the value\n',
  );
  process.exit(1);
}

process.stdout.write(`\nvanilla: ${declared.length} behaviour(s) — ${declared.join(', ')}, all present in the bundle\n`);

if (over) {
  process.stderr.write(`\nvanilla: ${over} file(s) over budget\n`);
  process.exit(1);
}
process.stdout.write('vanilla: all files within budget\n');
