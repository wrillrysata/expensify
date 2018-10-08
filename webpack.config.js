const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, 'public'),
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
        query: {
          presets: ['react', 'es2015']
        }
      },
    ]
  },
  /** 
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],**/
  devServer: {
    contentBase: '/src',
    port: 5000,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
};


/**module.exports = {
    devtool : 'cheap-module-eval-source-map'
};
**/