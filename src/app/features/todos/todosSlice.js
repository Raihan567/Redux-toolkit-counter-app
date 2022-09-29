import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    todos: [],
    error: null,
  },
  reducers: {
    getTodoRequest: (state = initialState, actions) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    getTodoSuccess: (state = initialState, actions) => {
      return {
        ...state,
        isLoading: false,
        todos: actions.payload,
      };
    },
    getTodoFailed: (state = initialState, actions) => {
      return {
        ...state,
        isLoading: false,
        error: actions.payload,
      };
    },
  },
});
export const { getTodoRequest, getTodoSuccess, getTodoFailed } =
  todosSlice.actions;
export default todosSlice.reducers;
