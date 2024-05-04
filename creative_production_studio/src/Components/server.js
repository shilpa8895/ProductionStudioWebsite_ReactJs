const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'shilpa.patel95@gmail.com', // Your Gmail email address
    pass: 'Perfects769004' // Your Gmail password or app-specific password
  }
});

// POST endpoint to handle sending email
app.post('/api/sendEmail', (req, res) => {
  // Extract form data from request body
  const { fullName, phoneNumber, cityState, companyName, emailAddress, description } = req.body;

  // Compose email message
  const mailOptions = {
    from: emailAddress, // Use the email address entered in the contact form as the sender's email address
    to: 'shilpa.patel95@gmail.com', // Send email to shilpa.patel95@gmail.com
    subject: 'New Enquiry by' + fullName, // Email subject
    text: `
      New enquiry received:

      Full Name: ${fullName}
      Phone Number: ${phoneNumber}
      City/State: ${cityState}
      Company Name: ${companyName}
      Email Address: ${emailAddress}
      Description: ${description}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
