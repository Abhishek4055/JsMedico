import { useSelector } from "react-redux";
import LoginFrom from "./component/utils/LoginFrom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserInfoModule from "./component/pages/UserInfoModule";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Equipment from "./component/pages/Equipment";
import EquipmentItems from "./component/pages/EquipmentItem";
import Medicines from "./component/pages/Medicines";
import MyCart from "./component/pages/MyCart";
import Header from "./component/Header";

export default function App() {
  const { isLogin, isShowUserInfo } = useSelector((state) => state.users);
  const routerPath = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {!isLogin && (
            <div className="login-wraper">
              <LoginFrom />
            </div>
          )}
          {isShowUserInfo && <UserInfoModule />}
          <Header />
          <div className="js-body">
            <Outlet />
          </div>
        </>
      ),
      children: [
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/equipment",
          element: <Equipment />,
          children: [{ path: ":equipmentName", element: <EquipmentItems /> }],
        },
        { path: "/medicines", element: <Medicines /> },
        {
          path: "/cart",
          element: <MyCart />,
        },
      ],
    },
  ]);

  // function Test() {}

  // Test.prototype.x = function () {
  //   return "x";
  // };

  // function Test2() {
  //   Test.call(this); // Call the Test constructor inside Test2
  // }

  // // Set Test2's prototype to inherit from Test
  // Test2.prototype = Object.create(Test.prototype);

  // // Fix the constructor reference for Test2
  // Test2.prototype.constructor = Test2;

  // let we = new Test2();
  // console.log(we.y(), we.x()); // Outputs: "x"

  // console.log(Test2.prototype);

  return (
    <>
      <RouterProvider router={routerPath} />
    </>
  );
}
