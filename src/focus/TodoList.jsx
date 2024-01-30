import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div>
      <ul className="list-group">
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
