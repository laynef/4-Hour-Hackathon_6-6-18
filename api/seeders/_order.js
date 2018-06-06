module.exports = {
  up: (queryInterface, Sequelize) => {
    const orders = [
        {
            user_id: 1,
            product_id: 1,
        },
        {
            user_id: 1,
            product_id: 2,
        },
        {
            user_id: 2,
            product_id: 1,
        }
    ]
      return queryInterface.bulkInsert('Orders', orders.map(e => ({
          ...e,
          created_at: new Date(),
          updated_at: new Date(),
      })));
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Orders', null, {});
  }
};
