import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import LoginFrom from "./component/utils/LoginFrom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserInfoModule from "./component/pages/UserInfoModule";
import Header from "./component/Header";

const Home = lazy(() => import("./component/pages/Home"));
const About = lazy(() => import("./component/pages/About"));
const Equipment = lazy(() => import("./component/pages/Equipment"));
const EquipmentItems = lazy(() => import("./component/pages/EquipmentItem"));
const Medicines = lazy(() => import("./component/pages/Medicines"));
const MyCart = lazy(() => import("./component/pages/MyCart"));

export default function App() {
  const { isLogin, isShowUserInfo } = useSelector((state) => state.users);
  const routerPath = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {isLogin && (
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
        {
          index: true,
          element: (
            <Suspense fallback={<p> Loading.... </p>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/home",
          element: (
            <Suspense fallback={<p> Loading.... </p>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<p> Loading.... </p>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/equipment",
          element: (
            <Suspense fallback={<p> Loading.... </p>}>
              <Equipment />
            </Suspense>
          ),
          children: [{ path: ":equipmentName", element: <EquipmentItems /> }],
        },
        {
          path: "/medicines",
          element: (
            <Suspense fallback={<p> Loading.... </p>}>
              <Medicines />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<p> Loading.... </p>}>
              <MyCart />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routerPath} />
    </>
  );
}
