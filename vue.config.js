const path = require('path')
// const { isDev, isProd } = require('./bundler-scripts/getEnv')
// console.log(isProd, isDev)

function resolveAlias(..._path) {
  /* rest */
  return path.join(__dirname, ..._path) // spread
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
  // chainWebpack: config => {
  //   config.resolve.alias.set('tests', path.resolve('tests'))
  // },
  configureWebpack: {
    resolve: {
      alias: {
        // '@': resolveAlias('src'), // no work(
        src: resolveAlias('src'),
        assets: resolveAlias('src', 'assets'),
        components: resolveAlias('src', 'components'),
      },
    },
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['en', 'ru'],
      }),
    ],
  },
  css: {
    sourceMap: true,
  },
}
