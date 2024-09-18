import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <ul className="flex flex-justfy-around nav-list">
        <li className="nav-item-list">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item-list">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item-list">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/equipment"
          >
            Equipment
          </NavLink>
        </li>
        <li className="nav-item-list">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/medicines"
          >
            Medicines
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavList;
