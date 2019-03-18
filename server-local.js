'use strict';

require('dotenv').config();
const app = require('./express/server');
const port = process.env.PORT || 5000;
const morgan = require('morgan');

app.use(morgan('combined')) // Log requests to API using morgan
app.listen(port, () => console.log(`Local app listening on port ${port}!`));