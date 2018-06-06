'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('OrderProducts', []);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('OrderProducts', null, {});
  }
};
