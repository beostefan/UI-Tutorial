import React, {useEffect} from "react";
import axios from "axios";
import {message, Table} from "antd";
import Counter from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {getAmountOfTodos, getTodos, isLoading} from "../redux/selectors/todoList";
import {setLoading, setTodos} from "../redux/actions/todoList";

const {Column} = Table;

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

const ItemGrid = () => {
    const data = useSelector(getTodos),
        amount = useSelector(getAmountOfTodos),
        loading = useSelector(isLoading),
        dispatch = useDispatch();
    useEffect(() => {
        fetchData(dispatch);
        return cleanupData(dispatch);
    }, [dispatch]);
    return (
        <div className="ItemGrid">
            <Counter amount={amount}/>
            <Table
                dataSource={data}
                rowKey="id"
                loading={loading}
                className="table"
            >
                <Column
                    title="Status"
                    dataIndex="completed"
                    key="status"
                    className="status"
                    render={(isCompleted) =>
                        isCompleted
                            ? <span className="done">Done</span>
                            : <span className="open">Open</span>}
                />
                <Column title="Title" dataIndex="title" key="title"/>
            </Table>
        </div>
    );
};

export default ItemGrid;
