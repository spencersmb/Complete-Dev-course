var LiveReloadPlugin = require('webpack-livereload-plugin');
var options = {
  port: 35729
};
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    //tell where everything is
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss',
    },
    extensions: [
      '', '.js', '.jsx', '.html'
    ]
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new LiveReloadPlugin(options),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  module: {
    //loaders
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader:{
    includePaths: [
        path.resolve( __dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
