// var webpack = require("webpack");
var path = require("path");

module.exports = {
    mode: 'development', //development  or   production
    // devtool: 'source-map',
    entry: {
        test: './src/test.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
    // module: {
    //     rules: [{
    //         test: /\.js$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
    //         exclude: /(node_modules)/,
    //         use: [{
    //             loader: 'babel-loader',
    //             //配置参数;
    //             options: {
    //                 presets: ['es2015', 'react']
    //             }
    //         }],
    //     }]
    // }
}