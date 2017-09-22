/*
including plugings so that we can use them
*/
const Hapi = require('hapi');
const Vision = require('vision');
const Joi = require('joi');
const Bcrypt = require('bcrypt');
const Basic = require('hapi-auth-basic');
const Path = require('path');
const routes = require('./src/routes.js');

/*
creating hapijs server object
*/
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});

/*
registering Inert module to serve static files like CSS,JS,Images
*/
server.register(require('inert'), (err)=> {
  if (err) {throw err;}

  server.route({
    method : 'GET',
    path : '/src/public/{path*}',
    handler : {
      directory : {
        path : Path.join(__dirname,'/src/public'),
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
  layoutPath: Path.join(__dirname,'src/templates'),
  path: Path.join(__dirname,'src/templates/views'),
  partialsPath: Path.join(__dirname,'src/templates/partial'),
  helpersPath: Path.join(__dirname,'src/templates/helpers')
});

/*
defining routes through user-defined pluging.
see './routes.js' for more information
*/
server.route(routes);


const users = {
  john: {
    username: 'john',
    password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
    name: 'John Doe',
    id: '2133d32a'
  }
};
const validate = function (request, username, password, callback) {
  const user = users[username];
  if (!user) {
    return callback(null, false);
  }

  Bcrypt.compare(password, user.password, (err, isValid) => {
    callback(err, isValid, { id: user.id, name: user.name });
  });
};
/*
registering authentication scheme
*/
server.register(Basic, (err) => {

  if (err) {
    throw err;
  }

  server.auth.strategy('simple', 'basic', { validateFunc: validate });
});

  /*
  finally the server can start here
  */
    server.start(function() {
      console.log('server running at ' + server.info.uri);
    });
