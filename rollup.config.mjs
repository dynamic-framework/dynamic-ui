import { readdirSync, existsSync } from 'node:fs';
import nodeResolve from '@rollup/plugin-node-resolve';

const external = (id) => !/^(\.|\/)/.test(id);
const ROOT = 'dist-transpiled';

/**
 * Collects every publishable index as its own rollup entry.
 *
 * With a single entry, `preserveModules` shakes off the re-exports the root
 * entry does not need: `dist/esm/components/DCard/index.js` would only export
 * `default`, dropping DCardHeader/DCardBody/DCardFooter, and
 * `dist/esm/components/index.js` would not be emitted at all. Declaring each
 * index as an entry keeps every emitted file's export surface intact.
 */
function entriesFrom(dir, { indexInFolder }) {
  const base = `${ROOT}/${dir}`;
  if (!existsSync(base)) return {};
  const out = {};
  for (const name of readdirSync(base, { withFileTypes: true })) {
    if (indexInFolder) {
      if (!name.isDirectory()) continue;
      const file = `${base}/${name.name}/index.js`;
      if (existsSync(file)) out[`${dir}/${name.name}/index`] = file;
    } else {
      if (!name.isFile() || !name.name.endsWith('.js')) continue;
      if (name.name === 'index.js') continue;
      out[`${dir}/${name.name.replace(/\.js$/, '')}`] = `${base}/${name.name}`;
    }
  }
  return out;
}

const subpathInputs = {
  ...entriesFrom('components', { indexInFolder: true }),
  ...entriesFrom('contexts', { indexInFolder: false }),
  ...entriesFrom('hooks', { indexInFolder: false }),
  ...entriesFrom('utils', { indexInFolder: false }),
};

export default [
  /**
   * Historical outputs, unchanged:
   * - dist/index.esm.js  single-file ESM. It is published to the CDN by
   *   `publish-cdn.js` (`aws s3 sync ./dist/`), so consumers may reference it
   *   by physical path or URL.
   * - dist/index.js      CommonJS, resolved by `main`.
   */
  {
    input: {
      index: `${ROOT}/index`,
    },
    output: [
      {
        dir: 'dist/',
        entryFileNames: '[name].esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        dir: 'dist/',
        format: 'commonjs',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
    ],
    external,
  },
  /**
   * Per-module ESM output, resolved by `module`. One file per source module
   * lets the consumer's bundler drop whole modules — and the third-party
   * imports they carry — based on `"sideEffects": ["*.css"]`.
   */
  {
    input: {
      index: `${ROOT}/index.js`,
      ...subpathInputs,
    },
    output: {
      dir: 'dist/esm',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: ROOT,
      entryFileNames: '[name].js',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
    ],
    external,
  },
];
