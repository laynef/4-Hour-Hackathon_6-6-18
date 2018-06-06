const { genSaltSync, hashSync } = require('bcrypt-nodejs')
const { image } = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
      const password = 'pass1234'
      const users = [
          {
              email: 'jordan@email.com',
              password: hashSync(password, genSaltSync(10)),
              image: image.imageUrl(500, 500),
          },
          {
            email: 'chris@email.com',
            password: hashSync(password, genSaltSync(10)),
            image: image.imageUrl(500, 500),
        },
        {
            email: 'alex@email.com',
            password: hashSync(password, genSaltSync(10)),
            image: image.imageUrl(500, 500),
        },
      ]
      return queryInterface.bulkInsert('Users', users.map((e) => ({
          ...e,
          created_at: new Date(),
          updated_at: new Date(),
      })));
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
