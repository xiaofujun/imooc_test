module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: './release/bundle.js',
        path: __dirname,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/ 
            }
        ]
    }
}