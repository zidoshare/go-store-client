'use strict'
const path = require('path')
module.exports =  {
  output:{
    filename:'bundle.[hash].js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'/',
    chunkFilename:'[name].chunk.js',
  },
  context:path.resolve(__dirname,'src'),
  resolve: {
    extensions: ['.js', '.jsx','.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
}