const Path = require('path');

let routes = [
  {
    path: '/',
    method: 'GET',
    config: {
      handler: (req,reply)=>{
        return reply.view('home.html');
      }
    }
  },
  {
    path: '/register',
    method: 'GET',
    config:{
      handler:{
        view: 'register.html'
        }
      }
    }

];
module.exports = routes;
