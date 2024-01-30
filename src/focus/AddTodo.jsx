import React from 'react'
import FormCustumHook from '../formCustumHook/formCustumHook'

const AddTodo = () => {

    const {}=FormCustumHook();
  return (
    <>
        <form>
          <input 
          className='form-control'
          type="text"
          value=""
          placeholder='Add a new task'
           />
        </form>
    </>
  )
}

export default AddTodo