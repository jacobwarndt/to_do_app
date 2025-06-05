import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("2");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text, priority);
    setText("");
    setPriority("2");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        data-testid="create-todo-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        data-testid="create-todo-priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="1">High</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
      </select>
      <button type="submit" data-testid="create-todo">
        Add
      </button>
    </form>
  );
}

export default TodoForm;