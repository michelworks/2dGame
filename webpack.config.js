const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./assets/js/index.js'  ],
  devtool: 'source-map',
  mode: "production",
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    libraryTarget: "umd",
    filename: 'main.js',
    path: path.resolve(__dirname, 'js')
  },
};
