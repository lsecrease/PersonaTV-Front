var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    Config = {
        srcFolder: path.join(__dirname, '../src'),
        jsFolder: path.join(__dirname, '../src/js'),
        distFolder: path.join(__dirname, '../dist'),
        stylesFolder: path.join(__dirname, '../src/stylesheets'),
        webpackTemplates: path.join(__dirname, 'templates')
    };

module.exports = {
    devtool: 'source-map',
    noParse: /\.min\.js$/,
    entry: [
        Config.jsFolder + '/index'
    ],
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: Config.webpackTemplates + '/index.html',
            inject: 'body'
        }),

        // css files from the extract-text-plugin loader
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        }),

        // set global vars
        new webpack.DefinePlugin({
            'process.env': {
                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify('production')
            }
        }),

        // optimizations
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            dropDebugger: true,
            dropConsole: true,
            compressor: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.scss']
    },
    output: {
        path: Config.distFolder,
        filename: 'bundle.js'
    },
    postcss: function() {
        return [autoprefixer, precss];
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: Config.jsFolder
        }, {
            test: /\.png$/,
            loaders: ['file']
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
            // loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
        }
    ]}
};