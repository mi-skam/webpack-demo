const merge = require("webpack-merge");
const path = require('path');

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
});