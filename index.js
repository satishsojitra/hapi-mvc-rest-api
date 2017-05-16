'use strict'

var Hapi = require('hapi');
var Route = require('./routes/Route.js');
var Config = require('./config/configuration.js').get(process.env.NODE_ENV);

var server = new Hapi.Server({debug: {request: ['info', 'error']}});

server.connection({
	host: Config.host,
	port: Config.port
});

server.route(Route());

server.register([require('vision'), require('inert'), { register: require('lout') }], function(err) {
});


server.start(function(){
	console.log("Server running at " + server.info.uri);
})