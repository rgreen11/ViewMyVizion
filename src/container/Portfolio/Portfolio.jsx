import React from "react";
import "./Portfolio.scss";
import image1 from "../../assets/copy.jpg";
import image2 from "../../assets/JN.jpg";
import image3 from "../../assets/TheALpha.jpg";
import image4 from "../../assets/The Watchers.jpg";
export default () => {
  return (
    <div className="center_content container">
      <div className="contain_pics">
        <img className="pics pic1" src={image4} alt="Responsive" />
        <img className="pics pic2" src={image3} alt="Responsive" />
        <img className="pics pic3" src={image2} alt="Responsive" />
        <img className="pics pic4" src={image1} alt="Responsive" />
        <img
          className="pics pic5 img-fluid"
          src="https://images.unsplash.com/photo-1577838066733-d986abfae615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1022&q=80"
          alt="Responsive "
        />

        <img
          className="pics pic5 img-fluid"
          src="https://images.unsplash.com/photo-1577838066733-d986abfae615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1022&q=80"
          alt="Responsive "
        />
        <img
          className="pics pic6 img-fluid"
          src="https://images.unsplash.com/photo-1577838066733-d986abfae615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1022&q=80"
          alt="Responsive "
        />
        <img
          className="pics pic7 img-fluid"
          src="https://images.unsplash.com/photo-1577838066733-d986abfae615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1022&q=80"
          alt="Responsive "
        />
      </div>
      <div className="about_photo">
        <h4>DOUBLE EXPOSURES</h4>
        <p>
          These double exposures are meant to express different elements of the
          world we live in. <br />
          With an array of portrait shots I have taken over time, I tend to
          match the mood of the portrait <br />
          with an element that defines it. These type of creations are
          unlimited!
        </p>
      </div>
    </div>
  );
};
