import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <ul className="flex flex-justfy-around nav-list">
        <li className="nav-item-list">
          <Link
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="nav-item-list">
          <Link
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/home"
          >
            Home
          </Link>
        </li>
        <li className="nav-item-list">
          <Link
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/equipment"
          >
            Equipment
          </Link>
        </li>
        <li className="nav-item-list">
          <Link
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/medicines"
          >
            Medicines
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
