import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // {
    //   id: nanoid(),
    //   text: "Dummy todo",
    // },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // ! filter always return true values
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
        //   console.log(todo.id)
      );
      // removeTodo: (state, action) => {
      //     state.todos = state.todos.filter((todo) => todo.id !== action.payload )
      // },
    },
    updateTodo: (state, action) => {
      const todoIndex = state.todos.findIndex((todo) => {
        todo.id !== action.payload.id;
      });
      if (todoIndex != -1) {
        // state.todos[todoIndex] = action.payload
        state[todoIndex].text = action.payload.text;
        state.todos.payload = [...state.todos];
      }
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
