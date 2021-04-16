import React from "react";
import BanifitImage from '../../../images/expreance/51-Programmer.png';
import BanifitImage2 from '../../../images/expreance/c3.png';
import BanifitImage3 from '../../../images/expreance/c4.png';
import './ExtraBenefit.css';
const ExtraBenefit = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-4">
          <div className="ExtraBenefitBox text-center">
            <div className="BenefitImg">
              <img src={BanifitImage} className="img-fluid" width="100px" alt="" />
            </div>
            <div className="benefitTitle">
              <h2>Expert Engineers</h2>
            </div>
            <div className="desk">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, inventore molestias. Autem fuga ullam aut reiciendis?
                Libero saepe qui deserunt.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ExtraBenefitBox active text-center">
            <div className="BenefitImg">
              <img src={BanifitImage2} className="img-fluid" width="100px" alt="" />
            </div>
            <div className="benefitTitle">
              <h2>On Time Delivery</h2>
            </div>
            <div className="desk">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, inventore molestias. Autem fuga ullam aut reiciendis?
                Libero saepe qui deserunt.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ExtraBenefitBox text-center">
            <div className="BenefitImg">
              <img src={BanifitImage3} className="img-fluid" width="100px" alt="" />
            </div>
            <div className="benefitTitle">
              <h2>Best Technology</h2>
            </div>
            <div className="desk">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, inventore molestias. Autem fuga ullam aut reiciendis?
                Libero saepe qui deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraBenefit;
