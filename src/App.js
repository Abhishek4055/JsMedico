import React from "react";

import Box from "@mui/material/Box";
import Header from "./components/header/Header";
import LeftNav from "./components/navigation/LeftNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Login from "./components/logIn/Login";
import SignUp from "./components/signUp/SignUp";
import { Toolbar } from "@mui/material";
function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Header />
        <LeftNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </>
  );
}

export default App;
