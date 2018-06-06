'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Orders', []);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Orders', null, {});
  }
};
