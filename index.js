const http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

/**
 *  My imports.
 * */

var api = require('./server/routes/api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 *  Routes
 * */

app.use('/api', api);


/**
 * Error handler. Must be defined at the end of the app.use list
 * so it catches everything that hasn't been handled by the routes.
 * */

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});


/**
 * Get port from environment and store in Express.
 */

const port = 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port ,function() {
  console.log(`Server started at: ${port}`);
});