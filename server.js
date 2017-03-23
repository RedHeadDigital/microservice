var express = require('express'); // minimalist web framework
var bodyParser = require('body-parser'); // body parsing middleware
var mongoose = require('mongoose'); // mongoose

// Generic custom functionality
var health = require('./lib/health');

var config = require('./config'); // service configuration

// Define our app using express, allow it to use JSON
// ---------------------------------------------------------
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ---------------------------------------------------------

// Configure loggin in Development mode
// ---------------------------------------------------------
if (process.env.NODE_ENV || 'development' == 'development') {

    var morgan = require('morgan');
    app.use(morgan('dev'));

}
// ---------------------------------------------------------

// Configure the generic '/health' endpoint
// ---------------------------------------------------------
app.use('/health', health);
// ---------------------------------------------------------

// Connect to DB
// ---------------------------------------------------------
var connectWithRetry = function () {
    return mongoose.connect(config.mongo.uri + '/' + config.service.name, function (err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec', err.message);
            setTimeout(connectWithRetry, 5000);
        }
    });
};
connectWithRetry();
// ---------------------------------------------------------

// Register routes for this service
// ---------------------------------------------------------
app.use('/users', require('./src/routes/users')); // example route
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