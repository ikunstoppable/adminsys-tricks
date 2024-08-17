const moment = require('moment')
const date = new moment().format('YYYYMMDDHHmmss')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // js 打包文件加上时间
  configureWebpack: config => {
    if (process.env.NODE_ENV==='production') {
      config.output.filename = `js/[name].${date}.js`
      config.output.chunkFilename = `js/[name].${date}.js`
    }
  },
  // css 打包文件加上时间
  css: {
    extract: {
      filename: `css/[name].${date}.css`,
      chunkFilename: `css/[name].${date}.css`
    },
  }
})
