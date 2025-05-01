import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
  },
});

export default store;
