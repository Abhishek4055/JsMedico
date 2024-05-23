import React, { useCallback, useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
// import { IoHome } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
// import { GiMedicines } from "react-icons/gi";
// import { IoSearchCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
// import { setIsLogin, setIsOpenInfoOverlay, setUsersData } from "../redux/slice";
import NavList from "./utils/NavList";
import Button from "./Button";
import { Link } from "react-router-dom";
import Input from "./utils/InputComp";
import { dummyEquipment } from "./dummyData";
import { setIsShowUserInfo, setSearchedData } from "../redux/slice";

const Header = () => {
  const { usersData, noOfItemInCart, isShowUserInfo, searchedData } =
    useSelector((state) => state.users);
  const [test, setTest] = useState(searchedData);
  const dispatch = useDispatch();

  const searchHandlerWithDebounce = (value) => {
    // console.log(value);
    dispatch(setSearchedData(value));
  };

  return (
    <>
      <div className="gird-container top-banner">
        <div className="menu-icons" id="box1">
          <TiThMenu color="white" />
        </div>
        <div className="company-logo" id="box2">
          <Link to="home" className="flex flex-justfy">
            <img
              className="company-logo-img"
              src={require("./accetes/compani_logo.png")}
            />
          </Link>
        </div>
        <div className="search-container" id="box3">
          <Input
            disabled=""
            label=""
            id="medicines"
            name="medicines"
            type="text"
            placeholder="Search..."
            inputFileldStyle="search-box"
            formConstainerStyle="input-search-container"
            value={searchedData}
            onChange={(e) => searchHandlerWithDebounce(e.target.value)}
          />
        </div>
        <div className="nav-list" id="box4">
          <NavList />
        </div>
        <div
          className="user-info"
          id="box5"
          onClick={() => dispatch(setIsShowUserInfo(!isShowUserInfo))}
        >
          <FaRegUserCircle size={30} color="white" />
          <h5 className="user-text"> {usersData.name} </h5>
        </div>
        <div className="cart-info" id="box6">
          <div
            className="cart-icon"
            id="box1"
            onClick={() => console.log("clicked")}
          >
            <p className="cart-text"> {noOfItemInCart} </p>
            <MdOutlineShoppingCart size={30} color="white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
