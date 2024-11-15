<template>
    <div class="add-task-container">
      <h1>Añadir Tarea</h1>
      <div class="input-group">
        <input 
            v-model="newTask" 
            @keyup.enter="addTask" 
            placeholder="Añadir nueva tarea" 
            class="task-input"
        />
        <button @click="addTask" class="add-button">Añadir</button>
      </div>
  
      <div v-if="tasks.length > 0" class="task-list">
        <div v-for="task in tasks" :key="task.id" class="task-item">
          <span :class="{ completed: task.completed }">{{ task.todo }}</span>
          <div>
            <button @click="toggleTaskCompletion(task)" class="toggle-button">
              {{ task.completed ? 'Desmarcar' : 'Completar' }}
            </button>
            <button @click="deleteTask(task)" class="delete-button">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddTask",
    data() {
      return {
        newTask: "",
        tasks: [],
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() === "") return;
  
        const newTask = {
          todo: this.newTask,
          completed: false,
          id: Date.now(),
        };
  
        this.tasks.unshift(newTask);
        this.newTask = "";
      },
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
    },
  };
  </script>
  
  <style scoped>
  .add-task-container {
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
  
  .input-group {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
  }
  
  .task-input {
      flex-grow: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      background-color: #fffaf0;
      transition: border-color 0.3s;
  }
  
  .task-input:focus {
      border-color: #ffb677;
      outline: none;
  }
  
  .add-button {
      padding: 10px 20px;
      background-color: #ffb677;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
  }
  
  .add-button:hover {
      background-color: #ff7e5f;
  }
  
  .task-list {
      margin-top: 20px;
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
  
  .completed {
      text-decoration: line-through;
      color: gray;
  }
  
  button {
      padding: 8px 12px;
      border: none;
      border-radius: 8px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
  }
  
  .toggle-button {
      background-color: #a2d2ff;
      color: #1c3144;
  }
  
  .toggle-button:hover {
      background-color: #8ecae6;
  }
  
  .delete-button {
      background-color: #ff7e5f;
      color: white;
  }
  
  .delete-button:hover {
      background-color: #f94144;
  }
  </style>
  