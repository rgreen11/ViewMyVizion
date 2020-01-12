import React from "react";
import "./header.scss";

export default () => {
  return (
    <div className="page_1">
      <header className="header">
        <div className="header-business">
          <h1 className="header-business-name">ViewMyViZion</h1>
          <h3>Creativity and Innovation</h3>
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
