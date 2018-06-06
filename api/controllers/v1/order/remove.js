const { Order } = require('../../../models');


module.exports = (req, res) => {

    Order.destroy({
        where: req.params || {},
    })
    .then((response) => {
        res.status(203).send({
            deleted: true,
        })
    })
    .catch((error) => {
        res.status(400).send({
            dbError: error,
        })
    })

}