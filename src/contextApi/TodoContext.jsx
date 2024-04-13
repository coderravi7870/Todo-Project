import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todoList: [
    {
      id: 1,
      todoText: "todo item",
      completed: false,
    },
  ],
  AddTodo: () => {},
  TodoUpdate: () => {},
  DelteTodo: () => {},
  TogelTodo: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
