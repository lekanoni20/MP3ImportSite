const { response } = require('express');
const express = require('express');
const { readFile } = require('fs').promises;
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use('/css',express.static(__dirname +'/css'));
app.use('/Images',express.static(__dirname +'/Images'));

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

app.listen(port, () => console.log('App avaliable on http:localhost:3000'))



