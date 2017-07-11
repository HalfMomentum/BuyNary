const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');
const Joi = require('joi');
const Path = require('path');

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
  path: Path.join(__dirname,'templates'),
  partialsPath: Path.join(__dirname,'templates/partial'),
  helpersPath: Path.join(__dirname,'templates/helpers')
});


server.route([
  {
    path: '/',
    method: 'GET',
    config:{
      handler: {
        view: 'base.html'
      }
    }

  }
]);

server.start((err)=>{
  if(err)
    throw err;
  else {
    console.log('server running at ' + server.info.uri);
  }

});
