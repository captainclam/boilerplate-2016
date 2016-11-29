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
