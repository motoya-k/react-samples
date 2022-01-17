import React from "react";
import "./App.css";

import { TodoList } from "./components/TodoList";
// import { CounterContainer } from "./components/CounterContainer";
import { PieChart } from "./components/PieChart";

const items = [
  { id: 1, name: "test.1", done: true },
  { id: 2, name: "test.2", done: false },
  { id: 3, name: "test.3", done: true },
];

const App: React.VFC = () => {
  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoList items={items} />
      <PieChart percent={60} />
    </div>
  );
};

export default App;
