import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "第3章の復習をする", completed: false },
    { id: 2, text: "ToDoアプリを完成させる", completed: false },
  ]);

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    const text = input.trim();
    if (!text) {
      setError("タスクを入力して下さい。");
      return;
    }
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
    setError("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo</h1>

      <div className="todo-form">
        <label htmlFor="todo-input" className="form-label">
          新しいタスク
        </label>
        <input
          id="todo-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="新しいTodoリストの入力"
          className="todo-input"
        ></input>
        <button type="submit" className="add-button" onClick={addTodo}>
          追加
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            ></input>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
