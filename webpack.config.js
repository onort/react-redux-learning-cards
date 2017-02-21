/* eslint-disable */
const webpack = require('webpack');

const config = {
  devtool: 'source-map',
  noInfo: true,
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/',
  },

  devServer: {
    inline: true,
    port: 8080,
    contentBase: './src',
    historyApiFallback: true,
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ],
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.NoErrorsPlugin(),
  ],
};

module.exports = config;
