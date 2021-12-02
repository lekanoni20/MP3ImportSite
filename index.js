const { response } = require('express');
const express = require('express');
const { readFile } = require('fs').promises;
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use('/css',express.static(__dirname +'/css'));

app.get('/', async (request, response) => { 

    response.send(await readFile('./home.html', 'utf8'));
    
});

app.listen(port, () => console.log('App avaliable on http:localhost:3000'))



