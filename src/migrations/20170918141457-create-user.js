'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING
      },
      ph_number: {
        type: Sequelize.STRING(10),
        validate: {
          isNumeric: true
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hostel: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      room: {
        type: Sequelize.STRING(3),
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
