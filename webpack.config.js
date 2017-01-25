var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.tpl.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './app/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    port: 3001
  }
}
