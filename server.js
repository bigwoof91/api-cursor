require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routes');

// Initialize routes to be served
router(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is awake  on ${port}`));
