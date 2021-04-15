import React from "react";
import service1 from '../../../images/service/service-1.svg';
import service2 from '../../../images/service/service-2.svg';
import service3 from '../../../images/service/service-3.svg';
import './Services.css';
const Services = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="section-title">
        <h2>Services That We Provide</h2> <br />
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="serviceBox">
          <div className="image">
                  <img src={service1}  width="100px" className="img-fluid"alt=""/>
              </div>
            <div className="title">
              <h4>Desktop Repair</h4>
            </div>
            <div className="describe">
             <p> Our highly qualified team offers a wide range of PC & Mac repair
              services as well as free diagnostics.</p>
            </div>
            <button className="aboutReadMore">Read More</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="serviceBox">
              <div className="image">
                  <img src={service2}  width="100px" className="img-fluid" alt=""/>
              </div>
            <div className="title">
              <h4>Desktop Repair</h4>
            </div>
            <div className="describe">
             <p> Our highly qualified team offers a wide range of PC & Mac repair
              services as well as free diagnostics.</p>
            </div>
            <button className="aboutReadMore">Read More</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="serviceBox">
          <div className="image">
                  <img src={service3} width="100px" className="img-fluid" alt=""/>
              </div>
            <div className="title">
              <h4>Desktop Repair</h4>
            </div>
            <div className="describe">
             <p> Our highly qualified team offers a wide range of PC & Mac repair
              services as well as free diagnostics.</p>
            </div>
            <button className="aboutReadMore">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
