import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';




function App() {
  // State
  // It is very important to know that your UI in react will always update or change based on State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Function
  // useEffect allows us to run a function eveytime a function changes. The empty array allows the function to run only once when the component is rendered.
  // You can rerun the function by adding a value. For example, everytime you hit submit that function reruns.  So what you do is you add that piece of state that changes
  // useFilterHanlder takes all the completed todos and adds it to the completed state
  // useEffect


  // useEffect(() => {
  //   getLocalTodos();
  // }, []);
  
  useEffect(() => {
    console.log('hey');
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };



  // Save to local

  // const saveLocalTodos = () => {
  //     localStorage.setItem("todos", JSON.stringify([]));
  // };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = localStorage.getItem("todos", JSON.stringify(todos));
  //     setTodos(todoLocal);
  //   }
  // }


  return (
    <div className="App">
      <header>
        <h1>Asher's To Do List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />

    </div>
  );
}

export default App;
