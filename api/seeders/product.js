module.exports = {
    up: (queryInterface, Sequelize) => {
      const product = [
          {
            name: '',
            price: 20.00,
            image: '',
            order_id: 1,
          },
          {
            name: '',
            price: 20.00,
            image: '',
            order_id: 1,
          },
      ]
        return queryInterface.bulkInsert('Orders', product.map(e => ({
            ...e,
            created_at: new Date(),
            updated_at: new Date(),
        })));
    },
  
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Orders', null, {});
    }
  };