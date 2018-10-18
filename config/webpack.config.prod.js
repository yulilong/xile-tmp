const baseWebpackConfig = require("./webpack.base.config.js");
const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin"); // 清理dist目录

module.exports = merge(baseWebpackConfig, {
    plugins: [ //插件，具体的内容可以查看链接 -- https://doc.webpack-china.org/plugins/
        // 定义环境变量为生产环境
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            IS_DEVELOPMETN: false,
        }),
        // 自动清理dist目录, root: process.cwd()不能少，否则不能清理
        new CleanWebpackPlugin(
            [path.join(__dirname, "../dist/")], {
                root: process.cwd()
            }
        ),
        // 对生产环境的css进行压缩
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),

        //压缩js代码--链接 https://doc.webpack-china.org/plugins/uglifyjs-webpack-plugin/
        new UglifyJSPlugin({}),
    ],
});
