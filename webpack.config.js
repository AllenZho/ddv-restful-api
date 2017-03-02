// var webpack = require("webpack")
var nodeExternals = require('webpack-node-externals')
var path = require('path')

module.exports = {
  target: 'node',
  devtool: 'sourcemap',
  entry: {
    'api': './lib/index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),  // 设置打包后的js的输出位置
    filename: '[name].js',  // 和入口文件的名字相同
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js'],
    alias: {  // 注册模块，以后用的时候可以直接requier("模块名")
    //    cookie: path.join(__dirname,"./static/js/jquery.cookie.js"),
    }
  },
  externals: [
    nodeExternals()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          ['es2015', { modules: false }],
          'stage-2'
        ],
        cacheDirectory: true
      }
    }]
  }
}
