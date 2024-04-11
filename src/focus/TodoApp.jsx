import React, { useEffect, useReducer } from 'react'
import FormCustumHook from '../formCustumHook/formCustumHook'
import { todoReducer } from './todoReducer'
import TodoList from './TodoList'
import AddTodo from './AddTodo'


const TodoApp = () => {
  
  const inicialState =[
    {
      id:1,
      todo: "Porte Folio website",
      done: false,
      
    }
   
  ]

  const init=()=> {
    return JSON.parse(localStorage.getItem("todos")) ||  [];
  }


  const [todos, dispatch] = useReducer(todoReducer, inicialState,init)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))

  },[todos])


  const  handlerNewTodo=(todo)=> {
    const action ={
      type : '[TODO] Add Todo',
      payload:todo
    }
    dispatch(action)
  }

  const  handlerDeleteTodo=(id)=> {
    const action ={
      type : '[TODO] delete Todo',
      payload:id
    }
    dispatch(action)
  }

  const ontoggleTodo =(id)=> {
    const action ={
      type : '[TODO] ontoggle Todo',
      payload:id
    }
    dispatch(action)

  }



  
  return (
    <div>
     <h1 className=''><small className='text-info'>Total task : {todos.length} </small> <small className='text-danger'>Pending Task: {todos.filter(todo=> !todo.done).length }</small></h1>
     <hr />
     <div className="row">
      <div className="col-7">
      <TodoList todos={todos} handlerDeleteTodo ={handlerDeleteTodo} ontoggleTodo={ontoggleTodo}/>                      
      </div>
      <div className="col-5">
        <h3>  Add to do</h3>
        <hr />
        <AddTodo handlerNewTodo={handlerNewTodo}/>        
        
      </div>
     </div>
     
    </div>
  )
}
export default TodoApp