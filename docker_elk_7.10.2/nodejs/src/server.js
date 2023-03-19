// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: '',

  // Use if APM Server requires a token
  secretToken: '',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://172.16.4.0:8200'
})

'use strict';

const express = require('express');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
  res.redirect(req.baseUrl + '/public/index.html');
});

app.get('/public', (req, res) => {
  // res.sendFile(__dirname + '/public/index.html');
  res.redirect(req.baseUrl + '/public/index.html');
});

app.get('/public/geometry-udemy', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
app.use('/public', express.static(__dirname + '/public'));