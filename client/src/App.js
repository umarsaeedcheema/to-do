import "./App.css";
import { useEffect, useState } from "react";
import readTodosRequest from "./api/readTodosRequest";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    readTodosRequest().then(setTodos);
  }, []);

  return (
    <div className="App">
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text} {`${todo.completed}`}
        </div>
      ))}
    </div>
  );
}

export default App;
