import React from "react";

const AddService = () => {
  return (
    <div className="orderlistwrap mt-5">
    <div className="container">
      <div className="row">
          <div className="col-md-6 border border-light">
            <h3>Service Title</h3>
            <div className="service">
              <input type="text" placeholder="Enter Title" />
            </div>
            <br/>
            <h3>Description</h3>
            <div className="service">
              <textarea
                name=""
                placeholder="Enter Description "
                id=""
                cols="40"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Image</h3>
            <input type="file" />
          </div>
          
        </div> <br/>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default AddService;
