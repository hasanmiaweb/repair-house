import React, { useContext } from "react";
import { FaPhone } from "react-icons/fa";
import { ImUserPlus } from "react-icons/im";
import { IoMdLogIn, IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Topbar.css";
const Topbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="topbarleft">
              <IoMdMailUnread /> <span>repair-house@gmail.com</span> <FaPhone />{" "}
              <span>+8801740398196</span>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="topbarRight">
              {loggedInUser.email ? (
                <strong>
                  {loggedInUser.name}
                  <img src={loggedInUser.photoURL} alt="" />
                </strong>
              ) : (
                <div className="login-reg">
                  <Link to="/login">
                    <button Link to="/login" className="topbarBtn ">
                      <IoMdLogIn /> Login
                    </button>
                  </Link>
                  <Link to="/login">
                    {" "}
                    <button className="topbarBtn">
                      <ImUserPlus /> Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
