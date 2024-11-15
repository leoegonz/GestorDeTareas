<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="vue-logo"/>
    <h1>Bienvenido a la Aplicación Gestor de Tareas con Vue</h1>
    <p>
      Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
    </p>

    <h2>Secciones de la Aplicación</h2>
    <ul>
      <li><strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.</li>
      <li><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</li>
      <li><strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 20px;
}

.vue-logo {
  width: 100px;
  margin-bottom: 20px;
}

h1 {
  color: #f79647;
  font-size: 2rem;
  margin-bottom: 10px;
}

p, ul {
  font-size: 1.1rem;
  color: #837f7f;
}

ul {
  text-align: left;
  margin-top: 15px;
}

ul li {
  margin: 10px 0;
}
</style>
