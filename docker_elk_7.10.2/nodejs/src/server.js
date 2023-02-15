'use strict';

const express = require('express');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
  //res.redirect(req.baseUrl + '/public/index.html');
  res.redirect(req.baseUrl + '/public/geometry-udemy/index.html');
});

app.get('/public', (req, res) => {
  // res.sendFile(__dirname + '/public/index.html');
  res.redirect(req.baseUrl + '/public/index.html');
});

app.get('/public/geometry-udemy', (req, res) => {
  // res.sendFile(__dirname + '/public/index.html');
  res.redirect(req.baseUrl + '/public/geometry-udemy/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
app.use('/public', express.static(__dirname + '/public'));
app.use('/public/geometry-udemy', express.static(__dirname + '/public/geometry-udemy'));