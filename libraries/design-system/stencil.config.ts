import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
// import { angularOutputTarget } from '@stencil/angular-output-target';

const componentCorePackage = '@modyo/design-system';

export const config: Config = {
  namespace: 'design-system',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: '../react-design-system/src/components/stencil-generated/index.ts',
      /*
        TODO: maybe is good idea to use this in false with
          includeImportCustomElements and https://stenciljs.com/docs/custom-elements
      */
      includeDefineCustomElements: true,
      includePolyfills: false
    }),
    vueOutputTarget({
      componentCorePackage,
      proxiesFile: '../vue-design-system/src/index.ts',
      /*
        TODO: maybe is good idea to use this in false with
          includeImportCustomElements and https://stenciljs.com/docs/custom-elements
      */
      includeDefineCustomElements: true,
      includePolyfills: false
    }),
    /*
    angularOutputTarget({
      componentCorePackage,
      directivesProxyFile: '../design-system-angular/src/directives/proxies.ts',
      directivesArrayFile: '../design-system-angular/src/directives/index.ts',
    }),
    */
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    /*
    {
      type: 'dist-custom-elements',
    },
    */
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
