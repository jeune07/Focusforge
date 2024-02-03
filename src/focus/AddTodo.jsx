import React from 'react'
import FormCustumHook from '../formCustumHook/formCustumHook'

const AddTodo = ({handlerNewTodo}) => {



    const {todo, form, onInputchange, onResetForm,} =FormCustumHook({
      id:"",
      todo:"",

    });

    const onFormSubmit =(event) => {
      event.preventDefault();
      if(todo.length <= 1){
        return;
      }

      const newTodo={
        
      id: new Date().getTime(),
      todo:todo,
      done: false,
      }

      handlerNewTodo(newTodo);
      onResetForm();

    }

  return (
        <form onSubmit={onFormSubmit}>
          <input 
          className='form-control'
          type="text"
          value={todo}
          name="todo"
          placeholder='Add a new task'
          onChange={onInputchange}
           />
           <button type="submit" className='btn btn-outline-primary mt-1'> add</button>
        </form>
  )
}

export default AddTodo