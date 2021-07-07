const path = require('path');

const config = {
    context: __dirname,
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
      path: path.resolve(process.cwd(), "dist"),
      filename: "bundle.js",
    },
    mode: 'development',
    devServer: {
      publicPath: '/dist',
      proxy: {
        '/': 'http://localhost:3000/',
      },
    },
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
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    node: {
      global: true,
    }
  }

module.exports = config;