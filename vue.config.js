const path = require('path')

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        assets: resolveSrc('src/assets'),
        components: resolveSrc('src/components'),
        src: resolveSrc('src'),
      },
    },
    plugins: [
      // To strip all locales except “en”
      // new MomentLocalesPlugin(),

      // Or: To strip all locales except “en”, “es-us” and “ru”
      // (“en” is built into Moment and can’t be removed)
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
