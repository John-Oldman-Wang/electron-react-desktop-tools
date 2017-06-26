
'use strict';

// var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包

module.exports = {
    entry: {
        main:__dirname + '/src/main.js'
    },
    output: {
        path: __dirname + '/build', //打包后的文件存放的地方
        filename: '[name].js' //打包后输出文件的文件名
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    externals: [
        (function () {
            var IGNORES = [
                'electron'
            ];
            return function (context, request, callback) {
                if (IGNORES.indexOf(request) >= 0) {
                    return callback(null, "require('" + request + "')");
                }
                return callback();
            };
        })()
    ]
    // postcss: [
    //     require('autoprefixer')    //调用autoprefixer插件,css3自动补全
    // ],
    // plugins: [
    //     new ExtractTextPlugin('main.css'),
    // ]

}
