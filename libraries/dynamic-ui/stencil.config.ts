/* eslint-disable import/no-extraneous-dependencies */
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

const componentCorePackage = '@dynamic-framework/ui';

export const config: Config = {
  namespace: 'dynamic-framework',
  taskQueue: 'async',
  devServer: { initialLoadUrl: '/src' },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: '../dynamic-ui-react/src/components/proxies.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
    }),
    vueOutputTarget({
      componentCorePackage,
      proxiesFile: '../dynamic-ui-vue/src/proxies.ts',
      includeImportCustomElements: false, // TODO: enable this when change the vue plugin
      includePolyfills: false,
      includeDefineCustomElements: true, // TODO: disable this when change the vue plugin,
    }),
    angularOutputTarget({
      componentCorePackage,
      directivesProxyFile: '../dynamic-ui-angular/src/directives/proxies.ts',
      directivesArrayFile: '../dynamic-ui-angular/src/directives/proxies-list.ts',
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
};
