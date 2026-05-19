import { readFileSync } from 'fs';
import remarkGfm from 'remark-gfm';

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
      propFilter: (prop: any) => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  core: {
    disableTelemetry: true,
  },

  staticDirs: [
    './public',
    '../dist',
  ],

  viteFinal: async (config: any) => {
    const { version } = JSON.parse(readFileSync('./package.json', 'utf-8'));
    return {
      ...config,
      define: {
        ...config.define,
        // Injected into ApiTable at build time so each Storybook version
        // fetches its own api.json from the CDN versioned path.
        DYNAMIC_PACKAGE_VERSION: JSON.stringify(version),
      },
    };
  },
};