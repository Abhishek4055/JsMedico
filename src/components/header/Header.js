import * as React from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header() {
  const [tabsValue, SetTabsValue] = useState();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "black" }}
      >
        <Toolbar>
          <Typography> JS MedicoHealth </Typography>
          <Router>
            <Button color="inherit" component={NavLink} to="/">
              <HomeIcon color="inherit" />
            </Button>
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="inherit"
              value={tabsValue}
              onChange={(e, tabsValue) => SetTabsValue(tabsValue)}
              indicatorColor="secondary"
            >
              <Tab label="About Us" />
              <Tab label=" Constant" />
            </Tabs>

            <Button
              sx={{ marginLeft: "75px", color: "inherit" }}
              component={NavLink}
              to="cart"
            >
              <ShoppingCartIcon />
            </Button>

            <Button
              sx={{ color: "inherit", marginLeft: "10px" }}
              component={NavLink}
              to="login"
            >
              Login
            </Button>
          </Router>
        </Toolbar>
      </AppBar>
    </>
  );
}
