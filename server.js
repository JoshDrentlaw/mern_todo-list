const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

const server = express();

// Body parser Middleware
server.use(bodyParser.json());

// Configure MongoDB
const db = config.MONGO_URI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

server.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`));