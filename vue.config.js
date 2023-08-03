const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // css: {
  //   loaderOptions: {
  //       sass: {
  //           additionalData: `
  //               @import "@/src/assets/scss/import.scss";
  //           `
  //       }
  //   }
  // },
  publicPath: '/find-house',
  outputDir: 'docs'
})