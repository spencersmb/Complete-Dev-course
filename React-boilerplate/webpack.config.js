var LiveReloadPlugin = require('webpack-livereload-plugin');
var options = {
  port: 35729
};

module.exports = {
  entry: ['./app/app.jsx'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    //tell where everything is
    root: __dirname,
    alias: {
    },
    extensions: [
      '', '.js', '.jsx', '.html'
    ]
  },
  plugins: [
    new LiveReloadPlugin(options)
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
  }
};
