import React, { useState } from "react";
import LoginForm from "./LoginForm";
function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [isRemember, setIsRemember] = useState(false);
  const [formError, setFormError] = useState({
    userNameErr: "",
    passwordErr: "",
  });
  //   const [errorFlag, setErrorFlag] = useState(false);

  //   useEffect(() => {
  //     console.log("aaa", formError, Object.keys(formError).length);
  //     if (Object.keys(formError).length === 0 && errorFlag) {
  //       //   console.log(state);
  //     }
  //   }, [errorFlag, formError]);

  const validation = (data) => {
    console.log(data);
    let errorFlag = false;
    if (!data.userName && data.userName.trim().length === 0) {
      console.log("username empty");
      setFormError((prevState) => ({
        ...prevState,
        userNameErr: "Please Enter the username",
      }));
      errorFlag = true;
    } else {
      console.log("username filled");
      setFormError((prevState) => ({
        ...prevState,
        userNameErr: "",
      }));
      errorFlag = false;
    }

    if (!data.password && data.password.trim().length === 0) {
      setFormError((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter the password",
      }));
      errorFlag = true;
    } else {
      setFormError((prevState) => ({
        ...prevState,
        passwordErr: "",
      }));
      errorFlag = false;
    }

    return errorFlag;
  };

  const checkboxHandler = () => {
    setIsRemember(!isRemember);
  };

  //   const onChange = (e, type) => {
  //     setState({
  //       ...state,
  //       userName: type === "username" ? e.target.value : state.userName,
  //       password: type === "password" ? e.target.value : state.password,
  //     });
  //   };

  const onChange = (e, type) => {
    e.preventDefault();
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [type]: value,
    }));

    setFormError((prevState) => ({
      ...prevState,
      [`${type}Err`]: "",
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validation(formData)) {
      alert(`Please enter the required fields`);
    } else {
      alert(
        `User Name :${formData.userName}, password : ${formData.password} , CheckBox Enable : ${isRemember}`
      );
    }
  };
  return (
    <div>
      <LoginForm
        formData={formData}
        isRemember={isRemember}
        onChange={onChange}
        checkboxHandler={checkboxHandler}
        onSubmit={onSubmit}
        formError={formError}
      />
    </div>
  );
}

export default Login;
