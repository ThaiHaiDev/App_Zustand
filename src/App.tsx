import React from "react";
import "./App.css";
import Album from "./components/Album/Album";
import Couter from "./components/Counter/Couter";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Couter />
      <br />
      <hr />
      <TodoList />
      <br />
      <hr />
      <Album />
    </div>
  )
}

export default App;
