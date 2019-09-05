/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const config = require('./webpack.config');

const PORT = 7711;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
}).listen(PORT, (erro) => {
  // eslint-disable-next-line no-unused-expressions
  erro
    ? console.log('Erro no Servidor => ', erro)
    : console.log(chalk.bgGreen.whiteBright.bold(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n+                                                        +\n+      Webpack Developer Server Ativo na Porta ${PORT}      +\n+                                                        +\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`));
});
