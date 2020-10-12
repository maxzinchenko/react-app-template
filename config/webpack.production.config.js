const merge = require('webpack-merge');
const path = require('path');

module.exports = merge([{
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.[hash].js'
  }
}]);
