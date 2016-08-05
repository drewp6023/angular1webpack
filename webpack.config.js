var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './app');

module.exports = {
    entry: './app/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    // plugins: [new webpack.optimize.UglifyJsPlugin({minimize: true})],
    module: {
        loaders: [
          {
            test: /\.js?$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['es2015']
            }
          },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          // { test: /\.jsx?$/, loader: "strip-loader?strip[]=console.log" }, // This loader strips code out - use for production build
        ]
    },
};