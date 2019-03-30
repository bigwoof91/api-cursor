const express = require('express');
const bodyParser = require('body-parser');
const origins = require('./origins');
const cors = require('cors')
const cursor = require('../controllers/cursor');
const morgan = require('morgan');

const corsOptions = {
  origin: function (origin, callback) {
    if (origins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = function (app) {
  // Defining router
  const router = express.Router();

  // index.html route
  router.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>api cursor - I help you design $h1t, well.</h1>');
    res.end();
  });
  router.post('/', (req, res) => res.json({ postBody: req.body }));

  //= ========================
  // Basic cursor routes
  //= ========================

  // GET cursor positions route
  router.get('/cursor', cors(corsOptions), function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
  });

  // POST cursor positions route
  router.post('/cursor', cors(corsOptions), cursor.setCoordinates);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('combined')) // Log requests to API using morgan
};
