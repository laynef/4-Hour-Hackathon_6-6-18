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
          {
            name: '',
            price: 20.00,
            image: '',
            order_id: 2,
          },
      ]
        return queryInterface.bulkInsert('Products', product.map(e => ({
            ...e,
            created_at: new Date(),
            updated_at: new Date(),
        })));
    },
  
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
  };