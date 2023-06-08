const path = require("path");
module.exports = {
  publicPath:
    process.env.NODE_ENV === "webproduction"
      ? "/vue-library-draggable/" // Thay tên repository của các bạn vào đây nhé
      : "/",
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
