import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header(props) {

  return (
    <header>
      <h1>Matthew Jerich</h1>
      <ul id='nav'>
        <li>
          <Nav.Link as={NavLink} to="/about">
            About Me
          </Nav.Link>
        </li>
        <li>
          <Nav.Link as={NavLink} to="/portfolio">
            Portfolio
          </Nav.Link>
        </li>
        <li>
          <Nav.Link as={NavLink} to="/resume">
            Resume
          </Nav.Link>
        </li>
        <li>
          <Nav.Link as={NavLink} to="/contact">
            Contact Form
          </Nav.Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;