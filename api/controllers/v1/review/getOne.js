const { Review } = require('../../../models');
const { getIncludes, handleResponse } = require('../../../utils');


module.exports = (req, res) => {

    Review.findOne(getIncludes({ 
        where: req.params || {}
    }))
    .then((response) => {
        res.status(200).send(handleResponse(response))
    })
    .catch((error) => {
        res.status(400).send({
            dbError: error,
        })
    })

}