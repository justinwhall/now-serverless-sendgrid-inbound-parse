
const config = require('./config');
const client = require('twilio')(config.accountSid, config.authToken);
const express = require('express');
const multer  = require('multer');
const app = express();
const data = multer();

app.post('*', data.none(), async function (req, res) {
  const from = req.body.from;
  const subject = req.body.subject;

  /**
   * You can find these in your Now Logs
   */
  console.log('Subject --> ', subject);
  console.log('From --> ', from);

  await client.messages
    .create({
      body: 'Hi there ' + from + '! Your email was parsed by SendGrid, which fired a webhook, which posted to Now, which executed a serverless function, which sent this SMS with Twilio\'s API.',
      from: config.phone,
      mediaUrl: 'https://sendgrid.com/brand/sg-twilio/SG_Twilio_Lockup_Social.png',
      to: '+1' + subject
    }).catch(error => console.log(error))

   res.end();
});

module.exports = app;
