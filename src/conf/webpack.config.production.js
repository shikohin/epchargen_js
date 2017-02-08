/* eslint-env node */
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['./lib/client/entry.js'],
    },
    output: {
        path: './lib/static/js',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
    },
    module: {
        loaders: [
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
    plugins: []

    // plugins: [
    //   new ExtractTextPlugin('[name].css'),
    // ],
};
