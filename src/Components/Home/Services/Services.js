import React from "react";
import service1 from '../../../images/service/service-1.svg';
import service2 from '../../../images/service/service-2.svg';
import service3 from '../../../images/service/service-3.svg';
import service4 from '../../../images/service/service-4.svg';
import service5 from '../../../images/service/service-5.svg';
import service6 from '../../../images/service/service-6.svg';
import './Services.css';
const Services = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="section-title">
        <h1>Services That We Provide</h1> <br />
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
        <div className="col-md-4">
          <div className="serviceBox">
          <div className="image">
                  <img src={service4} width="100px" className="img-fluid" alt=""/>
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
                  <img src={service5} width="100px" className="img-fluid" alt=""/>
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
                  <img src={service6} width="100px" className="img-fluid" alt=""/>
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
