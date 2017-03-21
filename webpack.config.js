var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'app/static/dist');
var APP_DIR = path.resolve(__dirname, 'app/static/src');

var config = {
    externals: {
        jquery: 'jQuery',
        handsontable: 'Handsontable',
        c3: 'c3'
    },
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        publicPath: 'static/dist/',
        filename: 'bundle.js'
    },

    module: {


        loaders: [
            {test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},

            {test: /\.css$/, loader: 'style-loader!css-loader'},

            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: require.resolve('numbro'), loader: 'expose-loader?numbro'},
            {test: require.resolve('moment'), loader: 'expose-loader?moment'},
            {test: require.resolve('pikaday'), loader: 'expose-loader?Pikaday'},
            {test: require.resolve('zeroclipboard'), loader: 'expose-loader?ZeroClipboard'}
        ]
    }
};

process.traceDeprecation = true;

module.exports = config;