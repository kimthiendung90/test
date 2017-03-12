global.NODE_ENV = process.env.NODE_ENV || 'pro';
global.NODE_HOST = process.env.NODE_HOST || 'http://localhost';
global.NODE_PORT = parseInt(process.env.NODE_PORT) || 8889;

console.log('*******************');
console.log('******** Enviroment '+ NODE_ENV);
console.log('*******************','\n');

var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));

if(NODE_ENV == "dev"){
	console.log('\x1b[33m', '                -> webpack: Running... <-', '\n', '\x1b[0m');
	var webpack = require('webpack');
	var webpackConfig = require('./webpack.config.dev.js');
	var compiler = webpack(webpackConfig);
	app.use(require('webpack-dev-middleware')(compiler, webpackConfig.devServer));
	app.use(require('webpack-hot-middleware')(compiler));
}

//all routes
var routes = require('./routes.js');
routes(app);

//listen port
app.listen(NODE_PORT, function() {
	console.log('*******************');
    console.log('App listening on port '+ NODE_PORT);
	console.log('*******************','\n');
});