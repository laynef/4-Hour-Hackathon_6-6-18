module.exports = {
    up: (queryInterface, Sequelize) => {
      const invoice = [
          {
              order_id: 1,
              price: 10.00,
          },
      ]
        return queryInterface.bulkInsert('Orders', invoice.map(e => ({
            ...e,
            created_at: new Date(),
            updated_at: new Date(),
        })));
    },
  
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Orders', null, {});
    }
  };
  