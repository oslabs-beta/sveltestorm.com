const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
    context: __dirname,
    entry: './src/index.js',
    output: {
      path: path.resolve(process.cwd(), "dist"),
      filename: "bundle.js",
      publicPath: '/'
    },
    // mode: 'production',
    // devServer: {
    //   publicPath: '/dist',
    //   proxy: {
    //     '/': 'http://localhost:3000/',
    //   },
    // },
    module: {
      rules: [
        {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/plugin-transform-runtime"],
              cacheDirectory: true
            }
          }
        },
        {
          test: /.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|mov)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
          loader: 'file-loader'
        },
      ],
    },
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     template: path.resolve(__dirname, 'dist/index.html'),
    //     title: 'Production',
    //   }),
    //   new CopyWebpackPlugin({
    //     patterns: [{ from: path.resolve(__dirname, 'src/images'), to: 'src/images' }]
    //   })
    // ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
  }

module.exports = config;