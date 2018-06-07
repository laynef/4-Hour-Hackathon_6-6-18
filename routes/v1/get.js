const C = require('../../controllers/v1');

module.exports = [
    { route: '/user/:id', controller: C.user.getOne },
    { route: '/order/:id', controller: C.order.getOne },
    { route: '/product/:id', controller: C.product.getOne },
    { route: '/invoice/:id', controller: C.invoice.getOne },
    { route: '/tracking/:id', controller: C.tracking.getOne },
    { route: '/review/:id', controller: C.review.getOne },
];