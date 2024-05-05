import React from 'react';
import '../Styles/ContactPage.css';
import axios from 'axios';
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';


function ContactPage() {
  const [showMessage, setShowMessage] = useState(false);
  const history = useNavigate();
  

  const sendEmailToRecipient = async (formData) => {
    const sendEmailToRecipient_serviceID = 'service_zhfccof';
    const sendEmailToRecipient_publicKey = 'K4kh-ImIP626M8Epy';
    const sendEmailToRecipient_templateID = 'template_ak4ia0p';
    try {
      await emailjs.send(
        sendEmailToRecipient_serviceID,
        sendEmailToRecipient_templateID,
        {
          sender_emailAddress: 'shilpa.patel8895@gmail.com',
          recipient_emailAddress: formData.emailAddress,
          username: formData.fullName,
        },
        sendEmailToRecipient_publicKey
      );
      return true;
    } catch (error) {
      console.error('Error sending email to recipient:', error);
      return false;
    }
  };

  const sendEmailToSender = async (formData) => {
    const sendEmailToSender_serviceID = 'service_epaobtg';
    const sendEmailToSender_publicKey = 'K4kh-ImIP626M8Epy';
    const sendEmailToSender_templateID = 'template_nwxgkvd';
    try {
      await emailjs.send(
        sendEmailToSender_serviceID,
        sendEmailToSender_templateID,
        {
          admin_emailAddress: "shilpa.patel8895@gmail.com",
          user_emailAddress: formData.emailAddress,
          username: formData.fullName,
          phoneNumber: formData.phoneNumber,
          cityState: formData.cityState,
          emailAddress: formData.emailAddress,
          description: formData.description,
        },
        sendEmailToSender_publicKey
      );
      return true;
    } catch (error) {
      console.error('Error sending email to sender:', error);
      return false;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      phoneNumber: e.target.phoneNumber.value,
      cityState: e.target.cityState.value,
      emailAddress: e.target.emailAddress.value,
      description: e.target.description.value,
    };

      setShowMessage(true);
      const recipientEmailSent = await sendEmailToRecipient(formData);
      if (recipientEmailSent) {
        const senderEmailSent = await sendEmailToSender(formData);
        if (senderEmailSent) {
          setTimeout(() => {
            setShowMessage(false);
            history('/');
          }, 3000);
          e.target.reset();
        } else {
          console.error('Error sending email to sender');
          setShowMessage(false);
          alert('Failed to submit enquiry. Please try again later.');
        }
      } else {
        console.error('Error sending email to recipient');
        setShowMessage(false);
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
