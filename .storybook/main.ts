import remarkGfm from 'remark-gfm';

import { enrichComponentsManifest, propFilter } from './manifest-docgen.ts';

export default {
  stories: [
    '../stories/**/*.mdx', 
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    }
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter,
    },
  },

  core: {
    disableTelemetry: true,
  },

  features: {
    componentsManifest: true,
  },
  experimental_manifests: async (existing: Parameters<typeof enrichComponentsManifest>[0]) => (
    enrichComponentsManifest(existing)
  ),

  staticDirs: [
    './public',
    '../dist',
  ]
};