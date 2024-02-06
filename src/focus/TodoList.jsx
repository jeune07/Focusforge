import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos=[], handlerDeleteTodo, ontoggleTodo}) => {
  return (    
      <ul className="list-group"> 
      {
        todos.map(todo=>(
           <TodoItem todo={todo} key={todo.id} handlerDeleteTodo={handlerDeleteTodo} ontoggleTodo={ontoggleTodo}/>
        ))
       
      }
        
      </ul>
    
  );
};

export default TodoList;
