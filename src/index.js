import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles.css";
import "antd/dist/antd.css";

import TodoList from "./components/TodoList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  rootElement
);
