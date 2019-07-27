const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
});
