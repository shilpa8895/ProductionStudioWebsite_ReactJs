// AboutPage.js

import React from 'react';
import '../Styles/AboutPage.css'; 
import Navbar from './Navbar';
import Footer from './Footer';

function AboutPage() {
  return (
    <div className="page-container">
      <Navbar /> {/* Navbar component */}
      <div className="content-wrap">
        <div className="about-content">
          <h1>About Creative Production Studio</h1>
          <p>Creative Production Studio is a leading film production company dedicated to bringing the best of cinema to the world. We specialize in creating unique, impactful stories that resonate with audiences everywhere. Our team is composed of experienced professionals who are passionate about film and storytelling.</p>
          <h2>Our Mission</h2>
          <p>Our mission is to produce high-quality films that entertain, inspire, and challenge our viewers. We strive to push the boundaries of creativity and innovation in every project we undertake.</p>
        </div>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
}

export default AboutPage;
