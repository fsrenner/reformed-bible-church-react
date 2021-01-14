require('dotenv').config()
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');

// Global functions
const app = express();

const PORT = process.env.PORT || 3300;
const HOST = process.env.HOST || 'localhost';
const USER = process.env.USER || 'f.steve.renner@gmail.com';
const PASS = process.env.PASS || '';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: USER,
      pass: PASS
    }
  });

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'build')));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, X-Requested-With, Accept');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
});

app.post('/contact', (req, res) => {
    const from = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    console.log(req.body);
    if (!from) {
        return res.status(400).send('User email address was not provided');
    }
    if (!firstName) {
        return res.status(400).send('User firstName was not provided');
    }
    if (!lastName) {
        return res.status(400).send('User lastName was not provided');
    }
    const phoneNumber = (req.body.phoneNumber) ? req.body.phoneNumber : 'not provided';
    const message = req.body.message;
    const to = USER;
    const subject = `Reformed Bible Church Contact Form Message from ${firstName} ${lastName}`;

    const mailOptions = {
        from,
        to,
        subject,
        html: `
        <h1>Message received from ${firstName} ${lastName}</h1>
        <br>
        <p><strong>Email Address: </strong>${from}</p>
        <p><strong>Phone Number: </strong>${phoneNumber}</p>
        <br>
        <p><strong>Message: </strong></p>
        <p>${message}</p>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
     });

     return res.json({
         message: 'You email has been sent'
     });
});

app.listen(PORT, HOST, (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log(`Server listening at ${HOST}:${PORT}`);
});