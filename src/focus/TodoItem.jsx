import React from "react";

const TodoItem = ({id,todo,done}) => {
  
  return (
    <>
      <li  className="list-group-item d-flex  justify-content-between">
        <span className="align-self-center">{todo.todo}</span>
        <button className="btn btn-danger">borrar</button>
      </li>
    </>
  );
};



export default TodoItem;
