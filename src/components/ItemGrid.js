import React, { useEffect } from "react";
import axios from "axios";
import { Table, message } from "antd";
import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodos,
  getAmountOfTodos,
  isLoading
} from "../redux/selectors/todoList";
import { setTodos, setLoading } from "../redux/actions/todoList";
import { useParams, useHistory } from "react-router";

const { Column } = Table;

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
    dispatch = useDispatch(),
    history = useHistory();
  let { page } = useParams();
  page = page ? page : 1;
  useEffect(() => {
    fetchData(dispatch);
    return cleanupData(dispatch);
  }, [dispatch]);
  return (
    <div>
      <Counter amount={amount} />
      <Table
        dataSource={data}
        className="ItemGrid"
        rowKey="id"
        loading={loading}
        pagination={{
          current: parseInt(page, 10),
          onChange: page => history.push("/todos/" + page)
        }}
      >
        <Column
          title="Completed"
          dataIndex="completed"
          key="completed"
          render={(text, record) => <span>No</span>}
        />
        <Column title="Title" dataIndex="title" key="title" />
      </Table>
    </div>
  );
};

export default ItemGrid;
