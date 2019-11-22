import React from "react";
import "./Home.scss";
import "../assets/The Fall Off.jpg";

export default () => {
  return (
    <div className="image-holder">
      <div className="home-background-image">
        <div className="home-background-image_name-container">
          <h1 className="home-background-image_name-container-name">
            Jordan Canty
          </h1>
          <a className="home_button">Portfolio</a>
        </div>
      </div>

      <footer className="footer-text">
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Linkedin</a>
      </footer>
    </div>
  );
};
