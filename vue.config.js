const path = require('path')
// const { isDev, isProd } = require('./bundler-scripts/getEnv')
// console.log(isProd, isDev)

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  // https://cli.vuejs.org/ru/guide/webpack.html#добавnение-нового-загрузчика
  // config.module
  //   .rule('pug')
  //   .use('pug-plain-loader')
  //   .loader('pug-plain-loader')
  //   .tap((options = {}) => {
  //     options.basedir = 'src'
  //     return options
  //   })
  configureWebpack: {
    resolve: {
      alias: {
        src: resolveSrc('src'),
        assets: resolveSrc('src/assets'),
        components: resolveSrc('src/components'),
      },
    },
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['en', 'ru'],
      }),
    ],
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },
}
