const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    login: './src/js/login.js',
    register: './src/js/register.js',
    userDetail: './src/js/user-detail.js',
    petDetail: './src/js/pet-detail.js',
    productDetail: './src/js/product-detail.js',
    favorites: './src/js/favorites.js',
    shoppingCart: './src/js/shopping-cart.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // Genera un archivo JS separado para cada entrada
    clean: true, // Limpia la carpeta dist antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // Regla para .scss y .sass
        use: [
          'style-loader', // Inyecta CSS al DOM
          'css-loader', // Convierte CSS a módulos de CommonJS/Interpreta @import y url() en CSS
          'sass-loader' // Convierte/Compila SASS a CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/login.html',
      filename: 'login.html',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/register.html',
      filename: 'register.html',
      chunks: ['register']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/user-detail.html',
      filename: 'user-detail.html',
      chunks: ['userDetail']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/pet-detail.html',
      filename: 'pet-detail.html',
      chunks: ['petDetail']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/product-detail.html',
      filename: 'product-detail.html',
      chunks: ['productDetail']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/favorites.html',
      filename: 'favorites.html',
      chunks: ['favorites'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/shopping-cart.html',
      filename: 'shopping-cart.html',
      chunks: ['shoppingCart'],
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // En Webpack 5 es 'static' en lugar de 'contentBase'
    port: 9000,
    compress: true,
    open: true,
    hot: true,
  },
};
