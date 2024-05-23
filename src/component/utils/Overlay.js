import React from "react";
import Wrapper from "../../Wrapper";
import Input from "./InputComp";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUsersData } from "../../redux/slice";

const OverlayRight = ({ title, closeOverlay }) => {
  const { usersData } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // const [formState, setFormState] = useState([]);

  const validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "Please enter the First Name ";
    } else if (values.fullName.length > 20) {
      errors.fullName =
        "Entered first name should not be more then 10 charecers.";
    }
    // if (!values.lName) {
    //   errors.lName = "Please enter the Last Name ";
    // } else if (values.lName.length > 10) {
    //   errors.fName = "Entered last name should not be more then 10 charecers.";
    // }
    // if (!values.number) {
    //   errors.number = "Please enter the Moble No.";
    // } else if (values.number.length !== 10) {
    //   console.log("no", values.number);
    //   errors.number = "Entered mobile should heave 10 charecers";
    // }
    if (!values.email) {
      errors.email = "Please Enter Email id.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Please enter valid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      // lName: "",
      // number: "",
      email: "",
    },
    validate,
    onSubmit: (value) => {
      dispatch(setUsersData({ ...value, ...usersData }));
      formik.handleReset();
      closeOverlay();
    },
  });
  return (
    <Wrapper>
      <div className="overlay-header-container open">
        <span className="overlay-header-titel">{title}</span>
        <span className="overlay-header-icon" onClick={() => closeOverlay()}>
          <img
            className="close-icon"
            src={require("../accetes/close_icon.png")}
            alt="close"
          />
        </span>
      </div>
      <div className="overlay-body-container">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="input-bundler">
            <Input
              label="Full Name"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter Full Name"
              value={formik.values.fullName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.fName && formik.errors.fullName ? (
                  <div className="error-msg">{formik.errors.fullName}</div>
                ) : null
              }
            />
            {/* <Input
              label="Last Name"
              id="lName"
              name="lName"
              type="text"
              placeholder="Enter Last Name"
              value={formik.values.lName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.lName && formik.errors.lName ? (
                  <div className="error-msg">{formik.errors.lName}</div>
                ) : null
              }
            /> */}
            {/* <Input
              label="Mobile No."
              id="number"
              name="number"
              type="text"
              placeholder="Enter Mobile No."
              value={formik.values.number}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.number && formik.errors.number ? (
                  <div className="error-msg">{formik.errors.number}</div>
                ) : null
              }
            /> */}
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email Id. "
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.email && formik.errors.email ? (
                  <div className="error-msg">{formik.errors.email}</div>
                ) : null
              }
            />
          </div>
          <div className="overlay-footer-container">
            <button className="btn reset" onClick={formik.handleReset}>
              Reset
            </button>
            <button className="btn submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default OverlayRight;
