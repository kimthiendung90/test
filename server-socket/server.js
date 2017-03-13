'use strict';

global.NODE_ENV = process.env.NODE_ENV || 'pro';
global.NODE_HOST = process.env.NODE_HOST || 'http://localhost';
global.NODE_PORT = parseInt(process.env.NODE_PORT) || 8888;

global.ROOT_PATH = __dirname;

var express = require('express')
  , expressSession = require('express-session')
  , cookieParser = require('cookie-parser')
  , app = express(); // Create an Express application.

//app.use('/', express.static(__dirname + '/public'));

//
// Since this is only an example, we will use the `MemoryStore` to store the
// sessions. This is our session store instance.
//
var store = new expressSession.MemoryStore();
//
// Add the middleware needed for session support.
//
var secret = '(*_^)dungdapchai6789%$#@!';
var cookies = cookieParser(secret);
app.use(cookies);
app.use(expressSession({
  saveUninitialized: true,
  secret: secret,
  resave: true,
  store: store
}));

// Allow User-Agent
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, *');
  next();
});

// Create an HTTP server and 
var server = require('http').createServer(app);
//our Primus server.
app.get('/*', function index(req, res) {
  res.sendFile(__dirname + '/public/js/primus.js');
});

var optPrimus = {cookies: cookies, store: store};
require('./socket/index.js')(server, optPrimus);

//listen port
server.listen(NODE_PORT, function() {
	console.log('*******************');
    console.log('App listening on port '+ NODE_PORT);
	console.log('*******************','\n');
});