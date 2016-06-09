module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    //tell where everything is
    root: __dirname,
    alias: {
      Greeter: 'public/components/Greeter.jsx',
      GreeterMessage: 'public/components/GreeterMessage.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx'
    },
    extensions: [
      '', '.js', '.jsx'
    ]
  },
  module: {
    //loaders
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exlcude: /(node_modules|bower_components)/
      }
    ]
  }
};
