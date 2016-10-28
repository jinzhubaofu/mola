/**
 * @file webpack 开发配置
 * @author leon <ludafa@outlook.com>
 */

/* eslint-disable fecs-no-require */

const path = require('path');

const config = {
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.join(__dirname, '../lib'),
        publicPath: '/',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: 'eval-source-map'
};


module.exports = config;
