module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: '/Users/Mahsa_Surface/Desktop/Projects/react-redux-weather-app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: '/'
  }
};
