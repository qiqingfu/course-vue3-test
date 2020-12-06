<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input type="checkbox" v-model="todo.completed" />
    </div>

    <form @submit.prevent="createTodo">
      <input v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoApp",

  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn Vue.js 3",
          completed: false
        }
      ],
      id: 1
    };
  },

  methods: {
    createTodo() {
      this.id = this.id + 1;
      this.todos.push({
        id: this.id,
        text: this.newTodo,
        completed: false
      });
    }
  }
};
</script>
