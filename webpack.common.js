const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/, /dist/],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(svg|png|gif|jpeg|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs'
                    }
                }
            }
        ]
    }
};
