const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: 'matt.p.arceo@gmail.com', // Your email address
    pass: 'jmrenwekwsatrimy ', // Your email password or app-specific password
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // Sender's email
    to: 'matt.p.arceo@gmail.com', // Your email to receive the message
    subject: `New Contact Request from ${name}`,
    text: `You have a new contact request:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});