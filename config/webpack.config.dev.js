const baseWebpackConfig = require("./webpack.base.config.js");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const OpenBrowserPlugin = require("open-browser-webpack-plugin"); // 启动服务后，自动打开浏览器插件

const PORT = 3000;
module.exports = merge(baseWebpackConfig, {
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            IS_DEVELOPMETN: true,
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${PORT}/`,
        }),
    ],
    /**
     * 使用开发调试工具，报错的时候可以定位到源码位置
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://doc.webpack-china.org/guides/development/#%E4%BD%BF%E7%94%A8-source-map
     */
    devtool: "cheap-module-source-map",
    devServer: { //通过来自「webpack-dev-server」的这些选项，能够通过多种方式改变其行为。
        port: PORT, //指定监听的端口号
        contentBase: path.join(__dirname, "dist"), // 告诉服务器从哪来提供内容。只有在你想要提供静态文件时才需要。
        publicPath: "/", //用于确定从哪里提供bundle，并且此选项优先
        compress: true, //一切服务都启用「gzip」压缩
        host: "localhost",
        //host:"172.16.1.91",//默认是一个localhost.如果希望外部服务器可以访问，指点成自己的电脑的ip地址，https://doc.webpack-china.org/configuration/dev-server/#devserver-host-cli-
        //quiet:true,//除了初始化启动信息之外的任何内容都不会被打印到控制台。这也就意味着来自webpack的错误或警告在控制台不可见
    },
});
