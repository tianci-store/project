/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-07 23:13:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 10:39:33
 * @FilePath: \web开发项目\shop_client\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
// import Vue from 'vue'
// 头部引入
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   // Vue.config.devtools = true,
  //   devtool: 'souce-map'
  // },
  devServer: {
    port: 80,
    host: '127.0.0.1',
    open: true,
    https: false,
    proxy: {
      '/server/register': {
        target: 'http://127.0.0.1:8023/',
        ws: true,
        changeOrigin: true
      },
      '/server/login': {
        target: 'http://127.0.0.1:8024/',
        ws: true,
        changeOrigin: true
      }
    }
  }
  // configureWebpack: (config) => {
  //   const plugins = []
  //   plugins.push(new NodePolyfillPlugin())
  // }
})
