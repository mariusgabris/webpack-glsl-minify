const path = require('path');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.glsl$/,
        use: {
          loader: '../../',
          options: {
            stripVersion: true
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.glsl' ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  }
};