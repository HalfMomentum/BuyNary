
let routes = [
  {
    path: '/',
    method: 'GET',
    config: {
      handler: (req,reply)=>{
        return reply.view('base.html');
      }
    }
  },
  {
    path: '/home',
    method: 'GET',
    config:{
      handler:(req,reply)=>{
        return reply.view('login.html');
      }
    }
  }
];
module.exports = routes;
