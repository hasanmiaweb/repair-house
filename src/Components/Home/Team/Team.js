import React from "react";
import man from "../Team/TeamImg/team1.jpg";
import man2 from "../Team/TeamImg/team2.jpg";
import man3 from "../Team/TeamImg/team3.jpg";
import "./Team.css";
const Team = () => {
  return (
    <div className="team-section mb-5">
      <div className="container">
        <div className="section-title">
          <h1>Our Expart Team</h1> <br />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="teambox">
              <div className="teamimg">
                <img src={man} alt="" width="150px" className="img-fluid" />
              </div>
              <div className="team-details">
                <h2>Ismail Alex</h2>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit deleniti quo ab reprehenderit nulla enim, maxime nam
                  dicta odio consequatur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="teambox activeteam">
              <div className="teamimg">
                <img src={man2} alt="" width="150px" className="img-fluid" />
              </div>
              <div className="team-details">
                <h2>Maria Martin</h2>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit deleniti quo ab reprehenderit nulla enim, maxime nam
                  dicta odio consequatur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="teambox">
              <div className="teamimg">
                <img src={man3} alt="" width="150px" className="img-fluid" />
              </div>
              <div className="team-details">
                <h2>Hilton Alex</h2>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit deleniti quo ab reprehenderit nulla enim, maxime nam
                  dicta odio consequatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
