import "./App.css";
import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };
    setTodos((oldState) => [...oldState, todo]);
    console.log(todo);

    setTitle("");
    setTime("");
  };

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>

      <div className="form-todo">
        <h2>Insert a new todo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">What will you do?</label>
            <input
              type="text"
              name="title"
              placeholder="Todo title"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Duration:</label>
            <input
              type="time"
              name="time"
              placeholder="Estimated time in hours"
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
          </div>
          <input type="submit" value="Create Task" />
        </form>
      </div>

      <div className="list-todo">
        <h2>Todo List</h2>
        {todos.length === 0 && <p>You dont have any todo</p>}
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <h3>{todo.title}</h3>
            <p>Duration: {todo.time}</p>
            <div className="actions">
              <span>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
