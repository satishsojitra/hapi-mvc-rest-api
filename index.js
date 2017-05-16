'use strict'

var Hapi = require('hapi');
var Route = require('./routes/Route.js');

var server = new Hapi.Server({debug: {request: ['info', 'error']}});

server.connection({
	host: 'localhost',
	port: process.env.PORT || 3000
});

server.route(Route());

server.register([require('vision'), require('inert'), { register: require('lout') }], function(err) {
});


server.start(function(){
	console.log("Server running at " + server.info.uri);
})