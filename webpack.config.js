const path = require('path');
const webpack = require("webpack");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [ './index.js', ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ],
            },
            {
                test: /.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000' }
        ]
    },

    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};
