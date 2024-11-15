<template>
    <div class="task-list-container">
        <h1>Lista de Tareas</h1>
        <button @click="fetchTasks" class="btn-cargar">Cargar Tareas</button>

        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <div class="task-content">
                    <h5 :class="{ tachado: task.completed }">{{ task.todo }}</h5>
                    <span class="status">{{ task.completed ? 'Completada' : 'Pendiente' }}</span>
                </div>
                <div class="task-buttons">
                    <button @click="toggleTaskCompletion(task)" class="toggle-btn">
                        {{ task.completed ? 'Desmarcar' : 'Completar' }}
                    </button>
                    <button @click="deleteTask(task)" class="delete-btn">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "TaskList",
    data() {
        return {
            tasks: [], // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
        // Llamada para obtener las tareas desde la API externa
        async fetchTasks() {
            try {
                const response = await axios.get('https://dummyjson.com/todos');
                this.tasks = response.data.todos; // Nota que 'todos' es el nombre de la propiedad en la respuesta
            } catch (error) {
                console.error("Error al cargar las tareas:", error);
            }
        },

        // Cambiar el estado de una tarea (completada/no completada)
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        // Eliminar la tarea seleccionada
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
.task-list-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fefaf1;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    color: #6b4f4f;
    font-size: 2rem;
    margin-bottom: 20px;
}

.btn-cargar {
    background-color: #ffb677;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 20px;
}

.btn-cargar:hover {
    background-color: #ff7e5f;
}

.task-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #fff5e4;
    border-radius: 8px;
    border: 1px solid #ffcdb2;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.task-content {
    flex-grow: 1;
}

h5 {
    margin: 0;
    font-size: 1.1rem;
}

.tachado {
    text-decoration: line-through;
    color: gray;
}

.status {
    font-size: 0.9rem;
    color: #6b4f4f;
    font-weight: bold;
}

.task-buttons {
    display: flex;
    gap: 10px;
}

button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.toggle-btn {
    background-color: #a2d2ff;
    color: #1c3144;
}

.toggle-btn:hover {
    background-color: #8ecae6;
}

.delete-btn {
    background-color: #ff7e5f;
    color: white;
}

.delete-btn:hover {
    background-color: #f94144;
}
</style>
