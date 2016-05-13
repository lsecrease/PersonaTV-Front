var path = require('path'),
    webpack = require('webpack'),
    Config = {
        sourceFolder: path.join(__dirname, '../src'),
        distFolder: path.join(__dirname, '../dist'),
        eslintFile: path.join(__dirname, '../.eslintrc')
    };

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/only-dev-server',
        Config.sourceFolder + '/main/index'
    ],
    output: {
        path: Config.distFolder,
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/static/'
    },
    devServer: {
        port: 3000,
        contentBase: Config.sourceFolder,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                APP_SECRET_KEY: JSON.stringify('XJ88U0t!jk{J{|GcWnFxbHdJ{zk}+F*;QpDkrUl$TXQ#2*8KjOC~No)Y|bt]B$b?'),
                DOMAIN: JSON.stringify('http://localhost:8000/api/')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    eslint: {
        configFile: Config.eslintFile
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: Config.sourceFolder
        }, {
            test: /\.js$/,
            loader: 'eslint-loader',
            include: Config.sourceFolder
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