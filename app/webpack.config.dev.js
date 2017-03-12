var path = require('path');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var host = process.env.NODE_HOST || 'http://localhost';
var port = process.env.NODE_PORT || 8889;
var devUrl = host +':'+ port;

console.log(host, port, devUrl)

function getEntrySources(sources) {
    sources.push('webpack/hot/dev-server');
    return sources;
}

var config = {
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    entry: {
        bundle: getEntrySources([
            './src/index.js'
        ])
    },
    output: {
        publicPath: path.join(__dirname, 'public'),
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
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('./css/style-react.css', {
            allChunks: true
        }),
        new CleanWebpackPlugin(['public/css/style-react.css', 'public/js/bundle.js'], {
            root: path.join(__dirname, '/'),
            verbose: true, 
            dry: false
        })
    ],
    debug: true,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname),
        // historyApiFallback: true,
        // proxy: {
        //     '!/*.{css,js,hot-update.json}': {
        //         target: devUrl,
        //         secure: false,
        //         // changeOrigin: true
        //     }
        // },
        // compress: true,
        port: port,
        progress: true,
        hot: true,
        inline: true,
        stats: {
            assets: true,
            colors: true,
            version: false,
            hash: false,
            timings: true,
            chunks: true,
            chunkModules: false,
            // https: true,
        }
    }
};

module.exports = config;