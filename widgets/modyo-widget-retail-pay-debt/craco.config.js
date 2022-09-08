const webpack = require('webpack');

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
};
