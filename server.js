'use strict'

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const PORT = 7711;

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(PORT, erro => {
  erro ?
    console.log('Erro de Servidor =>', erro) :
    console.log(`Servidor Ativo na Porta ${PORT}`)
})
