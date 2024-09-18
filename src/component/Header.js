import React from "react";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import NavList from "./utils/NavList";
import Input from "./utils/InputComp";
import { setIsShowUserInfo, setSearchedData } from "../redux/userSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const { usersData, isShowUserInfo, searchedData } = useSelector(
    (state) => state.users
  );
  const { cartItem } = useSelector((state) => state.cart);

  // const [test, setTest] = useState(searchedData);
  const dispatch = useDispatch();

  const searchHandlerWithDebounce = (value) => {
    dispatch(setSearchedData(value));
  };

  return (
    <>
      <div className="gird-container top-banner">
        <div className="menu-icons" id="box1">
          <TiThMenu color="white" />
        </div>
        <div className="company-logo" id="box2">
          <Link to="/" className="flex flex-justfy">
            <img
              className="company-logo-img"
              src={require("./accetes/compani_logo.png")}
              alt="LOGO"
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
          <Link to="/cart">
            <div
              className="cart-icon"
              id="box1"
              onClick={() => console.log("clicked")}
            >
              <p className="cart-text"> {cartItem.length} </p>
              <MdOutlineShoppingCart size={30} color="white" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
