'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Trackings', []);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Trackings', null, {});
  }
};
