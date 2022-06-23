import "./App.css";
import { useEffect } from "react";
import readTodosRequest from "./api/readTodosRequest";

function App() {
  useEffect(() => {
    readTodosRequest().then((allTodos) => console.log(allTodos));
  }, []);

  return <div className="App">Hello</div>;
}

export default App;
