import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
  Button,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Login.css";
import { NavLink } from "react-router-dom";
// import { color } from "@mui/system";

function LoginForm(props) {
  const {
    formData,
    onChange,
    checkboxHandler,
    onSubmit,
    isRemember,
    formError,
  } = props;
  //   const [userName,password,isRemember] = state;

  return (
    <Grid>
      <Paper
        elevation={10}
        style={{
          padding: 50,
          height: "65vh",
          width: 300,
          margin: "90px auto",
        }}
      >
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#4ed14e" }}>
            <LockIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <form onSubmit={onSubmit}>
          <Grid>
            <TextField
              name="userName"
              label="User Name"
              type="text"
              placeholder="Enter User Name"
              variant="standard"
              id="standard-basic"
              fullWidth
              value={formData.userName}
              //   onChange={onChange}
              onChange={(e) => onChange(e, "userName")}
            />
            <p style={{ color: "red" }}>{formError.userNameErr}</p>
          </Grid>
          <Grid>
            <TextField
              name="password"
              label="Password"
              placeholder="Enter Password"
              type="password"
              variant="standard"
              id="standard-basic"
              fullWidth
              value={formData.password}
              //   onChange={onChange}
              onChange={(e) => onChange(e, "password")}
            />
            <p style={{ color: "red" }}>{formError.passwordErr}</p>
          </Grid>

          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox
                inputProps={{ "aria-label": "controlled" }}
                color="primary"
                type="checkbox"
                // name="isRemember"
                value={isRemember}
                onChange={checkboxHandler}
              />
            }
          />
          <Button
            style={{ margin: "10px 0" }}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Sign in
          </Button>
        </form>
        <Typography>
          <Link href="#" style={{ textDecoration: "none", color: "red" }}>
            Forget Password?
          </Link>
        </Typography>
        <Typography>
          Do you have an account?
          <NavLink
            to="/signup"
            style={{ textDecoration: "none", color: "red" }}
          >
            Sign Up
          </NavLink>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default LoginForm;
