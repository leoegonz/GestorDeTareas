<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <nav>
    <router-link to="/">Gestor de Tareas</router-link> |
    <router-link to="/addtask">Añadir Tarea</router-link> |
    <router-link to="/tasklist">Lista de Tareas</router-link> |
    <router-link to="/combined">Vista Combinada</router-link>
    </nav>
    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #f4be96;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #5c5d51;
}

nav a.router-link-exact-active {
  color: #e3e2e1;
}

nav a:hover {
  text-decoration: underline;
}
</style>
