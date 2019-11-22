import React from "react";
import "./header.scss";

export default () => {
  return (
    <>
      <header className="header">
        <div className="header-business">
          <h1 className="header-business-name">ViewMyViZion</h1>
        </div>
        <div className="header-routes">
          <h3>Home</h3>
          <h3>Photos</h3>
          <h3>Portfolio</h3>
          <h3>About</h3>
        </div>
      </header>
    </>
  );
};
