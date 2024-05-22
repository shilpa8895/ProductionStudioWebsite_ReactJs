// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/FooterPage.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    /*     <nav className="footer">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/film">Film</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
     */
/*     <footer>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col-a">
            <h6>Quick links</h6>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/film">Film</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div class="col-b">
          <h6>Get in touch</h6>
          </div>
          <div class="col-c">
          <h6>Subscribe to our newsletter</h6>
          </div>
        </div>
      </div>

    </footer> */

    <footer className='footer fixed-bottom py-2 bg-dark text-white'>
        <div className='container'>
        <div className='row'>
          <div className='col'>
            <h6 className="text-left">Quick links</h6>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/film">Film</Link></li>
            </ul>
          </div>
          <div className='col'>
            <h6>Get in touch</h6>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className='col'>
            <h6>Subscribe to our newsletter</h6>
            {/* Add your newsletter subscription form or other content here */}
          </div>
        </div>
        </div>
      </footer>
  );
}

export default Footer;
