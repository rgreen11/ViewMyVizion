import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
export default () => {
  return (
    <header className="navbar">
      <Link to="/">
        <h1>View My Vizion</h1>
      </Link>
      <Link to="/portfolio">
        <h5> Portfolio</h5>
      </Link>
      <Link to="/photography">
        <h5>Photography</h5>
      </Link>
      <Link to="/services">
        <h5>Services</h5>
      </Link>
      <Link to="/contact">
        <h5>Contact</h5>
      </Link>
    </header>
  );
};
