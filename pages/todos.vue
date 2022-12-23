<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
    </li>
  </ul>
</template>

<script>
import { mapStores } from "pinia";
import { useTodosStore } from "@/store/todos";

export default {
  computed: {
    ...mapStores(useTodosStore),
    todos() {
      return this.todosStore.list;
    },
  },
  methods: {
    addTodo(e) {
      this.todosStore.add(e.target.value);
      e.target.value = "";
    },
    toggle(todo) {
      this.todosStore.toggle(todo);
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
