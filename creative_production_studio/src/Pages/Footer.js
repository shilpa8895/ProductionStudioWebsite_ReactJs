// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul className="horizontal-links">
            <li><a href="tel:0000000000">Questions? <br/>Phone 0000000000</a></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/projects">Media Centre</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="social-media-list">
            <li><a href="https://www.instagram.com/creativeproductionsstudio/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="horizontal-links">
          <li><Link to="/help">Reach Us: xxyz@creativeproductionstudio.com</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Creative Production Studio Australia</p>
      </div>
    </footer>
  );
}

export default Footer;
