import React from "react";

const TodoItem = ({ id, todo, done, handlerDeleteTodo, ontoggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className={`align-self-center ${todo.done && `text-decoration-line-through`}`}
        onClick={() => ontoggleTodo(todo.id)}
        >{todo.todo}</span>
        <button
          className="btn btn-danger"
          onClick={() => handlerDeleteTodo(todo.id)}          
        >
          borrar
        </button>
      </li>
    </>
  );
};

export default TodoItem;
