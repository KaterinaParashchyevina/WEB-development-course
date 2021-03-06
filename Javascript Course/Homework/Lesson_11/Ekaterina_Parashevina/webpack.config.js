var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [
           new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery'
        }),
    ],

};

