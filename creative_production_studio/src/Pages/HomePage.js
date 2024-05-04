import React from 'react';
import '../Styles/HomePage.css'; 

import Navbar from './Navbar';
import backgroundVideo from '../Videos/CreativeProductionStudio_HomePage.mp4';


function HomeController() {
  return (
    <div className="container">
      <Navbar /> {/* Include the Navbar component */}
      {/* Add your content here */}
      {/* Video background */}
      <video autoPlay muted loop className="video-bg">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
  );
}

export default HomeController;
