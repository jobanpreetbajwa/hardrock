import "./index.css";
import Login from "./component/login/login";
import Registration from "./component/login/registration";
import Menu from "./component/content/menu";
import { useEffect, useState } from "react";
import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import Lunch from "./component/content/lunch";
import Shakes from "./component/content/shakes";
import Breakfast from "./component/content/breakfast";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./component/admin/admin";
import Menucardcontent from "./component/content/menuCardcontent";
import { adminLogin, logIn } from "./component/store/cartSlice";
import Forgetpassword from "./component/login/forgetPassword";

const Somethingwentwrong = () => {
  const routeError = useRouteError();
  console.log(routeError, "route");
  return <h1>Something went wrong</h1>;
};

const Protectedadmin = () => {
  // const admin = useSelector((state) => {
  //   return state.admin.isAdmin;
  // });
  const obj = JSON.parse(window.sessionStorage.getItem("login"));
  useDispatch(adminLogin(obj.admin));
  console.log(obj, "admin in protected");
  if (obj.admin) {
    return <Admin />;
  } else {
    return <Navigate to="/" />;
  }
};

const Protectedlogin = () => {
  // const login = useSelector((state) => {
  //   return state.logged.token;
  // });
  const obj = JSON.parse(window.sessionStorage.getItem("login"));
  useDispatch(adminLogin(obj.admin));
  console.log(obj, "user in protected");
  if (obj.token) {
    return <Menu />;
  } else {
    return <Navigate to="/" />;
  }
};

const router = createBrowserRouter([
  {
    path: "/forgetpassword",
    element: <Forgetpassword />,
    errorElement: <Somethingwentwrong />,
  },
  {
    path: "/registration",
    element: <Registration />,
    errorElement: <Somethingwentwrong />,
  },
  {
    path: "/admin",
    element: <Protectedadmin />,
  },
  {
    path: "/",
    element: <Login />,
    errorElement: <Somethingwentwrong />,
  },
  {
    path: "/menu",
    element: <Protectedlogin />,
    children: [
      { index: true, element: <Menucardcontent /> },
      { path: "breakfast", element: <Breakfast /> },
      { path: "lunch", element: <Lunch /> },
      { path: "shakes", element: <Shakes /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(window.sessionStorage.getItem("login"));
    if (user) {
      dispatch(logIn(user.token));
      if (user.admin) {
        dispatch(adminLogin());
      }
    }
  }, []);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
