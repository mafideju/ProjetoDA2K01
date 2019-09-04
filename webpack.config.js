/* eslint-disable indent */
/* eslint-disable no-undef */


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');

module.exports = validate({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:7711',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: '',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel',
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Github Finder',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  // devtools: 'source-map',
});
