import * as React from "react";
import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function HeaderBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          style={{
            backgroundColor: "black",
          }}
        >
          <Typography
            variant="h5"
            style={{
              flexGrow: 1,
            }}
          >
            JS Healthcare
          </Typography>

          <Button color="inherit" component={NavLink} to="/">
            <HomeIcon color="inherit" />
          </Button>

          <Button color="inherit" component={NavLink} to="cart">
            <ShoppingCartIcon color="inherit" />
          </Button>

          <Button color="inherit" component={NavLink} to="login">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}
