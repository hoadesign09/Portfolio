import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./navLink.css";

const NavLink = () => {
  return (
    <div className="menu">
      <div className="nav-item">
        <Link to="/" className="navlink" activeStyle>
          Home
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/about" className="navlink" activeStyle>
          About
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/products" className="navlink" activeStyle>
          Products
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/team" className="navlink" activeStyle>
          Team
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/contact" className="navlink" activeStyle>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavLink;
