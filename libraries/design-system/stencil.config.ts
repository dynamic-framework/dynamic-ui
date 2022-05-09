import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

const componentCorePackage = '@modyo/design-system';

export const config: Config = {
  namespace: 'design-system',
  taskQueue: 'async',
  bundles: [
    { components: ['m-text'] },
    { components: ['m-button'] },
    { components: ['m-alert'] }
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: '../react-design-system/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: false
    }),
    vueOutputTarget({
      componentCorePackage,
      proxiesFile: '../vue-design-system/src/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: false
    }),
    angularOutputTarget({
      componentCorePackage,
      directivesProxyFile: '../angular-design-system/src/stencil-generated/components.ts',
      directivesArrayFile: '../angular-design-system/src/stencil-generated/index.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    }
  ]
};
