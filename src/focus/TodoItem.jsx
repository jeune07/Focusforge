import React from "react";

const TodoItem = () => {
  return (
    <>
      <li className="list-group-item d-flex  justify-content-between">
        <span className="align-self-center">item 1</span>
        <button className="btn btn-danger">borrar</button>
      </li>
    </>
  );
};

export default TodoItem;
