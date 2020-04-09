import React, {useEffect} from "react";
import AddTodo from "./AddTodo";
import ItemGrid from "./ItemGrid";
import {setLoading, setTodos} from "../redux/actions/todoList";
import axios from "axios";
import {message} from "antd";
import {useDispatch} from "react-redux";


const fetchData = async dispatch => {
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

const cleanupData = dispatch => {
    // Clean up state
    dispatch(setTodos([]));
    dispatch(setLoading(false));
};

const TodoList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData(dispatch);
        return cleanupData(dispatch);
    }, [dispatch]);
    return (
        <div className="TodoList">
            <AddTodo/>
            <ItemGrid/>
        </div>
    );
};

export default TodoList;
