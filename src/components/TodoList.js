import React from "react";
import AddTodo from "./AddTodo";
import ItemGrid from "./ItemGrid";
import {} from "react-redux";

const TodoList = () => {
  return (
    <div className="TodoList">
      <AddTodo />
      <ItemGrid />
    </div>
  );
};

export default TodoList;
