var express = require('express'); // minimalist web framework
var bodyParser = require('body-parser'); // body parsing middleware

var config = require('./config'); // service configuration

// Define our app using express, allow it to use JSON
// ---------------------------------------------------------
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ---------------------------------------------------------

// Start the server
// =========================================================
var server = app.listen(process.env.PORT || config.port);
console.log('Service running on ' + (process.env.PORT || config.port));
// =========================================================

// export the server for testing
// ---------------------------------------------------------
module.exports = server;
// ---------------------------------------------------------