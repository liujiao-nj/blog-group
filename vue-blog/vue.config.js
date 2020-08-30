const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("api", resolve("src/api"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("store", resolve("src/store"));
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        resolve("src/styles/variables.less"),
        resolve("src/styles/mixin.less")
      ]
    }
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:7001/',
        changeOrigin: true
      }
    }
  }
};