import React, { useState } from 'react';
import Navbar from './Navbar';

import '../Styles/NewsPage.css';
//import heroimage from '../Images/AboutUs_PlaceholderImage.jpg';
import image1 from '../Images/square_photo_1.jpg';

function NewsController() {
  return (
    <div className="container">
      <Navbar /> {/* Include the Navbar component */}
      {/* Add your content here */}

      <div class="d-flex justify-content-evenly">
        <div class="p-3 bd-highlight box">
          <div className="image-1" style={{
            backgroundImage: `url(${image1})`
          }}>
          </div>
          <br></br>
          <p>21/03/2020</p>
          <h6>Title for news story 1</h6>
          <p className="news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>

          {/*READ MORE BUTTON*/}

        </div>
        <div class="p-3 bd-highlight box">
          <div className="image-1" style={{
            backgroundImage: `url(${image1})`
          }}>
          </div>
          <br></br>
          <p>21/03/2020</p>
          <h6>Title for news story 1</h6>
          <p className="news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>

        </div>
        <div class="p-3 bd-highlight box">
          <div className="image-1" style={{
            backgroundImage: `url(${image1})`
          }}>
          </div>
          <br></br>
          <p>21/03/2020</p>
          <h6>Title for news story 1</h6>
          <p className="news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>

        </div>
        <div class="p-3 bd-highlight box">
          <div className="image-1" style={{
            backgroundImage: `url(${image1})`
          }}>
          </div>
          <p>Description 1</p>
        </div>
      </div >

      <div class="d-flex justify-content-evenly">
        <div class="p-3 bd-highlight box">
          <div className="image-1" style={{
            backgroundImage: `url(${image1})`
          }}>
          </div>
          <p>Description 1</p>
        </div>
        <div class="p-3 bd-highlight box">
          <div className="image-1" style={{
            backgroundImage: `url(${image1})`
          }}>
          </div>
          <p>Description 1</p>
        </div>
        <div class="p-3 bd-highlight box">
          <div className="image-1" style={{
            backgroundImage: `url(${image1})`
          }}>
          </div>
          <p>Description 1</p>
        </div>
        <div class="p-3 bd-highlight box">
          <div className="image-1" style={{
            backgroundImage: `url(${image1})`
          }}>
          </div>
          <p>Description 1</p>
        </div>
      </div >
    
    </div >

  );
}

export default NewsController;