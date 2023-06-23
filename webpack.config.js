const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'prod.js',
    path: path.resolve(__dirname, 'dist'),
  },
};