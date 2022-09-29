// create reducer store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import todoReducer from "./features/todos/todosSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});

export default store;
