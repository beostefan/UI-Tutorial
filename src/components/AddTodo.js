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
                    rules={[
                        {required: true, message: "Please input a title!"},
                        {min: 5, message: "Title must be at least 5 chars long!"},
                        {max: 70, message: "Maximum length of title is 70!"},
                        {
                            pattern: /^[\w\s]+$/,
                            message: "Title may only contain alphanumeric chars and spaces"
                        }
                    ]}
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
