// const path = require('path')
const name = '流程图绘制'

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // TODO: Remember to change this to fit your need
  // lintOnSave: process.env.NODE_ENV === 'development',
  // pwa: {
  //   name: name
  // },
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'scss',
  //     patterns: [
  //       path.resolve(__dirname, 'src/styles/_variables.scss'),
  //       path.resolve(__dirname, 'src/styles/_mixins.scss')
  //     ]
  //   }
  // },
  // devServer: {
  //   port: 8081,
  //   disableHostCheck: true, // 跳过域名检查
  //   proxy: {
  //     '/api': {
  //       target: process.env.API_URL,
  //       changOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"]
    }
  },
  chainWebpack(config) {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name)
  }
}
