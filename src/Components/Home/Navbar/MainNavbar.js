import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png';
import './MainNavbar.css';
const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <div className="container">
    <Navbar.Brand as={Link} to="/">
      <img src={logo} alt=""/>
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" >About</Nav.Link>
          <Nav.Link as={Link} to="/services" >Services</Nav.Link>
          <Nav.Link as={Link} to="/Team" >Team</Nav.Link>
          <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
    </Navbar>
  );
};

export default MainNavbar;
