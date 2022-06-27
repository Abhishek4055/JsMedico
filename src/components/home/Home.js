import React from "react";
import { Grid, Paper } from "@mui/material";

function Home() {
  return (
    <>
      <Grid>
        <Paper
          elevation={3}
          // style={{
          //   padding: 50,
          //   margin: "40px auto",
          // }}
        >
          <h1>This is Home page</h1>
        </Paper>
      </Grid>
    </>
  );
}

export default Home;
