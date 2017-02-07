var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var cssnext = require('postcss-cssnext');
var nested = require('postcss-nested');
var doiuse = require('doiuse');
var wordwrap = require('wordwrap');

var colors = require('colors');

let sassExtract = new ExtractTextPlugin('css/app.css');

module.exports = {
    entry: {
        app: ['./src/js/app.js']
    },
    output: {
        path: require('path').resolve('build'),
        publicPath: '/',
        filename: 'js/app.js'
    },
    module: {
        loaders: [
            {
              test: /\.scss$/  ,
              loader: sassExtract.extract("css-loader!sass-loader")
            },
            {
              test: /\.(png|woff|woff2|eot|ttf|svg)$/,
              loader: 'url-loader?limit=100000'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015'] }
            }
        ]
    },
    plugins: [
      sassExtract,
      new CopyWebpackPlugin([
        {
          context: 'src',
          from: '**/*.html',
          to: '.'
        },
        {
          context: 'src',
          from: 'json/*.json',
          to: '.'
        }
      ])
    ],
};
