/* eslint-disable indent */
/* eslint-disable no-undef */


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');

module.exports = validate({
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
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
        loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Github Finder',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new ExtractTextWebpackPlugin('[name]-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        // eslint-disable-next-line quote-props
        'NODE_ENV': '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
});
