const express = require('express');
const app = express();
const dashboardRoute = require('./routes/dashboard');
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/api', dashboardRoute);
app.use(express.json());

module.exports = app;
