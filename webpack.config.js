var webpack = require('webpack');
var path = require('path');

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
            include: /\.pug/,
            loader: ['raw-loader', 'pug-html-loader'],
            publicPath: '/public'
         }
      ]
   }
}   
