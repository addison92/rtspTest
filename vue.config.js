const path = require("path");
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/map-demo/",
  // 将构建好的文件输出到哪里
  outputDir: "dist",
  // 放置静态资源的地方 (js/css/img/font/...)
  // 是否为生产环境构建生成 source map？
  productionSourceMap: true,
  // 配置 webpack-dev-server 行为。
  chainWebpack: config => {
    // 修改文件引入自定义路径
    config.resolve.alias.set("@", resolve("src"));
  },
  lintOnSave: false,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 9080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      "/pc": {
        // target: 'http://49.235.227.112:8888/pc',   //代理接口
        target: "http://118.89.155.154:6080/pc", //代理接口
        // target: 'http://192.168.0.119:9016/pc',  //大伟 //代理接口
        // target: 'http://192.168.0.114:9016/pc', //长干  //代理接口
        changeOrigin: true,
        pathRewrite: {
          "^/pc": ""
        }
      }
    }
  }
};
