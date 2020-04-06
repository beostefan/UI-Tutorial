import React from "react";
import AddTodo from "./AddTodo";
import ItemGrid from "./ItemGrid";
import Counter from "./Counter";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h1>React Tutorial</h1>
      <h2>To-Do List</h2>
      <AddTodo />
      <ItemGrid />
      <Counter />
    </div>
  );
};

export default TodoList;
