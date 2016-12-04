var webpack = require('webpack');

module.exports = {
    entry: {
      component: './src/component/component.js'
    },
    output: {
        path: __dirname + "/public/components",
        filename: '[name]/bundle.[name].js'
    },
    devtool: 'eval',
    devServer: {
      inline: true,
      contentBase: './public',
      port: 3333
    },
    module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }
      ]
    },
    plugins: []
};