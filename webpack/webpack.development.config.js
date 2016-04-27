var path = require('path'),
    webpack = require('webpack'),
    Config = {
        sourceFolder: path.join(__dirname, '../src'),
        jsFolder: path.join(__dirname, '../src/js'),
        distFolder: path.join(__dirname, '../dist')
    };

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/only-dev-server',
        Config.jsFolder + '/index'
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
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: Config.sourceFolder
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    }
}
