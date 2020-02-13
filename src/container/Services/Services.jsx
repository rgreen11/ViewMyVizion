import React from "react";
import "./Services.scss";

export default () => {
  return (
    <div className="serv_container">
      <div className="serv">
        <h3>SERVICES</h3>
        <h5>THE FULL PACKAGE</h5>
        <h5>ABSTRACT THINKING. INNOVATIVE SOLUTIONS.</h5>
      </div>

      <div className="imgs">
        <div className="imgs_serv">
          <img
            src="https://images.unsplash.com/photo-1544995228-a7a3abc39d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="black woman"
            className="ex_pick"
          />
          <h5>GRAPHIC DESIGN </h5>
          <h5> EXCELLENT RESULTS</h5>
          <p>
            I am able to provide this service thanks to years of gathering
            specialized experience. With a talent for conceptualizing and
            executing highly creative ideas, this service allows me to ensure no
            two projects are the same. Get in touch with me today to learn how
            this service can make a difference in your upcoming project.
          </p>
          <button>Get in Touch</button>
        </div>

        <div className="imgs_serv">
          <img
            src="https://images.unsplash.com/photo-1544995228-a7a3abc39d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="black woman"
            className="ex_pick"
          />
          <h5>PHOTOGRAPHY </h5>
          <h5>YOU NAME IT</h5>
          <p>
            Offering a wide range of photography from Portrait, Fashion, Wedding
            and more. Everyone can pick up a camera and press buttons. But not
            everyone knows angles, lighting, specific settings for the right
            moment. I would be honored to provided you with my unique vision and
            creativity!
          </p>
          <button>Get in Touch</button>
        </div>

        <div className="imgs_serv">
          <img
            src="https://images.unsplash.com/photo-1544995228-a7a3abc39d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="black woman"
            className="ex_pick"
          />
          <h5>LOGO DESIGN/ILLUSTRATIONS </h5>
          <h5>PRACTICAL SOLUTIONS</h5>
          <p>
            I’ve been a professional in this industry since 2014 and have
            developed various skills in the process. Take advantage of this
            service to reach new heights and gain influence in your field. With
            extensive technical expertise and a knack for clear and creative
            ideas, I’m fully capable of bringing your design goals to fruition.
          </p>
          <button>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};
