/*
  including plugings so that we can use them
*/
const Hapi = require('hapi');
const Vision = require('vision');
const Joi = require('joi');
const Path = require('path');
const routes = require('./routes.js');

/*
  creating hapijs server object
*/
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 80
});

/*
  registering Inert module to serve static files like CSS,JS,Images
*/
server.register(require('inert'), (err)=> {
	if (err) {throw err;}

	server.route({
		method : 'GET',
    path : '/public/{path*}',
    handler : {
			directory : {
        path : Path.join(__dirname,'public'),
				listing : true
			}
		}
	});

});

/*
  registering other plugings as well
*/
server.register(Vision,(err)=>{if(err)throw err;});

/*
  getting ready to serve views.
  Makes html writing easy and reusable
*/
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

/*
  defining routes through user-defined pluging.
  see './routes.js' for more information
*/
server.route(routes);

/*
  finally the server can start here
*/
server.start((err)=>{
  if(err)
    throw err;
  else {
    console.log('server running at ' + server.info.uri);
  }

});
