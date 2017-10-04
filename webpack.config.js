var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  dev: path.join(__dirname, '/dev'),
  public: path.join(__dirname, '/public')
}

module.exports = {
  context: __dirname + "/dev/js",
  entry:'./index.js',
    
  output: {
    path:__dirname + '/public/js',
    filename: 'index.js',
  },
    
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',  
        query: {
          presets: ['env', 'react', "latest"]
        }
      },
      {
        test: /\.scss?$/,
        loader: 'style-loader!css-loader?url=false!sass-loader!autoprefixer-loader'
      }
    ],
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {test: /\.(jpe?g|png|gif)$/i, loader: "file-loader?name=../assets/images/[name].[ext]"}
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css'),
    new CopyWebpackPlugin([
      {from: __dirname + "/dev/assets", to: __dirname + "/public/assets"}
    ]),
    new CopyWebpackPlugin([
      {from: __dirname + "/dev/js/jQuery", to: __dirname + "/public/js"}
    ]),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      chunks: ['index'],
      template: PATHS.dev + '/index.pug'
    })
  ]
}   

