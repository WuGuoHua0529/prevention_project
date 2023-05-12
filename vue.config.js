const { defineConfig } = require('@vue/cli-service')
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    // ? '/prevention-project/' 切換
    ? './together/'
    : '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@assets', resolve('./src/assets'))
      .set('@components', resolve('./src/components'))
      .set('@views', resolve('./src/views'))
  }
})
