import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

 const Todo = ({task, toggleComplete ,deletetodo , editTodo}) => {
  return (<>
    <div className='Todo'>
      <p onClick={()=> toggleComplete(task.id)} className={`todo ${task.completed ? 'completed' : ''}`}> {task.task}</p>
      <div>
        <FontAwesomeIcon icon= {faTrash} onClick={()=> deletetodo(task.id)}/>
        </div>
    </div>
    </>
  )
}

export default Todo;