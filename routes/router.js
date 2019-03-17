const express = require('express');
const origins = require('./origins');
const cors = require('cors')
const cursor = require('../controllers/cursor');

const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (origins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = function (app) {
  // Initializing route group
  const apiRoutes = express.Router();

  //= ========================
  // Basic cursor routes
  //= ========================

  // GET cursor positions route
  apiRoutes.get('/cursor', cors(corsOptions), function(req, res) {
    console.log(req)
    res.json({ message: 'hooray! welcome to our api!' });   
  });

  // POST cursor positions route
  apiRoutes.post('/cursor', cors(corsOptions), cursor.setCoordinates);

  // Set url for API group routes
  app.use('/api', apiRoutes);
  console.log(apiRoutes.stack)
};
