import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../redux/userSlice";
import Button from "./utils/Button";

function OtpComp({ length, mobileNo, onResetHansler }) {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.users);
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const otpFieldfRef = useRef([]);

  const otpOnChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    // allow one number in each input field
    const updatedOTP = [...otp];
    updatedOTP[index] = value.substring(value.length - 1);
    setOtp(updatedOTP);

    // move to the next otp input field
    if (value && index < length - 1 && otpFieldfRef.current[index + 1]) {
      otpFieldfRef.current[index + 1].focus();
    }
  };
  const otpOnClick = (e, index) => {
    otpFieldfRef.current[index].setSelectionRange(1, 1);
  };
  const otpOnKeyDown = (e, index) => {
    // move to the focus back on click of back space;
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      otpFieldfRef.current[index - 1]
    ) {
      otpFieldfRef.current[index - 1].focus();
    }
  };

  const onOtpSubmitHandler = useCallback(
    (event, otp) => {
      event.preventDefault();
      if (otp.length === length) {
        dispatch(setIsLogin(!isLogin));
      }
    },
    [mobileNo]
  );

  useEffect(() => {
    if (otpFieldfRef.current[0]) {
      otpFieldfRef.current[0].focus();
    }
  }, []);

  return (
    <div className="otp-container">
      <form
        className="otp-input"
        onSubmit={(e) => onOtpSubmitHandler(e, otp.join(""))}
        onReset={(e) => onResetHansler(e)}
      >
        <div className="otp-input-wrapper ">
          {otp.map((el, i) => {
            return (
              <input
                key={i}
                className="otp-input-field"
                type="text"
                placeholder=""
                value={el}
                onChange={(e) => otpOnChange(e, i)}
                onClick={(e) => otpOnClick(e, i)}
                onKeyDown={(e) => otpOnKeyDown(e, i)}
                ref={(input) => (otpFieldfRef.current[i] = input)}
              />
            );
          })}
        </div>
        <footer className="login-footer">
          <Button className="secondery-btn" type="submit">
            Login
          </Button>
          <Button className="secondery-btn" type="reset">
            Reset
          </Button>
        </footer>
      </form>
    </div>
  );
}

export default OtpComp;
