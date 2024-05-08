import React from 'react';
import '../Styles/AboutUsPage.css'; 

import Navbar from './Navbar';
import heroimage from '../Images/AboutUs_PlaceholderImage.jpg'; 

function AboutUsController() {
    return (
      <div className="container">
        <Navbar/>
        <div className="hero-container" style={{
              backgroundImage: `url(${heroimage})`
          }}>
        </div>
        <h5>About Us</h5>
        <p>
          Welcome to Universal Entertainment, your premier destination for diverse and captivating media content in Australia.
          </p>
          <br />
          <p>
          At Universal Entertainment, we pride ourselves on being a leading distributor of theatrical releases, television/ cable
          broadcast content, and physical media (CDs/ DVDs) sourced from across the globe. Our mission is simple yet profound: to bridge
          cultures and languages by bringing the most compelling stories to Australian audiences.
          </p>
          <br />
          <p>
          Our passion for storytelling knows no bounds. We are dedicated to curating a rich tapestry of narratives that reflect the
          diversity of human experiences, offering viewers in Australia a window into worlds they may have never encountered otherwise.
          From gripping dramas to heartwarming comedies, thought-provoking documentaries to pulse-pounding action flicks, we strive to
          deliver an eclectic array of content that resonates with audiences of all backgrounds.
          </p>
          <br />
          <p>
          At the heart of our operations lies a commitment to excellence and integrity. We work tirelessly to ensure that every film we
          distribute meets the highest standards of quality, authenticity, and entertainment value. Our team is comprised of industry
          veterans who are deeply passionate about cinema and dedicated to fostering meaningful connections between creators and audiences.
        </p>
   
   
          <div class="get-to-know-us">
              <h5>Get to know us!</h5>
          </div>
        {/* Add your content here */}
      </div>
    );
   }
   
   
   export default AboutUsController;