const Hapi = require('hapi');
const Vision = require('vision');
const Joi = require('joi');
const Path = require('path');
const routes = require('./routes.js');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});

//server.register(Inert,(err)=>{if(err)throw err;});

server.register(require('inert'), (err)=> {

	if (err) {

		throw err;
	}

	server.route({
		method : 'GET',
    path : '/{path*}',
    handler : {
			directory : {
				path : './public',
				listing : true,
				index : false
			}
		}
	});

});

server.register(Vision,(err)=>{if(err)throw err;});

server.views({
  engines: {
    html: require('handlebars')
  },
  layout: true,
  layoutPath: Path.join(__dirname,'templates'),
  path: Path.join(__dirname,'templates/views'),
  partialsPath: Path.join(__dirname,'templates/partial'),
  helpersPath: Path.join(__dirname,'templates/helpers')
});


server.route(routes);

server.start((err)=>{
  if(err)
    throw err;
  else {
    console.log('server running at ' + server.info.uri);
  }

});
