/* require external packages */

// require express package to manage the server
const express = require('express');
// require for module for using folders and files names
const path = require('path');
// require module for work with cookies in the client side
const cookieParser = require('cookie-parser');
// require for module that log every request
const logger = require('morgan');


// import routes
const indexRouter = require('./routes/index');

// init app
const app = express();

/* middlewares */

// using the logger for requests
app.use(logger('dev'));
// access to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// using in the aceess to cookies
app.use(cookieParser());
// init public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// controller of routes
app.use('/', indexRouter);

// exports out the main app
module.exports = app;
