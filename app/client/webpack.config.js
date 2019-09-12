const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(jpe?g|png|svg|woff2|woff|ttf)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}