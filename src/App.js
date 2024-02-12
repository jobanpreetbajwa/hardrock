import "./index.css";
import Login from "./component/login/login";
import Registration from "./component/login/registration";
import Menu from "./component/content/menu";
import { useState } from "react";
import { RouterProvider, Navigate,createBrowserRouter,useNavigate,useRouteError } from "react-router-dom";
import Lunch from "./component/content/lunch";
import Shakes from "./component/content/shakes";
import Breakfast from "./component/content/breakfast";
import { useSelector } from "react-redux";
import Admin from "./component/admin/admin";


const Somethingwentwrong = () => {
  const routeError = useRouteError();
  return <h1>Something went wrong</h1>;
};

const Protectedadmin = ()=>{
  const admin = useSelector(state=>{return state.admin.isAdmin})
  console.log(admin,"admin in protected")
  if(admin){
    return<Admin/>
  }
  else{
    return<Navigate to="/" />
  }
}

const Protectedlogin = ()=>{
  const login = useSelector(state=>{return state.logged.token})
  console.log(login,"admin in protected")
  if(login){
    return<Menu/>
  }
  else{
    return<Navigate to="/" />
  }
}

const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
    errorElement: { Somethingwentwrong },
  },
  {
    path:"/admin",
    element:<Protectedadmin/>
  },
  {
    path: "/",
    element:<Login/> ,
    errorElement: { Somethingwentwrong },
  },
]);

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
