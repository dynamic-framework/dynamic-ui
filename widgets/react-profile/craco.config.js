const webpack = require('webpack');

module.exports = {
  webpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  }
}
