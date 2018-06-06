const C = require('../../controllers/v1');

module.exports = [
    { route: '/users/:id', controller: C.user.getOne },
];