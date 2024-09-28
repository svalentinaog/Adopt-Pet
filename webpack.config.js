const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    login: './src/js/login.js',
    register: './src/js/register.js',
    home: './src/js/home.js',
    petDetail: './src/js/pet-detail.js',
    productDetail: './src/js/product-detail.js',
    createForm: './src/js/create-form.js',
    editForm: './src/js/edit-form.js',
    profile: './src/js/profile.js',
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // mantiene la estructura de carpetas
              outputPath: 'assets/images/', // carpeta de salida dentro de dist
            },
          },
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
      template: './src/pages/home.html',
      filename: 'home.html',
      chunks: ['home']
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
      template: './src/pages/create-form.html',
      filename: 'create-form.html',
      chunks: ['createForm']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/edit-form.html',
      filename: 'edit-form.html',
      chunks: ['editForm']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/profile.html',
      filename: 'profile.html',
      chunks: ['profile']
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