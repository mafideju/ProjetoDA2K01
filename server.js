'use strict'

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(7001, err => {
  err ?
    console.log('Erro de Servidor =>', err) :
    console.log('Servidor Ativo na Porta 7001')
})
