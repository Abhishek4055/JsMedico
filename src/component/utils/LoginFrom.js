import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "./InputComp";
import OtpComp from "../OtpComp";
import { useDispatch, useSelector } from "react-redux";
import { setUsersData } from "../../redux/slice";
import Button from "../Button";

function LoginFrom() {
  const [isShowOtp, setIsShowOtp] = useState(false);
  const [mobileNo, setMobileNo] = useState({ molileNo: "" });
  const dispatch = useDispatch((state) => state.userDeta);
  const { usersData } = useSelector((state) => state.users);
  console.log("userData", usersData);
  const validate = (values) => {
    let errors = {};
    if (!values.molileNo) {
      errors.molileNo = "Please enter the Moble No.";
    } else if (
      values.molileNo.length !== 10 ||
      /[^0-9]/g.test(values.molileNo)
    ) {
      errors.molileNo = "please enter valied mobile no.";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: mobileNo,
    validate,
    onSubmit: (value) => {
      setIsShowOtp(true);
      setMobileNo(value);
      dispatch(setUsersData({ ...usersData, mobileNo: value.molileNo }));
    },
  });

  const onResetHansler = () => {
    setIsShowOtp(!isShowOtp);
    setMobileNo({ molileNo: "" });
    dispatch(setUsersData({ ...usersData, mobileNo: "" }));
  };

  return (
    <>
      <div className="container flex view-port-hight index">
        <div className="login-container flex-direction-colm">
          <div className="login-welcome-header top-banner">
            <h2>Welcome to the JS Medico</h2>
          </div>
          <h3 className="login-header"> Login with Mobile </h3>
          <form
            className="flex-direction-colm login-form "
            onSubmit={formik.handleSubmit}
          >
            <Input
              formConstainerStyle="form-container"
              inputFileldStyle="form-input"
              labelStyle="form-input"
              disabled={usersData?.molileNo}
              label=""
              id="molileNo"
              name="molileNo"
              type="text"
              placeholder="Enter Mobile No."
              value={formik.values.molileNo}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.molileNo && formik.errors.molileNo ? (
                  <div className="error-msg">{formik.errors.molileNo}</div>
                ) : null
              }
            />
            {!isShowOtp && (
              <Button className="primery-btn" type="submit">
                Get Otp
              </Button>
            )}
          </form>
          {isShowOtp && (
            <OtpComp
              length={4}
              mobileNo={mobileNo}
              onResetHansler={onResetHansler}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default LoginFrom;
