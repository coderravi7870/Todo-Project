import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./contextApi/TodoContext";
import TodoForm from "./componets/TodoForm";
import TodoItem from "./componets/TodoItem";
import Message from "./componets/Message";

function App() {
  const [todoList, setTodoList] = useState([]);

  const AddTodo = (todoItem) => {
    setTodoList((prev) => [todoItem, ...prev]);
  };

  const TodoUpdate = (todoId, todoItem) => {
    setTodoList((prev) =>
      prev.map((prevItem) => (prevItem.id === todoId ? todoItem : prevItem))
    );
  };

  const DelteTodo = (todoId) => {
    setTodoList((prev) => prev.filter((item) => item.id !== todoId));
  };

  const TogelTodo = (todoId) => {
    setTodoList((prev) =>
      prev.map((prevItem) =>
        prevItem.id === todoId
          ? { ...prevItem, completed: !prevItem.completed }
          : prevItem
      )
    );
  };

  useEffect(() => {
    const storeTodo = JSON.parse(localStorage.getItem("todoList"));
    if (storeTodo && storeTodo.length > 0) {
      setTodoList(storeTodo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <TodoContextProvider
        value={{ todoList, AddTodo, TodoUpdate, DelteTodo, TogelTodo }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            {/* <div className="flex flex-wrap gap-y-3"> */}
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              <Message />
              {todoList.map((todoItem) => (
                <div key={todoItem.id} className="w-full">
                  <TodoItem todoItem={todoItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
