var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'app/static/dist');
var APP_DIR = path.resolve(__dirname, 'app/static/src');

var config = {
    externals: {
        jquery: 'jQuery',
        handsontable: 'Handsontable'
    },
    entry: {fragmentintensity: APP_DIR + '/FragmentIntensity.jsx',
            chargestate: APP_DIR + '/ChargeState.jsx'},
    output: {
        path: BUILD_DIR,
        publicPath: 'static/dist/',
        filename: '[name].js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        })
    ],

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