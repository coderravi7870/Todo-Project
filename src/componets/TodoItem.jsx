import React, { useState } from "react";
import { useTodo } from "../contextApi/TodoContext";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

function TodoItem({ todoItem }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todoItem.todoText);

  const { TodoUpdate, DelteTodo, TogelTodo } = useTodo();

  const editeTodo = () => {
    TodoUpdate(todoItem.id, { ...todoItem, todoText: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    TogelTodo(todoItem.id);
  };
  return (
    <div>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          todoItem.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todoItem.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todoItem.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todoItem.completed) return;

            if (isTodoEditable) {
              editeTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todoItem.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => DelteTodo(todoItem.id)}
        >
          ❌
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => setIsAbout((prev) => !prev)}
        >
          {isAbout ? <SlArrowUp /> : <SlArrowDown />}
        </button>
      </div>
      {isAbout && (
        <div>
          <h1 className="text-lg font-bold border-b-2 border-indigo-500 mb-4 my-2">
            About: {todoItem.todoText}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat
            tempora quidem ab. Nesciunt deserunt numquam eius minus, voluptate
            impedit?
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
