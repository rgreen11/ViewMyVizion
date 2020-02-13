import React from "react";
import "./Footer.scss";

export default () => {
  return (
    <>
      <div className="conatiner_logo">
        <div>
          <img
            src="https://img.icons8.com/color/48/000000/twitter.png"
            alt="twitter icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/instagram-new.png"
            alt="instagram logo"
          />

          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin logo"
          />
        </div>
      </div>
      <div className="cpy_write">©2016 by J.C. Designs.</div>
    </>
  );
};
