var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/static/dist');
var APP_DIR = path.resolve(__dirname, 'app/static/src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],


    module: {
        loaders: [
            {test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},

            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"},
            {test: require.resolve('numbro'), loader: 'expose-loader?numbro'},
            {test: require.resolve('moment'), loader: 'expose-loader?moment'},
            {test: require.resolve('pikaday'), loader: 'expose-loader?Pikaday'},
            {test: require.resolve('zeroclipboard'), loader: 'expose-loader?ZeroClipboard'}
        ]
    }
};

process.traceDeprecation = true;

module.exports = config;