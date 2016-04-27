var path = require('path'),
    Config = {
        testsFolder: path.join(__dirname, '../test')
    };

module.exports = {
    entry: [
        'mocha!' + Config.testsFolder + '/main.js'
    ],
    output: {
        path: Config.testsFolder,
        filename: 'spec.js',
        publicPath: '/test/'
    },
    devServer: {
        port: 4000,
        contentBase: Config.testsFolder
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    }
};
