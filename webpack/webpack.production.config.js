var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    Config = {
        source: path.join(__dirname, '../src'),
        vendor: path.join(__dirname, '../src/vendor'),
        dist: path.join(__dirname, '../dist'),
        templates: path.join(__dirname, 'templates')
    };

module.exports = {
    devtool: 'source-map',
    noParse: /\.min\.js$/,
    entry: [
        Config.source + '/main/index'
    ],
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: Config.templates + '/index.html',
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
                NODE_ENV: JSON.stringify('production'),
                JWPLAYER_KEY: JSON.stringify('73zSKjI3j1f/F/MjSlxihP0fByUyhqpicUehWQ==')
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
        modulesDirectories: ['node_modules'],
        alias: {
            jwplayer: Config.vendor + '/jwplayer/jwplayer.js'
        }
    },
    output: {
        path: Config.dist,
        filename: 'bundle.js'
    },
    postcss: function() {
        return [require('autoprefixer'), require('precss')];
    },
    externals: {
        'window': 'Window'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: Config.source
        }, {
            test: /jwplayer.js$/,
            loader: 'expose?jwplayer'
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