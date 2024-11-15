const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/GestorDeTareas/' //reemplazar con el nombre de mi repositorio
  : '/'

});
