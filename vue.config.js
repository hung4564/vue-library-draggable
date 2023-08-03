const path = require("path");

function getProdExternals() {
  return {
    vue: "vue",
    lodash: "lodash",
    "vue-drag-resize": "vue-drag-resize",
    "vue-material-design-icons": "vue-material-design-icons",
    "vue-resize-directive": "vue-resize-directive",
    "vue-material-design-icons/ArrangeBringForward.vue":
      "vue-material-design-icons/ArrangeBringForward.vue",
    "vue-material-design-icons/ArrangeSendBackward.vue":
      "vue-material-design-icons/ArrangeSendBackward.vue",
    "vue-material-design-icons/ArrowDownDropCircleOutline.vue":
      "vue-material-design-icons/ArrowDownDropCircleOutline.vue",
    "vue-material-design-icons/ArrowUpDropCircleOutline.vue":
      "vue-material-design-icons/ArrowUpDropCircleOutline.vue",
    "vue-material-design-icons/Close.vue":
      "vue-material-design-icons/Close.vue",
    "vue-material-design-icons/DragVariant.vue":
      "vue-material-design-icons/DragVariant.vue",
    "vue-material-design-icons/MenuLeft.vue":
      "vue-material-design-icons/MenuLeft.vue",
    "vue-material-design-icons/MenuRight.vue":
      "vue-material-design-icons/MenuRight.vue"
  };
}
module.exports = {
  publicPath:
    process.env.NODE_ENV === "webproduction" ? "/vue-library-draggable/" : "/",
  css: {
    extract: false
  },

  transpileDependencies: true,
  chainWebpack: (config) => {
    // These are some necessary steps changing the default webpack config of the Vue CLI
    // that need to be changed in order for Typescript based components to generate their
    // declaration (.d.ts) files.
    //
    // Discussed here https://github.com/vuejs/vue-cli/issues/1081
    if (process.env.NODE_ENV === "production") {
      config.module.rule("ts").uses.delete("cache-loader");

      config.module
        .rule("ts")
        .use("ts-loader")
        .loader("ts-loader")
        .tap((opts) => {
          opts.transpileOnly = false;
          opts.happyPackMode = false;
          return opts;
        });
    }
  },
  parallel: false,
  configureWebpack: {
    externals: process.env.NODE_ENV === "production" ? getProdExternals() : {},
    resolve: {
      alias: {
        "@components": path.join(__dirname, "src/components/"),
        "@constant": path.join(__dirname, "src/constant/"),
        "@utils": path.join(__dirname, "src/utils/")
      }
    }
  }
};
