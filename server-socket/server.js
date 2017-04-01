'use strict';

global.NODE_ENV = process.env.NODE_ENV || 'pro';
global.NODE_HOST = process.env.NODE_HOST || 'http://localhost';
global.NODE_PORT = parseInt(process.env.NODE_PORT) || 8888;

global.ROOT_PATH = __dirname;

var express = require('express')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , app = express(); // Create an Express application.


//app.use('/', express.static(__dirname + '/public'));

/**
 * use the `MemoryStore` to store the sessions.
 */
// var store = new session.MemoryStore();

/**
 * use the `redis` to store the sessions
 */
  var redis = require('redis');
  var connectRedis = require('connect-redis');
  var RedisStore = connectRedis(session);
  var redisClient = redis.createClient();
  var store = new RedisStore({client: redisClient});

/**
 * Add the middleware needed for session support.
 */
var secret = '(*_^)dungdapchai6789%$#@!';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var cookies = cookieParser(secret);
app.use(cookies);
app.use(session({
  key: 'cid',
  cookie :{ path: '/', httpOnly: true, maxAge: 1000*60*60*24 },
  resave: true,
  saveUninitialized: true,
  secret: secret,
  store: store
}));

/**
 * Allow User-Agent
 */
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