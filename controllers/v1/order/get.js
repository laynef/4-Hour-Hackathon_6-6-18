const { Order } = require('../../../models');
const { getIncludes, handleResponse } = require('../../../utils');


module.exports = (req, res) => {

    Order.findAndCountAll(getIncludes(req, { 
        where: req.params
    }))
    .then((response) => {
        res.status(200).send({
            count: response.count,
            data: handleResponse(response.rows),
        })
    })
    .catch((error) => {
        res.status(400).send({
            dbError: error,
        })
    })

}