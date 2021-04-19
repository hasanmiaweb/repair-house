import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiBorderAll, BiUserPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../Admin.css";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <Link to="/admin/addservice">
            <li>
              <div className="sidebarIcons">
                <AiFillPlusCircle />
              </div>
              Add service
            </li>
          </Link>
          <Link to="/admin/makeadmin">
            {" "}
            <li>
              <div className="sidebarIcons">
                <BiUserPlus />
              </div>
              Make Admin
            </li>
          </Link>
          <Link to="/admin/manageservices">
            {" "}
            <li>
              <div className="sidebarIcons">
                <BiBorderAll />
              </div>
              Manage Services
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
