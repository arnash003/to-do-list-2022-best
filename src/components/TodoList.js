import React from 'react'
import Todo from './Todo'; 

const TodoList = ({ todos }) => {
  console.log(todos);
  
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((map) => (
          <Todo text={todos.text} id={todos.id} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;