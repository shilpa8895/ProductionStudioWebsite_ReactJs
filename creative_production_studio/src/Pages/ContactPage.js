import React from 'react';
import '../Styles/ContactPage.css';
import axios from 'axios';
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ContactPage() {
  const [showMessage, setShowMessage] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = {
    //   fullName: e.target.fullName.value,
    //   phoneNumber: e.target.phoneNumber.value,
    //   cityState: e.target.cityState.value,
    //   companyName: e.target.companyName.value,
    //   emailAddress: e.target.emailAddress.value,
    //   description: e.target.description.value,
    // //   agree: e.target.agree.checked,
    // };

    try {
      setShowMessage(true);
      // Optionally reset the form fields after successful submission
      e.target.reset();
      setTimeout(() => {
        history.push('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar /> 
      <div className="contactPage_container">
      
        <h2>Contact Us</h2>
        <p>Interested in becoming a part of Creative Production Studio?</p>
        <p>Provide your details below, and a member of our team will reach out to you shortly.</p>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input type="text" id="fullName" name="fullName" required />
            <br />

            <label htmlFor="phoneNumber">Phone Number *</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />
            <br />

            <label htmlFor="cityState">City/State *</label>
            <input type="text" id="cityState" name="cityState" required />
            <br />

            <label htmlFor="emailAddress">Email Address *</label>
            <input type="email" id="emailAddress" name="emailAddress" required />
            <br />

            <label htmlFor="description">Description *</label>
            <textarea id="description" name="description" required></textarea>
            <br />

            <button type="submit" className="contactPage_submit_button">
              Submit
            </button>
          </div>
        </form>
        {showMessage && <p>Thank you for contacting us. You will be contacted shortly.</p>}
      </div>
    </div>
  );
}

export default ContactPage;
