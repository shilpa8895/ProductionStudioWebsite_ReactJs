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
            <input type="text" id="fullName" name="fullName" placeholder='e.g John Doe'pattern='[a-zA-Z\s]*' title="Full name can only include letters and dashes" required />
            <br />

            <label htmlFor="phoneNumber">Phone Number *</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder='e.g (04)12 345 678' size={10} maxLength={10} pattern='[0-9]{10}' title="Please enter a 10 digit phone number" required />
            <br />

            <label htmlFor="cityState">City/State *</label>
            <input type="text" id="cityState" name="cityState" placeholder='e.g Melbourne/Victoria' title="Please enter your city/state" required />
            <br />

            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" placeholder='e.g jdoe@creativeproductionstudio.com' required />
            <br />

            <label htmlFor="description">Description *</label>
            <textarea id="description" name="description" placeholder='enter description' required></textarea>
            <br />
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
 

