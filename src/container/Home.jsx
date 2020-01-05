import React from "react";
import "./Home.scss";
import j from "../assets/The Fall Off.jpg";

{
  /* <footer className="footer-text">
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Linkedin</a>
      </footer> */
}

export default () => {
  return (
    <div className="image-holder">
      <div className="home-background-image">
        <div className="home-background-image_name-container">
          <h1 className="home-background-image_name-container-name">
            Jordan Canty
          </h1>
        </div>
      </div>

      <div className="second-home-background-image">
        <div className="PageData">
          <h1 className="Title">ViewMyViZion</h1>
          <img src={j} alt="fall" className="composition__photo" />
          {/* <h3 className="Photos">Photos</h3> */}
          <h3 className="Portfolio">Portfolio</h3>
          <h3 className="About">About</h3>
        </div>
      </div>
    </div>
  );
};
