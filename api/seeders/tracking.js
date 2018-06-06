module.exports = {
    up: (queryInterface, Sequelize) => {
        const tracking = [
            {
                order_id: 1,
                user_id: 1,
            },
        ]
        return queryInterface.bulkInsert('Trackings', tracking.map(e => ({
            ...e,
            created_at: new Date(),
            updated_at: new Date(),
        })));
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Trackings', null, {});
  }
};
