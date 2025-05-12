const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const PORT = 3000;

// Twilio credentials
const accountSid = 'ACf8620f31629c5c200c5ea3452dd99a18'; // Replace with your Account SID
const authToken = 'bafc4941baa71af11f9383e74af02926'; // Replace with your Auth Token
const client = twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-message', (req, res) => {
    const { name, email } = req.body;
    const message = `New response from ${name} (${email})`;

    client.messages.create({
        body: message,
        from: 'whatsapp:+2349157505110', // Your Twilio WhatsApp number
        to: 'whatsapp:+2349157505110' // Your personal WhatsApp number
    })
    .then(() => res.send('Message sent!'))
    .catch(err => res.status(500).send('Error: ' + err));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Twilio credentials from https://www.twilio.com/console
const accountSid = 'ACf8620f31629c5c200c5ea3452dd99a18';
const authToken = 'bafc4941baa71af11f9383e74af02926';
const client = require('twilio')(accountSid, authToken);

app.post('/send', (req, res) => {
  // Destructure the form data from req.body
  const { fullName, message, email, subject, phone } = req.body;

  // Format the message string that will be sent via WhatsApp
  const fullMessage = `New message from ${fullName}\
}