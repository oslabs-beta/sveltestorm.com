const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
    entry: './client/index.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            // out of the box, webpack only understands JavaScript files
            // a loader converts the file to a valid module
            // loaders enable you to use all kinds of file types
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['@babel/preset-env', {
                          "targets": "defaults" 
                        }],
                        '@babel/preset-react'
                      ]
                    }
                  },]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: 'React Webpack Boilerplate',
            template: path.resolve(__dirname, './template/index.html')
        }),
        new MiniCssExtractPlugin()
    ]
}

module.exports = config;