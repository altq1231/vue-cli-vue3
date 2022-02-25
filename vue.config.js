const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const { serverPort, clientServerPort } = require("../projectConfig");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/theme.less")],
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "./src"));
  },
  devServer: {
    port: clientServerPort,
    proxy: {
      "/api": {
        target: `http://10.8.104.7:${serverPort}`,
        secure: false,
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
