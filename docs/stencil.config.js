import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
const componentCorePackage = '@modyo-dynamic/modyo-design-system';
export const config = {
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
      includeImportCustomElements: false,
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
};
//# sourceMappingURL=stencil.config.js.map
