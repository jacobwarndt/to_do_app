import React, { useState } from "react";

function TodoItem({ todo, index, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const getPriorityClass = (value) => {
    switch (value) {
      case "1":
        return "priority-high";
      case "2":
        return "priority-medium";
      case "3":
        return "priority-low";
      default:
        return "";
    }
  };

  const handleUpdate = () => {
    updateTodo(index, updatedText);
    setIsEditing(false);
  };

  return (
    <div data-testid="todo-item" className={getPriorityClass(todo.priority)}>
      {isEditing ? (
        <>
          <textarea
            data-testid="update-todo-text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button data-testid="update-todo" onClick={handleUpdate}>
            Update
          </button>
        </>
      ) : (
        <>
          <p>{todo.text}</p>
          <button data-testid="edit-todo" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button data-testid="delete-todo" onClick={() => deleteTodo(index)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;