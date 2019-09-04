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
  erro
    ? console.log('Erro no Servidor => ', erro)
    : console.log(`Webpack Developer Server Ativo na Porta ${PORT}`)
})
