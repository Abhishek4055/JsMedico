import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLogin,
  setIsShowUserInfo,
  setUsersData,
} from "../../redux/userSlice";
import Button from "../utils/Button";

const UserInfoModule = () => {
  const { isLogin, usersData, isShowUserInfo } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  return (
    <div className="info-module ">
      <Button
        className="primery-btn"
        onClick={() => {
          dispatch(setIsLogin(!isLogin));
          dispatch(setIsShowUserInfo(!isShowUserInfo));
          dispatch(setUsersData({ ...usersData, molileNo: "" }));
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserInfoModule;
