// Importing Node modules and initializing Express
require('dotenv').config()
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  router = require('./routes/router'),
  morgan = require('morgan');


// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(morgan('combined')) // Log requests to API using morgan


// Initialize routes to be served
router(app);


// let server;
const port = process.env.PORT || 5000;
app.listen(port);

// necessary for testing
// module.exports = server;