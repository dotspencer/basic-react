var path = require('path');
var htmlPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

var htmlPluginConfig = new htmlPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: true
});

var extractTextPluginConfig = new extractTextPlugin('style.css');


module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'done.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [htmlPluginConfig, extractTextPluginConfig]
}
