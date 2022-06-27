import { Grid, Paper, Button } from "@mui/material";
import React from "react";

function Cart() {
  return (
    <>
      <Grid

      //   align="right"
      >
        <Paper
          elevation={10}
          style={{
            padding: 50,
            height: "65vh",
            width: 300,
            margin: "90px auto",
          }}
        >
          <Grid>
            <h4> Bi-pap</h4>
            Amount- 50000 /-
          </Grid>

          <Button
            variant="contained"
            disabled
            style={{
              margin: "90px ",
              backgroundColor: "white",
            }}
          >
            Pay
          </Button>
        </Paper>
      </Grid>
    </>
  );
}

export default Cart;
