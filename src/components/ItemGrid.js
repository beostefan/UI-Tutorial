import React from "react";
import { Table, Button } from "antd";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import {
  getTodos,
  getAmountOfTodos,
  isLoading
} from "../redux/selectors/todoList";

const { Column } = Table;

const ItemGrid = () => {
  const data = useSelector(getTodos),
    amount = useSelector(getAmountOfTodos),
    loading = useSelector(isLoading);
  return (
    <div>
      <Counter amount={amount} />
      <Table
        dataSource={data}
        className="ItemGrid"
        rowKey="id"
        loading={loading}
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
