const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
  },
  module: {
  
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    // new webpack.EnvironmentPlugin({
    //   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX: 'development'
    // }),
    new Dotenv({
    })
  ]
}
