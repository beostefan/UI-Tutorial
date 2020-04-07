import React, { useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import AddTodo from "./AddTodo";
import ItemGrid from "./ItemGrid";
import { useDispatch } from "react-redux";
import { setTodos, setLoading } from "../redux/actions/todoList";

const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      axios("https://jsonplaceholder.typicode.com/todos")
        .then(result => {
          // on SUCCESS
          dispatch(setTodos(result.data));
        })
        .catch(error => {
          // on ERROR
          message.error("Todos could not be fetched");
          console.error(error);
        })
        .then(() => {
          // at the END
          dispatch(setLoading(false));
        });
    };
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
    </div>
  );
};

export default TodoList;
