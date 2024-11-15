<template>
    <div class="combined-view">
      <br>
      <AddTask @addTask="addTask" />
      <br>
      <TaskList :tasks="tasks" @update-tasks="updateTasks" @toggleTask="toggleTaskCompletion" @deleteTask="deleteTask" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import AddTask from "@/views/AddTask.vue";
  import TaskList from "@/views/TaskList.vue";
  
  export default {
    name: "CombinedView",
    components: { TaskList, AddTask },
    data() { return { tasks: [] }; },
    created() { this.fetchTasks(); },
    methods: {
      async fetchTasks() {
        try {
          const response = await axios.get('https://dummyjson.com/todos');
          this.tasks = response.data.todos;
        } catch (error) { console.error("Error al cargar las tareas:", error); }
      },
      addTask(newTask) {
        this.tasks.push({
          id: Date.now(),
          todo: newTask,
          completed: false
        });
      },
      toggleTaskCompletion(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) task.completed = !task.completed;
      },
      deleteTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
      }
    }
  };
  </script>
  
<style scoped>
  .combined-view {
    max-width: 600px;
    margin: 0 auto;
    background-color: null;
    padding: 20px;
    border-radius: 10px;
    box-shadow: null;
  }
</style>
  