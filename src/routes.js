/*
routes are an undivisible part of a website.
This file serves as a plugin for server.js and defines all possible routes
*/
const Path = require('path');
const user = require('../src/controller/sampleController.js');

let categories = [
  {
    'link' : 'Fruits',
    'icon' : 'fa-leaf',
    'ref'  : '/fruit'
  },
  {
    'link' : 'Cakes',
    'icon' : "fa-gift",
    'ref'  : '/cake'
  },
  {
    'link' : 'Daily Products',
    'icon' : 'fa-cutlery',
    'ref'  : '/daily'
  },
  {
    'link' : 'Stationary',
    'icon' : 'fa-book',
    'ref'  : '/book'
  }
]
let nav_data = {
  'guest' : [
    {
      'link' : 'Home',
      'icon' :  'fa-home',
      'ref' :  '/',
      'help' : 'Home'
    },
    {
      'link' : 'Log-in',
      'icon' :  "fa-key",
      'ref' :  '/login',
      'help' : 'Log-in'
    }
  ],
  'logged' : [
    {
      'link' : 'Home',
      'icon' :  'fa-home',
      'ref' :  '/',
      'help' : 'Home'
    },
    {
      'link' : 'MyAccount',
      'icon' :  'fa-user',
      'ref' :  '/{random}',
      'help' : 'View my account'
    },
    {
      'link' : 'Logout',
      'icon' :  'fa-mail-reply',
      'ref' :  '/',
      'help' : 'logout'
    }
  ]
}


let routes = [
  {
    path: '/',
    method: 'GET',
    config: {
      handler: {
        view: {
          template : 'home',
          context : {
            showCart: true,
            title : 'Buynary|Home',
            list : nav_data['guest'],
            category: categories
          }
        }
      }
    }
  },
  {
    path: '/register',
    method: 'GET',
    config: {
      handler: {
        view: {
          template : 'register',
          context : {
            showCart: false,
            title : 'Buynary|New User',
            list : nav_data['guest'],
            category: categories
          }
        }
      }
    }
  },
  {
    path: '/login',
    method: 'GET',
    config:{
      handler: {
        view :{
          template : "login",
          context : {
            showCart: false,
            title : 'Buynary|LoggedIn',
            category: categories,
            list : nav_data['guest']
          }
        }
      }
    }
  },
  {
    path: '/login',
    method: 'POST',
    config:{
      handler: {
        view :{
          template : "home",
          context : {
            showCart: false,
            title : 'Buynary|Home',
            list : nav_data['logged'],
            category: categories
          }
        }
      }
    }
  },
  {
    path: '/{product}',
    method: 'GET',
    config:{
      handler: user.getall.handler
    }
  }
];
module.exports = routes;
