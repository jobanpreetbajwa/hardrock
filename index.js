import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./component/store/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menucardcontent from "./component/content/menuCardcontent";
import Lunch from "./component/content/lunch";
import Breakfast from "./component/content/breakfast";
import Shakes from "./component/content/shakes";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "breakfast", element: <Breakfast /> },
  { path: "lunch", element: <Lunch /> },
  { path: "shakes", element: <Shakes /> },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
