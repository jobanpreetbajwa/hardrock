import "./index.css";
import Login from "./component/login/login";
import Menu from "./component/content/menu";

import { useState } from "react";

// const Somethingwentwrong = () => {
//   const routeError = useRouteError();
//   return <h1>Something went wrong</h1>;
// };

// const router = createBrowserRouter([
//   {
//     path: "/registeration",
//     element: <Registration />,
//     errorElement: { Somethingwentwrong },
//   },
//   {
//     path: "/logedin",
//     element: <Menu />,
//     errorElement: { Somethingwentwrong },
//   },
// ]);

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
      {!isLogin && <Login setLogin />}
      {isLogin && <Menu />}
    </>
  );
}

export default App;
