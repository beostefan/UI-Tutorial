import React from "react";
import {Provider} from "react-redux";
import {Menu} from "antd";
import store from "../redux/store";
import TodoList from "./TodoList";

const App = () => {
    return (
        <Provider store={store}>
            <h1>React Tutorial</h1>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    Home
                </Menu.Item>
                <Menu.Item key="todos">
                    Todo List
                </Menu.Item>
            </Menu>
            <TodoList/>
        </Provider>
    );
};

export default App;
