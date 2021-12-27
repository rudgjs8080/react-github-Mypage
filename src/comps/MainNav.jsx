import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav.css";

function MainNav() {
  return (
    <div className="nav_section">
      <div className="nav_text">KEY's PORTFOLIO</div>
      <nav className="nav">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/introduce">Contact</NavLink>
      </nav>
    </div>
  );
}
export default MainNav;
