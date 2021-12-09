import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Portfolio.css";

function Portfolio() {
  return (
    <div className="pages">
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio_list">
          <NavLink to="/portfolio/guestbook">
            <div>GusetBook</div>
          </NavLink>
          <NavLink to="/portfolio/meett">
            <div>Meett</div>
          </NavLink>
          <NavLink to="/portfolio/woo">
            <div>Woo</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
