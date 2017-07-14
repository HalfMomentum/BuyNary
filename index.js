const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');
const Joi = require('joi');
const Path = require('path');
const routes = require('./routes.js');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});

server.register(Inert,(err)=>{if(err)throw err;});
server.register(Vision,(err)=>{if(err)throw err;});

server.views({
  engines: {
    html: require('handlebars')
  },
  view:{
    path: Path.join(__dirname,'templates'),
    listing: true
  },
  partialsPath: Path.join(__dirname,'templates/partial'),
  helpersPath: Path.join(__dirname,'templates/helpers')
});


server.route(/*[
  {
    path: '/',
    method: 'GET',
    config:{
      handler: (req,reply)=>{
        reply.view('base.html')
      }
    }

  }
]*/routes);

server.start((err)=>{
  if(err)
    throw err;
  else {
    console.log('server running at ' + server.info.uri);
  }

});
