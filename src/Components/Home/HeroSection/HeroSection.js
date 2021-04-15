import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <div className="heroContent">
              <h1>QUALITY APPLIANCE REPAIR</h1>
              <br />
              <p>
                We are the largest full-service appliance repair company in the
                world. We service all types and brands of home appliances.
                People trust us. quod recusandae explicabo odio non, praesentium
                numquam. Perspiciatis,
              </p>

              <div className="heroBtn">
                <button>Our Services</button>
                <button>Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
