import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default () => {
  return (
    <div className="page_1">
      <header className="header">
        <div className="header-business">
          <h1 className="header-business-name">ViewMyViZion</h1>
          <h3>Creativity and Innovation</h3>
          <br />
          <div className="info">
            <Link to="/portfolio">
              <h5> Portfolio</h5>
            </Link>
            <Link to="/photography">
              <h5>Photography</h5>
            </Link>
            <h5>Services</h5>
            <h5>Contact</h5>
          </div>
          <br />
          <p> &#8595;</p>
        </div>
      </header>

      <video
        className="video_control"
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
