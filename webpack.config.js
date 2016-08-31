const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');


module.exports = {
  context : srcPath,
  entry   : path.join(srcPath, 'js', 'client.js'),
  output  : {
    path     : buildPath,
    filename : 'bundle.js',
  },
  module : {
    loaders : [
      {
        test    : /\.js?$/,
        exclude : /(node_modules|bower_components)/,
        loader  : 'babel',
        query   : {
          presets : ['es2015', 'es2017', 'react'],
          plugins : ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
        },
      },
    ],
  },
};
