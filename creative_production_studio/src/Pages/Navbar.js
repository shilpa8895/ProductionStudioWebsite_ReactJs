// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '..//Users/../Images/CreativeProductionStudio_Logo.jpg'; 
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
          <li><Link to="/film">Film</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/*SEARCH BAR*/}
         <li className="search-bar">
           <input type="text" placeholder="Search..." />
           {/* You can add a button here for searching if needed */}
         </li>
        </ul>
      </nav>
  );
}

export default Navbar;
