import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/pages/About";
import Equipment from "./component/pages/Equipment";
import Medicines from "./component/pages/Medicines";
import Home from "./component/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "equipment", element: <Equipment /> },
      { path: "medicines", element: <Medicines /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routerPath} /> {/*  react router dom v6  */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
