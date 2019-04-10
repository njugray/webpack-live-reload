const path = require('path');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    app: ['./app.js'],
  },
  output: {
    path: path.join(__dirname, './build'),
    publicPath: 'build/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
