const configuration = process.env.NODE_ENV === 'development'
  ? {}
  : {
    configure: {
      optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: {
              name: 'raw',
              priority: 1,
              test: /[\\/](@stencil[\\/]core|date-fns|react-datepicker|i18next|react-i18next)[\\/]/,
            },
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: 0,
              name: 'app-modules',
            },
            modules: {
              test: /.*/,
              name: 'app-chunks',
              priority: -1,
            },
          },
        },
      },
    },
  };

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    ...configuration,
  },
};
