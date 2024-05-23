import React from "react";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <ul className="flex flex-justfy-around nav-list">
        <li className="nav-item-list">
          <NavLink to="about">About</NavLink>
        </li>
        <li className="nav-item-list">
          <NavLink to="home">Home</NavLink>
        </li>
        <li className="nav-item-list">
          <NavLink to="equipment"> Equipment</NavLink>
        </li>
        <li className="nav-item-list">
          <NavLink to="medicines">Medicines</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavList;
