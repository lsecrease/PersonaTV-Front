var path = require('path'),
    webpack = require('webpack'),
    Config = {
        source: path.join(__dirname, '../src'),
        vendor: path.join(__dirname, '../src/vendor'),
        dist: path.join(__dirname, '../dist'),
        eslintFile: path.join(__dirname, '../.eslintrc')
    };

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/only-dev-server',
        Config.source + '/main/index'
    ],
    output: {
        path: Config.dist,
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/static/'
    },
    devServer: {
        port: 3000,
        contentBase: Config.source,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                APP_SECRET_KEY: JSON.stringify('XJ88U0t!jk{J{|GcWnFxbHdJ{zk}+F*;QpDkrUl$TXQ#2*8KjOC~No)Y|bt]B$b?'),
                DOMAIN: JSON.stringify('http://localhost:8000/api/'),
                JWPLAYER_KEY: JSON.stringify('73zSKjI3j1f/F/MjSlxihP0fByUyhqpicUehWQ==')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    eslint: {
        configFile: Config.eslintFile
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            jwplayer: Config.vendor + '/jwplayer/jwplayer.js'
        }
    },
    externals: {
        'window': 'Window'
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: Config.source
        }, {
            test: /jwplayer.js$/,
            loader: 'expose?jwplayer'
        }, {
            test: /\.js$/,
            loader: 'eslint-loader',
            include: Config.source,
            exclude: Config.vendor
        }, {
            test: /\.png$/,
            loaders: ['file']
        }, {
            test: /\.(css|scss)$/,
            loaders: [
                'style',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'postcss',
                'sass'
            ]
        }]
    }
};