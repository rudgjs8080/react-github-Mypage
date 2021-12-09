import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav.css";

function MainNav() {
  return (
    <nav className="nav">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/introduce">Introduce</NavLink>
    </nav>
  );
}
export default MainNav;
