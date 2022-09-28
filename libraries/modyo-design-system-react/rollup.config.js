import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: {
    index: 'dist-transpiled/index',
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
      preferConst: true,
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
  ],
  external: (id) => !/^(\.|\/)/.test(id),
};
