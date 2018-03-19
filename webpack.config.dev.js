'usr strict'
var merge = require('webpack-merge')
var common = require('./webpack.config.common')
var webpack = require('webpack')
var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(common.srcPath, 'index.js'),
  ],
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: common.indexHtml,
      inject: 'body',
      favicon: path.join(imagePath, 'menu-logo-icon.png'),
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR全局启用
    new webpack.NamedModulesPlugin(), // 在HMR更新的浏览器控制台中打印更易读的模块名称
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
    clientLogLevel: 'none',
    port: 3000,
    stats: {
      colors: true
    },
    proxy: {
      '/api/v1/*': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
    host: '0.0.0.0',
    disableHostCheck: true,
  }
})