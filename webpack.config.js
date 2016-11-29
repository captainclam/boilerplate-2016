module.exports = {
  entry: './src/entry.js',
  output: {
    path: './dist/',
    filename: 'bundle.js',
    publicPath: ''
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus-loader'
      },
    ]
  }
}
