import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default () => {
  return (
    <div className="page_1">
      <header className="header">
        <div className="header-business">
          <h1 className="header-business-name">ViewMyViZion</h1>
          <h3 className="header-business-name_2">Creativity and Innovation</h3>
          <br />
          <div className="info">
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
          </div>
          <br />
          <p> &#8595;</p>
        </div>
      </header>

      <video
        className="video_control"
        playsinline
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        poster="videos/poster.png"
      >
        <source
          src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          type="video/mp4"
        />
        <source
          src="http://www.mygreencity.in/Enquiry.webm"
          type="video/webm"
        />
        <source src="http://www.mygreencity.in/Enquiry.ogv" type="video/ogg" />
      </video>
    </div>
  );
};
