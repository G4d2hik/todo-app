import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Form from './components/Form'
import TodoLIst from './components/TodoLIst'
function App() {



  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {

    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
        break
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoLIst
        setTodos={setTodos}
        todos={todos}
        filterTodos={filterTodos} />
    </div>
  );
}

export default App;

