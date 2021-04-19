import React, { useEffect, useState } from "react";
import "./Services.css";
const Services = () => {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`https://repair-house.herokuapp.com/item`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="section-title">
        <h1>Services That We Provide</h1> <br />
      </div>
      <div className="row text-center">
      {dbData.map((data) => (
        <div className="col-md-3">
          <div className="serviceBox">
            <div className="image">
              <img
                src={data.imageUrl}
                width="100%"
                height="160px"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="title">
              <h4>{data.title}</h4>
            </div>
            <div className="describe">
              <p>
              {data.description}
              </p>
            </div>
            <button className="aboutReadMore">Read More</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
