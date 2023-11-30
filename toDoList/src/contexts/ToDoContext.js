import { createContext, useContext } from "react";
export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export const TodoProvider = ToDoContext.Provider;
export const useTodo = () => {
  return useContext(ToDoContext);
};
