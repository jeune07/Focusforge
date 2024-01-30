import React, { useReducer } from 'react'
import FormCustumHook from '../formCustumHook/formCustumHook'
import { todoReducer } from './TodoReducer'
import TodoList from './TodoList'
import AddTodo from './AddTodo'


const TodoApp = () => {

  const inicialState =[
    {
      id:1,
      todo: "Porte Folio website",
      done: false,
      
    },
    {
      id:2 ,
      todo: "Vuduluxe website",
      done: false,
      
    },
    {
      id:3 ,
      todo: "True story  Blog",
      done: false,
      
    },
    {
      id:4 ,
      todo: "EcoCleanExpress.com",
      done: false,
      
    }
  ]

  const [state, dispatch] = useReducer(todoReducer, inicialState)
  
  return (
    <div>
     <h1>TodoApp : 10 <small>Pendendientes: 2</small></h1>
     <hr />
     <div className="row">
      <div className="col-7">
      <TodoList/>                      
      </div>
      <div className="col-5">
        <h3>  Add to do</h3>
        <hr />
        <AddTodo />        
        <button type="submit" className='btn btn-outline-primary mt-1'> add</button>
      </div>
     </div>
     
    </div>
  )
}
export default TodoApp