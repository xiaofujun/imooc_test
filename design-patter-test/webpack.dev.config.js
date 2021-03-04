const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js',
        environment: {
            // The environment supports arrow functions ('() => { ... }').
            arrowFunction: false,
            // The environment supports BigInt as literal (123n).
            bigIntLiteral: false,
            // The environment supports const and let for variable declarations.
            const: false,
            // The environment supports destructuring ('{ a, b } = obj').
            destructuring: false,
            // The environment supports an async import() function to import EcmaScript modules.
            dynamicImport: false,
            // The environment supports 'for of' iteration ('for (const x of array) { ... }').
            forOf: false,
            // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
            module: false,
        },
    },
    target: 'web',
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
        clientLogLevel: 'silent', // 当使用 inline mode 时， DevTools 会输出信息，例如：重新加载之前，出错之前或 Hot Module Replacement 被开启时。devServer.clientLogLevel 可能会导致日志过于冗余，你可以通过将其设置为 'silent' 来关闭日志
        proxy: {
            "/api": {
                target: "http://localhost:54199",
                pathRewrite: {"^/api" : "/src/demo/api"}, // 加上此语句，对应的服务器上的请求路径 不存在 '/api' 前缀
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'index.html'
        })
    ]
}