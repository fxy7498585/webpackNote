# webpackNote
Webpack学习笔记



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', //设置生产模式  可以找出那些需要删除的“未使用代码(dead code)”，并在 bundle 中删除它们
    entry: './src/index.js', //入口文件
    // entry: {
    //     app: './src/index.js',
    //     print: './src/print.js'
    // },
    output: {
        filename: 'bundle[hash:8].js',
        // filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist') //绝对路径
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist', //将 dist 目录下的文件，作为可访问文件。
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), //清除dist文件夹
        new HtmlWebpackPlugin({
            title: 'html-webpack-plugin'
        })
    ]
}

