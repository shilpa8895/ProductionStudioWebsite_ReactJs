import React from 'react';
import Navbar from './Navbar';

import '../Styles/FaqPage.css';
import heroimage from '../Images/AboutUs_PlaceholderImage.jpg';  

function FaqController() {
    return (
      <div className="container">
        <Navbar/>

        <div className="hero-container" style={{
              backgroundImage: `url(${heroimage})`
          }}>
        </div>

        <h5>Frequently Asked Questions</h5>
        {/*SEARCH BAR*/}
        <li className="search-bar">
           <input type="text" placeholder="Search..." />
           {/* You can add a button here for searching if needed */}
         </li>
      </div>
    );
}
   
export default FaqController;
