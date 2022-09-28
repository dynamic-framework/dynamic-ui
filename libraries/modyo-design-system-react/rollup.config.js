import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
  input: {
    index: 'dist-transpiled/index',
  },
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      extract: false,
      minimize: true,
    }),
    nodeResolve(),
  ],
  external: (id) => !/^(\.|\/)/.test(id),
};
