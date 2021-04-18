import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Admin/Admin";
import About from "./Home/About/About";
import Contact from "./Home/Contact/Contact";
import Home from "./Home/Home/Home";
import MainNavbar from "./Home/Navbar/MainNavbar";
import Services from "./Home/Services/Services";
import Team from "./Home/Team/Team";
import Topbar from "./Home/Topbar/Topbar";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const MainApp = () => {
  return (
    <Router>
      <Topbar></Topbar>
      <MainNavbar></MainNavbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/team">
          <Team></Team>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default MainApp;
