const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
      }, 
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
     
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      inject: 'body'
    }),
  ],
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: '/public',
    port: 5000
  }
};