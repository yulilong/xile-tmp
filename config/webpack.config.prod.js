const baseWebpackConfig = require('./webpack.base.config.js');

const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');	// 清理dist目录

module.exports = merge(baseWebpackConfig,{
    plugins:[//插件，具体的内容可以查看链接 -- https://doc.webpack-china.org/plugins/
        // 自动清理dist目录
        new CleanWebpackPlugin(['dist']),
        new OptimizeCssAssetsPlugin({//对生产环境的css进行压缩
            cssProcessorOptions:{
                safe:true
            }
        }),
        new UglifyJSPlugin({//压缩js代码--链接 https://doc.webpack-china.org/plugins/uglifyjs-webpack-plugin/

        }),
    ],
})
