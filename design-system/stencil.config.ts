import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
// @ts-ignore
import autoprefixer from 'autoprefixer';

const componentCorePackage = '@modyo/design-system';

export const config: Config = {
  namespace: 'design-system',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: '../libraries/react-design-system/src/components/proxies.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
    }),
    vueOutputTarget({
      componentCorePackage,
      proxiesFile: '../libraries/vue-design-system/src/proxies.ts',
      includeImportCustomElements: false, // TODO: enable this when change the vue plugin
      includePolyfills: false,
      includeDefineCustomElements: true, // TODO: disable this when change the vue plugin,
    }),
    angularOutputTarget({
      componentCorePackage,
      directivesProxyFile: '../libraries/angular-design-system/src/directives/proxies.ts',
      directivesArrayFile: '../libraries/angular-design-system/src/directives/proxies-list.ts',
      includeImportCustomElements: true
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [{
        src: '../scripts/custom-elements',
        dest: 'components',
        warn: true
      }],
      includeGlobalScripts: false
    },
    {
      type: 'docs-readme',
    }
  ],
  extras: {
    // dynamicImportShim: true,
    // initializeNextTick: true,
    // scriptDataOpts: true
  },
  globalScript: 'src/global/initialize.ts',
  globalStyle: 'src/global/root.scss',
  plugins: [
    postcss({
      plugins: [autoprefixer()]
    }),
    sass({
      injectGlobalPaths: [
        'src/style/abstracts/_+import.scss'
      ]
    })
  ]
};
