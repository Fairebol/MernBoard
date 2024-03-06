const express = require('express');
const app = express();
const dashboardRoute = require('./routes/dashboard');
const cors = require('cors')

app.use(cors());

app.use('/api', dashboardRoute);
app.use(express.json());

module.exports = app;
