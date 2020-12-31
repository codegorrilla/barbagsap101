const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 9000,
  },
    
  plugins: [
      // Only update what has changed on hot reload
      new webpack.HotModuleReplacementPlugin(),
  ],
    
  devtool: 'eval-source-map',
};