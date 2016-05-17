var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    Config = {
        sourceFolder: path.join(__dirname, '../src'),
        jsFolder: path.join(__dirname, '../src/js'),
        distFolder: path.join(__dirname, '../dist'),
        stylesFolder: path.join(__dirname, '../src/stylesheets'),
        webpackTemplates: path.join(__dirname, 'templates')
    };

module.exports = {
    devtool: 'source-map',
    noParse: /\.min\.js$/,
    entry: [
        Config.sourceFolder + '/main/index'
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
        extensions: ['', '.js', '.css', '.scss'],
        modulesDirectories: ['node_modules']
    },
    output: {
        path: Config.distFolder,
        filename: 'bundle.js'
    },
    postcss: function() {
        return [require('autoprefixer'), require('precss')];
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: Config.sourceFolder
        }, {
            test: /\.png$/,
            loaders: ['file']
        }, {
            test: /\.(css|scss)$/,
            loader: ExtractTextPlugin.extract('style-loader', [
                'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'postcss-loader',
                'sass-loader'
            ])
        }
    ]}
};