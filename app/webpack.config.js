var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader',
                query: { presets: ['es2015','react','stage-3'] } //transform with babel-preset-es2015 , babel-preset-react
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css')
            }
        ]
       },
    plugins: [
        new ExtractTextPlugin('./css/style-react.css', {
            allChunks: true
        }),
        new webpack.optimize.DedupePlugin(), //Search for equal or similar files and deduplicate them in the output
        new webpack.optimize.OccurenceOrderPlugin(), //Assign the module and chunk ids by occurrence count
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {warnings: false} //disable message warnings
        }), //Minimize all JavaScript output of chunks
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
        
};