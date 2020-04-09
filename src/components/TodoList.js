import React from "react";
import AddTodo from "./AddTodo";
import ItemGrid from "./ItemGrid";

const TodoList = () => {
    return (
        <div className="TodoList">
            <AddTodo/>
            <ItemGrid/>
        </div>
    );
};

export default TodoList;
