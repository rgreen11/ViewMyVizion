import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
export default () => {
  return (
    <header className="navbar">
      <h1>View My Vizion</h1>
      <Link to="/portfolio">
        <h5> Portfolio</h5>
      </Link>
      <Link to="/photography">
        <h5>Photography</h5>
      </Link>
      <h1>Services</h1>
      <h1>Contact</h1>
    </header>
  );
};
