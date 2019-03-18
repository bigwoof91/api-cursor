'use strict';

const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = require('../routes');

// Initialize routes to be served
router(app);

module.exports = app;
module.exports.handler = serverless(app);
