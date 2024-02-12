import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./component/store/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter,useRouteError } from "react-router-dom";
import Login from "./component/login/login";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <Provider store={store}>
      <App/>
    </Provider>
);

