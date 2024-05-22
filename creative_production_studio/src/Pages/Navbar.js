// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/CreativeProductionStudio_Logo.jpg'; 
import '../Styles/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <img src={logo} alt="Creative Production Studio Logo" />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;
