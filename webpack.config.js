const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    login: './src/pages/login/login.js',
    register: './src/pages/register/register.js',
    home: './src/pages/home/home.js',
    petDetail: './src/pages/pet-detail/pet-detail.js',
    productDetail: './src/pages/product-detail/product-detail.js',
    createPet: './src/pages/create-pet/create-pet.js',
    editPet: './src/pages/edit-pet/edit-pet.js',
    createProduct: './src/pages/create-product/create-product.js',
    editProduct: './src/pages/edit-product/edit-product.js',
    profile: './src/pages/profile/profile.js',
    favorites: './src/pages/favorites/favorites.js',
    shoppingCart: './src/pages/shopping-cart/shopping-cart.js'
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
      template: './src/pages/login/login.html',
      filename: 'login.html',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/register/register.html',
      filename: 'register.html',
      chunks: ['register']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/home/home.html',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/pet-detail/pet-detail.html',
      filename: 'pet-detail.html',
      chunks: ['petDetail']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/product-detail/product-detail.html',
      filename: 'product-detail.html',
      chunks: ['productDetail']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/create-pet/create-pet.html',
      filename: 'create-pet.html',
      chunks: ['createPet']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/edit-pet/edit-pet.html',
      filename: 'edit-pet.html',
      chunks: ['editPet']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/create-product/create-product.html',
      filename: 'create-product.html',
      chunks: ['createProduct']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/edit-product/edit-product.html',
      filename: 'edit-product.html',
      chunks: ['editProduct']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/profile/profile.html',
      filename: 'profile.html',
      chunks: ['profile']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/favorites/favorites.html',
      filename: 'favorites.html',
      chunks: ['favorites'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/shopping-cart/shopping-cart.html',
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