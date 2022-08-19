import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {

    // Events

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    console.log(todo);
    // Filter goes through everything and if it matches the to do id it will get rid of it.


    const completeHandler = () => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}

export default Todo;