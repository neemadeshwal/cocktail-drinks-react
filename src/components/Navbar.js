import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-center">
        <h3 className="nav-heading">MixMaster</h3>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/newsletter" className="nav-link">
            Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
