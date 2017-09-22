'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: DataTypes.STRING,
    ph_number: DataTypes.STRING(10),
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
      }
    },
    hostel: DataTypes.STRING(2),
    room: DataTypes.STRING(3),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
