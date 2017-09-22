const path = require('path');
const Users = require('../models').Item;

exports.getall = {
  handler: function(req,res) {
      Users
      .findAll({
        where:{id:1}
      })
      .then(user=>{
        for (val in user){
          console.log(user[val].createdAt);
        }

        res(user);
      });
    }
};
