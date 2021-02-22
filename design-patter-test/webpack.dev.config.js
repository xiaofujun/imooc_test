const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/design.js',
    // entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    target: ['web', 'es5'],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'release'), // 告诉服务器从何处提供内容，仅当您要提供静态文件时才需要这样做。
        open: true,  // Tells dev-server to open the browser after server had been started
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'index.html'
        })
    ]
}