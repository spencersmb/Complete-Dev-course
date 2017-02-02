var LiveReloadPlugin = require('webpack-livereload-plugin');
var options = {
  port: 35729
};
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    //tell where everything is
    root: __dirname,
    modulesDirectories: [
        'node_modules',
        './app/components',
        './app/api'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      storeConfig: 'app/store/store.config.jsx',
      TodoApi: 'app/api/Todo.api.jsx',
      TodoApp: 'app/components/TodoApp.jsx',
      TodoList: 'app/components/TodoList.jsx',
      TodoAdd: 'app/components/TodoAdd.jsx',
      TodoSearch: 'app/components/TodoSearch.jsx',
      TodoItem: 'app/components/TodoItem.jsx'
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
