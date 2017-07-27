/*
  routes are an undivisible part of a website.
  This file serves as a plugin for server.js and defines all possible routes
*/

const Path = require('path');

let routes = [
  {
    path: '/',
    method: 'GET',
    config: {
      handler: (req,reply)=>{
        return reply.view('home',{title:'Buynary|Home'});
      }
    }
  },
  {
    path: '/register',
    method: 'GET',
    config:{
      handler: (req,reply)=>{
        return reply.view('register',{title:'Buynary|Register'});
      }
    }
  },
  {
    path: '/login',
    method: 'GET',
    config:{
      handler: (req,reply)=>{
        return reply.view('login',{title:'Buynary|Login'});
      }
    }
  }

];
module.exports = routes;
