module.exports = {
  up: (queryInterface, Sequelize) => {
      const reviews = [
          {
              order_id: 1,
              user_id: 1,
          },
          {
            order_id: 2,
            user_id: 2,
        },
      ]
      return queryInterface.bulkInsert('Reviews', reviews.map(e => ({
          ...e,
          created_at: new Date(),
          updated_at: new Date(),
      })));
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
