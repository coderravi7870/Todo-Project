import React from "react";
import { useTodo } from "../contextApi/TodoContext";

const Message = () => {
  const { todoList } = useTodo();
  return (
    todoList.length === 0 && (
      <center className="w-full">
        <h1 className="text-lg font-bold">List is Empty</h1>
      </center>
    )
  );
};

export default Message;
