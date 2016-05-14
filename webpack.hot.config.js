
module.exports = {
  devtool: "cheap-module-eval-source-map", // http://webpack.github.io/docs/configuration.html#devtool
  proxy:  null , // http://webpack.github.io/docs/webpack-dev-server.html#api
  devServer: true,
  /*https: true,*/
  minimize: false,
  hotComponents: true,
  bower: true,
  debug: true,
  baseLanguage: "en",
};
