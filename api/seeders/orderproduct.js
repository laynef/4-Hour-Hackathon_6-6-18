module.exports = {
    up: (queryInterface, Sequelize) => {
        const product = [
            {
                product_id: 1,
                order_id: 1,
            },
            {
                product_id: 2,
                order_id: 1,
            },
        ]
        return queryInterface.bulkInsert('OrderProducts', invoice.map(e => ({
            ...e,
            created_at: new Date(),
            updated_at: new Date(),
        })));
    },
  
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('OrderProducts', null, {});
    }
  };