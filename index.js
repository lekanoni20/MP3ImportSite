const { response } = require('express');
const express = require('express');
const { readFile } = require('fs').promises;
const path = require('path');
const port = process.env.PORT || 3000;
"use strict";
const nodemailer = require("nodemailer");

const app = express();

app.use('/css',express.static(__dirname +'/css'));
app.use('/Images',express.static(__dirname +'/Images'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', async (request, response) => { 
    response.send(await readFile('./home.html', 'utf8'));
});

app.get('/navigation', async (request, response) => { 
    response.send(await readFile('./navigation.html', 'utf8'));
});

app.get('/about', async (request, response) => { 
    response.send(await readFile('./About.html', 'utf8'));
});

app.get('/importmp3Page', async (request, response) => { 
    response.send(await readFile('./ImportMP3Page.html', 'utf8'));
});

app.get('/introduction', async (request, response) => { 
    response.send(await readFile('./LangaugeLearningSceens/Introduction.html', 'utf8'));
});

app.get('/chinese', async (request, response) => { 
    response.send(await readFile('./LangaugeLearningSceens/Chinese.html', 'utf8'));
});

app.get('/japanese', async (request, response) => { 
    response.send(await readFile('./LangaugeLearningSceens/Japanese.html', 'utf8'));
});

app.get('/spanish', async (request, response) => { 
    response.send(await readFile('./LangaugeLearningSceens/Spanish.html', 'utf8'));
});

app.get('/contact', async (request, response) => { 
    response.send(await readFile('./contact.html', 'utf8'));
});

app.get('/error', async (request, response) => { 
    response.send(await readFile('./error.html', 'utf8'));
});

app.post('/contactlink', async (request, response) => { 
    // create reusable transporter object using the default SMTP transport using test account from ethereal
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: "emily.purdy68@ethereal.email", // generated ethereal user
        pass: "Pb7xgcNfaj4gVhYcdd" // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: request.body.email, // sender address
        to: "TestEmail@gmail.com", // list of receivers
        subject: "Email Query from " + request.body.name, // Subject line
        text: request.body.queryInfo // plain text body
    });

    response.send("Email Sent!");
});

app.listen(port, () => console.log('App avaliable on http:localhost:3000'))



