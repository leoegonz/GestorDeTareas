<template>
    <!-- Contenedor principal del ítem de tarea -->
    <div>
        <!-- Contenedor del título y el estado de la tarea -->
        <div>
            <!-- Muestra el título de la tarea y aplica un estilo tachado si la tarea está completada -->
            <!-- Comentario: Cambia este estilo o agrega clases personalizadas
            <h5 :style="{ textDecoration: completed ? 'line-through' : 'none' }">
                {{ title }}
            </h5> -->
            <h5 :class="{ 'tachado': completed }">
                {{ title }}
            </h5>


            <!-- Muestra si la tarea está Completada o Pendiente -->
            <!-- Comentario: Puedes cambiar este texto o agregar etiquetas visuales (por ejemplo, con colores o iconos) -->
            <span>
                {{ completed ? 'Completada' : 'Pendiente' }}
            </span>
        </div>

        <!-- Contenedor de botones de acción -->
        <div>
            <!-- Botón para marcar la tarea como completada o pendiente -->
            <!-- Emite el evento 'toggle-completion' para indicar que se cambió el estado de la tarea -->
            <!-- Comentario: Personaliza el texto, estilo o reemplaza con un ícono (ej. ✔ / ✘) -->
            <button @click="$emit('toggle-completion')" class="boton-completar">
                <!-- Marcar como {{ completed ? 'Pendiente' : 'Completada' }} -->
                {{ completed ? '✘' : '✔' }}
            </button>

            <!-- Botón para eliminar la tarea de la lista -->
            <!-- Emite el evento 'delTodo' para indicar que se debe eliminar esta tarea -->
            <!-- Comentario: Modifica el estilo, el texto, o reemplaza con un ícono como una papelera -->
            <button @click="$emit('delTodo')" class="boton-eliminar">
                🗑
            </button>
        </div>
    </div>
</template>

<script>
export default {
    // Define el nombre del componente
    name: 'TodoItem',

    // Define las propiedades que este componente recibirá del componente padre
    // Comentario: Puedes agregar más propiedades si es necesario (por ejemplo, 'dueDate' para la fecha de vencimiento)
    props: {
        title: {
            type: String,   // Título de la tarea
            required: true, // Asegura que se proporcione un título
            default: 'Nueva tarea'
        },
        completed: {
            type: Boolean,  // Estado de la tarea (completada o pendiente)
            default: false  // Valor predeterminado
        },

        dueDate: {
            type: String,
            default: 'Sin fecha de vencimiento'
        },

    },
}
</script>

<style scoped>
/* Puedes agregar tus propios estilos aquí */
/* Por ejemplo, cambia el color de fondo de las tareas completadas */
.tachado {
    text-decoration: line-through;
    color: gray;
}

.boton-completar {
    background-color: #4caf50;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    margin-right: 5px;
}

.boton-eliminar {
    background-color: #f44336;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
}

.boton-completar:hover, .boton-eliminar:hover {
    cursor: pointer;
    opacity: 0.8;
}
</style>