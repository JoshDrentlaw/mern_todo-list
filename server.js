const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

const todos = require('./routes/api/todos');

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

// Use routes
server.use('/api/todos', todos);

server.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`));