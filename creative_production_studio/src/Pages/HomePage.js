import React from 'react';
import '../Styles/HomePage.css'; 

import Navbar from './Navbar';
import Footer from './Footer';
import backgroundVideo from '../Videos/CreativeProductionStudio_HomePage.mp4';


function HomeController() {
  return (
    <div className="container">
      <Navbar /> {/*  Navbar component */}
      {/* Add your content here */}
      {/* Video background */}
      <video autoPlay muted loop className="video-bg">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Footer /> {/* Footer component */}
    </div>
    
  );
}

export default HomeController;
