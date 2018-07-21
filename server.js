// server.js

// modules
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// my guide has this in routes, but I don't get how it is defined at the time of the connect to db 
// below
var mongoose = require('mongoose');  
// configuration

// config files
var db = require('./config/db');

// set port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
// TODO uncomment this after weget config/db set updateCommands
mongoose.connect(db.url);

//get all data/stuff for the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be for /img users
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); // configure our routes

// Start the app
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('The magic happens on port ' + port);

// expose app
exports = module.exports = app;

