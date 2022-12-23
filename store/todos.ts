import { defineStore } from "pinia";

interface Todo {
  text?: string;
  done?: boolean;
}

interface State {
  list: Todo[];
}

export const useTodosStore = defineStore("todos", {
  state: (): State => ({
    list: [],
  }),
  actions: {
    add(text: string) {
      this.list.push({
        text: text,
        done: false,
      });
    },
    toggle(todo: Todo) {
      todo.done = !todo.done;
    },
  },
});
