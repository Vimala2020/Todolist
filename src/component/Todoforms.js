
import React from 'react'
import { useState } from "react"

 const Todoforms = ({addTodo}) => {
  const [value,setValue] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault();
    addTodo(value);
    setValue("")

  }
  return (
    <form className= 'Todoforms' onSubmit={handleSubmit}>
      <input type ="text" value = {value} onChange={(e)=>setValue(e.target.value)}  placeholder ="What is todays's Task" className="todo-input">
      </input>
      <button type='submit' className='todo-btn'> Add Task</button>
    </form>
  )
}


export default Todoforms;

