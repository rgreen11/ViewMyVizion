import React from "react";
import "./Home.scss";
import Header from "../component/header/header";
// import j from "../assets/The Fall Off.jpg";
import Portfolio from "../component/portfolio/portfolio";

export default () => {
  return (
    <>
      <Header />
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
            {/* <h1 className="Title">ViewMyViZion</h1> */}
            {/* <img src={j} alt="fall" className="composition__photo" />
          <img src={j} alt="fall" className="composition__photo-2" />
          <img src={j} alt="fall" className="composition__photo-3" /> */}
            <p className="about_me container">
              <p>
                {" "}
                "IN ORDER TO USE YOUR HEAD, YOU HAVE TO GO OUT OF YOUR MIND."
              </p>{" "}
              I love all art. My eyes and thoughts depict everything as art.
              Whatever was built, drawn, crafted, or constructed is considered
              art to me.
              <br />
              <br />
              My name is Jordan Canty and I am a Graphic Designer/Photographer.
              I was born and raised in Queens, New York and I am 28 years old.
              If you ask any of my friends about me they would most likely tell
              you I am creative. I really like to think outside of the box when
              it comes to designs. How else are you supposed to create/build
              something from the ground up if you are thinking like everyone
              else?
              <br />
              <br />I am highly skilled with Adobe Illustrator, Adobe Photoshop
              and Adobe Indesign. If I am not doing anything with digital art
              then I am most likely either drawing something new or taking
              pictures of unique things. ​
              <br />
              <br />I have had the great fortune of working on some truly
              inspiring projects while networking with many influential and
              creative individuals along the way. I believe in the power of
              working together to create a whole that is greater than the sum of
              its parts. For more information about my career experience, past
              projects, and current Graphic Design Portfolio, get in touch
              today.
            </p>
          </div>
        </div>
      </div>
      <Portfolio />
    </>
  );
};
