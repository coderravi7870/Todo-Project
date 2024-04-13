import React, { useState } from "react";
import { useTodo } from "../contextApi/TodoContext";

function TodoForm() {
  const [input, setInput] = useState("");
  const { AddTodo } = useTodo();

  const Add = (e) => {
    e.preventDefault();
    if (!input) return;
    else {
      if (/^[a-zA-Z\s]*$/.test(input)) {
        AddTodo({ id: Date.now(), todoText: input, completed: false });
      } else {
        alert("Please Enter a String value");
      }
    }
    setInput("");
  };
  return (
    <form onSubmit={Add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
