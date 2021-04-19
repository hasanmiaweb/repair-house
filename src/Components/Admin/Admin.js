import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import "./Admin.css";
import AddServices from "./SideBar/AddServices/AddServices";
import MakeAdmin from "./SideBar/MakeAdmin/MakeAdmin";
import OrderList from "./SideBar/OrderList/OrderList";
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
              <OrderList></OrderList>
            </PrivateRoute>
            <PrivateRoute exact path="/admin/orderlist">
              <OrderList></OrderList>
            </PrivateRoute>
            <PrivateRoute exact path="/admin/addservice">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute exact path="/admin/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
        </Switch>
          </div>
      </Router>
    </div>
  );
};

export default Admin;
