const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config/config');
const MongoStore = require('connect-mongo')(session);

const todos = require('./routes/api/todos');
const login = require('./routes/user/login');
const logout = require('./routes/user/logout');

const server = express();

// Configure MongoDB
const db = config.MONGO_URI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Body parser Middleware
server.use(bodyParser.json());

// Express Session Middleware
server.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

// Use routes
server.use('/api/todos', todos);
server.use('/user/login', login);
server.use('/user/logout', logout);

server.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`));