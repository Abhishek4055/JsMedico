import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
// import LockIcon from "@mui/icons-material/Lock";

function SignUp() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    emailId: "",
    password: "",
  });

  const [signupError, setSignupError] = useState({
    firstNameErr: "",
    lastNameErr: "",
    mobileNoErr: "",
    passwordErr: "",
  });

  // const [errorFlag, setErrorFlag] = useState(false);

  //   useEffect(() => {
  //     console.log("aaa", formError, Object.keys(formError).length);
  //     if (Object.keys(formError).length === 0 && errorFlag) {
  //       //   console.log(state);
  //     }
  //   }, [errorFlag, formError]);

  const validation = (data) => {
    console.log(data);
    let errorFlag = false;
    if (!data.firstName && data.firstName.trim().length === 0) {
      console.log("FirstName empty");
      setSignupError((prevState) => ({
        ...prevState,
        firstNameErr: "Please Enter the FirstName",
      }));
      errorFlag = true;
    } else {
      console.log("username filled");
      setSignupError((prevState) => ({
        ...prevState,
        firstNameErr: "",
      }));
      errorFlag = false;
    }

    if (!data.lastName && data.lastName.trim().length === 0) {
      setSignupError((prevState) => ({
        ...prevState,
        lastNameErr: "Please Enter the LastName",
      }));
      errorFlag = true;
    } else {
      setSignupError((prevState) => ({
        ...prevState,
        lastNameErr: "",
      }));
      errorFlag = false;
    }

    if (!data.mobileNo && data.mobileNo.trim().length === 0) {
      console.log(data.mobileNo.trim().length);
      setSignupError((prevState) => ({
        ...prevState,
        mobileNoErr: "Please Enter the MobileNo",
      }));
      errorFlag = true;
    } else {
      console.log("username filled");
      setSignupError((prevState) => ({
        ...prevState,
        mobileNoErr: "",
      }));
      errorFlag = false;
    }

    if (!data.password && data.password.trim().length === 0) {
      setSignupError((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter the password",
      }));
      errorFlag = true;
    } else {
      setSignupError((prevState) => ({
        ...prevState,
        passwordErr: "",
      }));
      errorFlag = false;
    }

    return errorFlag;
  };

  // const onChange = (e, type) => {
  //   setState({
  //     ...state,
  //     userName: type === "username" ? e.target.value : state.userName,
  //     password: type === "password" ? e.target.value : state.password,
  //   });
  // };

  const onChange = (e, type) => {
    e.preventDefault();
    const value = e.target.value;
    setSignupData((prevState) => ({
      ...prevState,
      [type]: value,
    }));

    setSignupError((prevState) => ({
      ...prevState,
      [`${type}Err`]: "",
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validation(signupData)) {
      alert(`Please enter the required fields`);
    } else {
      alert(
        ` Name :${signupData.firstName} ${signupData.middleName}, ${signupData.lastName}, Mobile NO :${signupData.mobileNo},Email Id :${signupData.emailId}, password : ${signupData.password} }`
      );
    }
  };

  return (
    <Grid>
      <Paper
        elevation={10}
        style={{
          padding: 30,
          height: "65vh",
          width: 300,
          margin: "90px auto",
        }}
      >
        <Grid align="center">
          {/* <Avatar style={{ backgroundColor: "#4ed14e" }}>
            <LockIcon />
          </Avatar> */}
          <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={onSubmit}>
          <Grid>
            <TextField
              name="firstName"
              label="Fist Name"
              type="text"
              placeholder="Enter First Name"
              variant="standard"
              id="standard-basic"
              fullWidth
              value={signupData.firstName}
              //   onChange={onChange}
              onChange={(e) => onChange(e, "firstName")}
            />
            <p style={{ color: "red" }}>{signupError.firstNameErr}</p>
          </Grid>
          <Grid>
            <TextField
              name="middleName"
              label="Middle Name"
              type="text"
              placeholder="Enter Middle Name"
              variant="standard"
              id="standard-basic"
              fullWidth
              value={signupData.middleName}
              //   onChange={onChange}
              onChange={(e) => onChange(e, "middleName")}
            />
          </Grid>
          <Grid>
            <TextField
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="Enter Last Name"
              variant="standard"
              id="standard-basic"
              fullWidth
              value={signupData.lastName}
              onChange={(e) => onChange(e, "lastName")}
            />
            <p style={{ color: "red" }}>{signupError.lastNameErr}</p>
          </Grid>
          <Grid>
            <TextField
              name="mobileNo"
              label="Mobile Name"
              type="number"
              placeholder="Enter  Mobile No"
              variant="standard"
              id="standard-basic"
              fullWidth
              value={signupData.mobileNo}
              onChange={(e) => onChange(e, "mobileNo")}
            />
            <p style={{ color: "red" }}>{signupError.mobileNoErr}</p>
          </Grid>
          <Grid>
            <TextField
              name="emailId"
              label="Email Id"
              type="email"
              placeholder="Enter Email Id"
              variant="standard"
              id="standard-basic"
              fullWidth
              value={signupData.emailId}
              onChange={(e) => onChange(e, "emailId")}
            />
            {/* <p>{formError.userNameErr}</p> */}
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
              value={signupData.password}
              onChange={(e) => onChange(e, "password")}
            />
            <p style={{ color: "red" }}>{signupError.passwordErr}</p>
          </Grid>

          <Button
            style={{ margin: "10px 0" }}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
export default SignUp;
