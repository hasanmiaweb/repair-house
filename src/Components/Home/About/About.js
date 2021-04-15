import React from "react";
import aboutRightimage from "../../../images/aboutright.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="section-title">
        <h1>About US</h1> <br />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about_content">
            <h1>
              A Few Words About <br /> Repair House
            </h1>
            <br />
            <p>
              At Yash Computer, we are also known as a recognized company when
              it comes to computer sales. We offer one of the best PC sales and
              services in Vadodara. Not just this, our trained technicians are
              certified experts who can offer you the finest PC repair and
              services.
            </p>
          </div>
          <br />
          <button className="aboutReadMore">Learn More</button>
        </div>
        <div className="col-md-6">
          <img src={aboutRightimage} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
