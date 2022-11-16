const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 60668   //指定端口号以侦听
  },
  // lintOnSave: false
})
