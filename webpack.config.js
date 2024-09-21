const path = require('path'); // lo requerimos de los modulos de node

module.exports = {
  entry: './src/index.js', // como entrada tomamos nuestro archivo base
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist') // como salida obtenemos lo que se crea dentro de la carpeta dist
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};