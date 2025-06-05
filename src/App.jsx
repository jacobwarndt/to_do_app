import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, priority) => {
    const newTodos = [...todos, { text, priority }];
    setTodos(newTodos);
  };

  const updateTodo = (index, newText) => {
    const updated = [...todos];
    updated[index].text = newText;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 className="app-title">Very Simple Todo App</h1>
      <div className="main-container">
        <div className="form-section">
          <h2>Add new tasks</h2>
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="tasks-section">
          <h2>Added Tasks</h2>
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;