var LiveReloadPlugin = require('webpack-livereload-plugin');
var options = {
  port: 35729
};
var webpack = require('webpack');

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
    alias: {
      Main: 'app/components/main.jsx',
      Nav: 'app/components/nav.jsx',
      Weather: 'app/components/weather.jsx',
      WeatherForm: 'app/components/weatherForm.jsx',
      WeatherResult: 'app/components/weatherResult.jsx',
      OpenWeatherMap: 'app/api/openWeatherMap.jsx',
      About: 'app/components/about.jsx',
      ErrorModal: 'app/components/errorModal.jsx',
      Examples: 'app/components/examples.jsx',
      applicationStyles: 'app/styles/app.scss'
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
        exlcude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
