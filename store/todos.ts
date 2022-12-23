interface Todo {
  text?: string;
  done?: boolean;
}

interface State {
  list: Todo[];
}

export const state = () => ({
  list: [],
});

export const mutations = {
  add(state: State, text: string) {
    state.list.push({
      text,
      done: false,
    });
  },
  toggle(state: State, todo: Todo) {
    todo.done = !todo.done;
  },
};
