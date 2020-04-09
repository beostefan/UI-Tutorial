import React from "react";
import {Button, Card, Form, Input} from "antd";

const AddTodo = () => {
    return <div className="AddTodo">
        <Card title="Add Todo">
            <Form onFinish={(values) => {
                alert("Add Todo");
                console.log("Form Values", values);
            }}>
                <Form.Item
                    label="Title"
                    name="title"
                >
                    <Input/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType={"submit"}>
                        Add Item
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>;
};

export default AddTodo;
