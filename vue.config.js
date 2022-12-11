const path = require("path");
module.exports = {
  css: {
    extract: false
  },

  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.join(__dirname, "src/components/"),
        "@constant": path.join(__dirname, "src/constant/"),
        "@utils": path.join(__dirname, "src/utils/")
      }
    }
  }
};
