'use strict';

const express = require('express');
const favicon = require('express-favicon');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
// App
const app = express();

app.use(favicon(__dirname + '/public/favicon.png'));

app.get('/', (req, res) => {
  res.redirect(req.baseUrl + '/public/index.html');
});

app.get('/public', (req, res) => {
  // res.sendFile(__dirname + '/public/index.html');
  res.redirect(req.baseUrl + '/public/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
app.use('/public', express.static(__dirname + '/public'));