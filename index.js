const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 3000;
app = express()

var key = fs.readFileSync(__dirname + '/certsFiles/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certsFiles/selfsigned.crt');

var options = {
  key: key,
  cert: cert
};

//GET home route
app.get('/', (req, res) => {
   res.send('Hello World.');
});

// we will pass our 'app' to 'https' server
var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("Server listing on port : " + port)
});
