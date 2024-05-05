import React from 'react';
import Todoforms from './Todoforms';
import { useState } from 'react';
import Todo from './Todo';

const Todowrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: todos.length + 1, task: todo, completed: false, isEditing: false }]);
  };
  const toggleComplete=(id)=>{
    setTodos(todos.map(todo => todo.id ===id ?{...todo, completed: !todo.completed}:todo))
  }
  const deletetodo =(id) =>{
    setTodos(todos.filter(todo => todo.id !==id ))
  }

  return (
    <div className='Todowrapper'>
      <h1> To Do List..!!</h1>
      <Todoforms addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo key={index} task={todo}
        toggleComplete = {toggleComplete}
        deletetodo = {deletetodo}
        />
      ))}
    </div>
  );
};

export default Todowrapper;

