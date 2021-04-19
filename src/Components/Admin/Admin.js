import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import "./Admin.css";
import AddServices from "./SideBar/AddServices/AddServices";
import MakeAdmin from "./SideBar/MakeAdmin/MakeAdmin";
import ManageService from "./SideBar/ManageService/ManageService";
import Sidebar from "./SideBar/Sidebar";
const Admin = () => {
  return (
    <div>
      <Router>
        <PrivateRoute>
          <div className="sidebar-left">
            <Sidebar></Sidebar>
          </div>
        </PrivateRoute>
        <div className="sidebar-right">
          <Switch>
            <PrivateRoute exact path="/admin">
            <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute exact path="/admin/addservice">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute exact path="/admin/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute exact path="/admin/manageservices">
              <ManageService></ManageService>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Admin;
