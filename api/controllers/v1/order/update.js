const { Order } = require('../../../models');


module.exports = (req, res) => {

    Order.update(req.body, {
        where: req.params || {},
        returning: true
    })
    .then((response) => {
        res.status(202).send(handleResponse(response))
    })
    .catch((error) => {
        res.status(400).send({
            dbError: error,
        })
    })

}