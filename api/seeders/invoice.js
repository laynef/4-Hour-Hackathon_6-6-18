'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Invoices', []);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Invoices', null, {});
  }
};
