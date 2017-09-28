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
          loader: 'style-loader!css-loader?url=false!sass-loader'
        },
        { 
          test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/, loader: 'url-loader?limit=100000' 
        },
        { 
          test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file" 
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
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css'),
    new CopyWebpackPlugin([
      {from: __dirname + "/dev/assets", to: __dirname + "/public/assets"}
    ]),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      chunks: ['index'],
      template: PATHS.dev + '/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: '../second.html',
      chunks: ['second'],
      template: PATHS.dev + '/second.pug'
    })
  ]
}   

