/* eslint-disable import/no-extraneous-dependencies */
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import autoprefixer from 'autoprefixer';

const componentCorePackage = '@modyo-dynamic/modyo-design-system';

export const config: Config = {
  namespace: 'design-system',
  taskQueue: 'async',
  devServer: { initialLoadUrl: '/src' },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: '../modyo-design-system-react/src/components/proxies.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
    }),
    vueOutputTarget({
      componentCorePackage,
      proxiesFile: '../modyo-design-system-vue/src/proxies.ts',
      includeImportCustomElements: false, // TODO: enable this when change the vue plugin
      includePolyfills: false,
      includeDefineCustomElements: true, // TODO: disable this when change the vue plugin,
    }),
    angularOutputTarget({
      componentCorePackage,
      directivesProxyFile: '../modyo-design-system-angular/src/directives/proxies.ts',
      directivesArrayFile: '../modyo-design-system-angular/src/directives/proxies-list.ts',
      includeImportCustomElements: true,
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
        warn: true,
      }],
      includeGlobalScripts: false,
    },
    { type: 'docs-readme' },
  ],
  globalScript: 'src/global/initialize.ts',
  globalStyle: 'src/style/global-style.scss',
  plugins: [
    postcss({ plugins: [autoprefixer()] }),
    sass({
      injectGlobalPaths: [
        'src/style/global-path.scss',
      ],
    }),
  ],
};
