import React from "react";
import {Table} from "antd";
import Counter from "./Counter";

const {Column} = Table;

const data = [
    {
        id: 1,
        completed: true,
        title: "Clean up the desk"
    },
    {
        id: 2,
        completed: false,
        title: "Write an e-mail to me"
    },
    {
        id: 3,
        completed: false,
        title: "Read a book"
    }
];

const ItemGrid = () => {
    return (
        <div className="ItemGrid">
            <Counter/>
            <Table
                dataSource={data}
                rowKey="id"
                className="table"
            >
                <Column
                    title="Status"
                    dataIndex="completed"
                    key="status"
                    className="status"
                    render={() => <span>Open</span>}
                />
                <Column title="Title" dataIndex="title" key="title"/>
            </Table>
        </div>
    );
};

export default ItemGrid;
