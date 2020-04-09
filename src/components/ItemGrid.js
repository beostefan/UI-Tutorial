import React from "react";
import {Table} from "antd";
import Counter from "./Counter";
import {useSelector} from "react-redux";
import {getAmountOfTodos, getTodos, isLoading} from "../redux/selectors/todoList";
import {useHistory, useParams} from "react-router";
import "./styles/ItemGrid.scss";

const {Column} = Table;

const ItemGrid = () => {
    const data = useSelector(getTodos);
    const amount = useSelector(getAmountOfTodos);
    const loading = useSelector(isLoading);
    const history = useHistory();
    let {page} = useParams();
    page = page ? page : 1;
    return (
        <div className="ItemGrid">
            <Counter amount={amount}/>
            <Table
                dataSource={data}
                rowKey="id"
                loading={loading}
                className="table"
                pagination={{
                    current: parseInt(page, 10),
                    onChange: page => history.push("/todos/" + page)
                }}
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
