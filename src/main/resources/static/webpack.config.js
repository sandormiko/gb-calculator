var webpack = require('webpack');
module.exports = {
    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'main': './app/main.ts',
        'client': './app/client.ts'
    },
    devtool: "source-map",
    output: {
        path: './dist',

        filename: '[name].js'

    },
    resolve: {
        extensions: ['', '.ts', '.js', '.css']
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loaders: ['ts-loader'],
            exclude: [/node_modules/],
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]
    }
    /*,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.js$/,
            minimize: true,
            warning : false,
            comments: false
        })
    ]*/
};
