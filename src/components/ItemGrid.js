import React from "react";
import { Table, Button } from "antd";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import { getTodos, getAmountOfTodos } from "../redux/selectors/todoList";

const { Column } = Table;

const ItemGrid = () => {
  const data = useSelector(getTodos),
    amount = useSelector(getAmountOfTodos);
  return (
    <div>
      <Counter amount={amount} />
      <Table dataSource={data} className="ItemGrid" rowKey="id">
        <Column
          title="Completed"
          dataIndex="completed"
          key="completed"
          render={(text, record) => <span>No</span>}
        />
        <Column title="Title" dataIndex="title" key="title" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <span>
              <Button type="link">Edit</Button>
              <Button type="link">Delete</Button>
            </span>
          )}
        />
      </Table>
    </div>
  );
};

export default ItemGrid;
