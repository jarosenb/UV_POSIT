/**
 * Created by jakerosenberg on 3/12/17.
 */
var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'app/static/dist');
var APP_DIR = path.resolve(__dirname, 'app/static/src');

var config = {
    externals: {
        jquery: 'jQuery',
        handsontable: 'Handsontable',
        c3: 'c3'
    },
    devtool: 'source-map',
    entry: APP_DIR + '/FragmentIntensity.jsx',
    output: {
        path: BUILD_DIR,
        publicPath: 'static/dist/',
        filename: 'bundle.js'
    },

    plugins: [
        new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),

new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    ],


    module: {
        loaders: [
            {test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.(woff|woff2)$/, loader: "file-loader"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: require.resolve('numbro'), loader: 'expose-loader?numbro'},
            {test: require.resolve('moment'), loader: 'expose-loader?moment'},
            {test: require.resolve('pikaday'), loader: 'expose-loader?Pikaday'},
            {test: require.resolve('zeroclipboard'), loader: 'expose-loader?ZeroClipboard'}
        ]
    }
};


module.exports = config;