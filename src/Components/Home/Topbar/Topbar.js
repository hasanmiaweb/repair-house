import React from "react";
import { FaPhone } from "react-icons/fa";
import { ImUserPlus } from "react-icons/im";
import { IoMdLogIn, IoMdMailUnread } from "react-icons/io";
import './Topbar.css';
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div className="topbarleft">
          <IoMdMailUnread /> <span>repair-house@gmail.com</span> <FaPhone />{" "} {" "}
            <span>+8801740398196</span>
          </div>
          </div>
          <div className="col-md-6 ">
           <div className="topbarRight">
           <button className="topbarBtn "><IoMdLogIn/> Login</button>
            <button className="topbarBtn"> <ImUserPlus/> Sign Up</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
