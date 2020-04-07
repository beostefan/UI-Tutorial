import React, { useEffect } from "react";
import axios from "axios";
import AddTodo from "./AddTodo";
import ItemGrid from "./ItemGrid";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { setTodos, setLoading } from "../redux/actions/todoList";

const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/todos");
      dispatch(setTodos(result.data));
      dispatch(setLoading(false));
    };
    dispatch(setLoading(true));
    fetchData();
    return () => {
      // Clean up state
      dispatch(setTodos([]));
      dispatch(setLoading(false));
    };
  }, [dispatch]);
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
