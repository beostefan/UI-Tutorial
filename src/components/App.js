import React from "react";
import {Provider} from "react-redux";
import {Menu} from "antd";
import store from "../redux/store";
import {Link, Route, Router, Switch} from "react-router-dom";
import TodoList from "./TodoList";
import {createBrowserHistory} from "history";

const browserHistory = createBrowserHistory();

const App = () => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <h1>React Tutorial</h1>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="todos">
                        <Link to="/todos">Todo List</Link>
                    </Menu.Item>
                </Menu>

                <Switch>
                    <Route path={["/todos/:page", "/todos"]}>
                        <TodoList/>
                    </Route>
                    <Route path="/">
                        <div className="home">
                            <h2>Welcome to Our Tutorial</h2>
                            <p>Your application is great!</p>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
