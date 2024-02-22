import React from 'react'
import { Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function MyNavBar() {
  return (
   
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">My Events App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink exact to="/" className="nav-link" activeClassName="active">My Events</NavLink>
        <NavLink to="/" className="nav-link" activeClassName="active">Events</NavLink>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
}

export default MyNavBar