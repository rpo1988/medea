const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    stratio: path.resolve(__dirname, 'src/style/templates/stratio/stratio.scss'),
    sanitas: path.resolve(__dirname, 'src/style/templates/sanitas/sanitas.scss')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'medea.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader: 'file-loader?name=assets/img/[name].[ext]'
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].scss'
    })
  ]
};
