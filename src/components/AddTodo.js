import React from "react";
import { Button, Form, Input, Card } from "antd";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  return (
    <div className="AddTodo">
      <Card title="Add Todo">
        <Form
          onFinish={({ title }) => {
            dispatch({ type: "add-todo", title: title });
          }}
        >
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType={"submit"}>
              Add Item
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddTodo;
