const { Tracking } = require('../../../models');
const { getIncludes, handleResponse } = require('../../../utils');


module.exports = (req, res) => {

    Tracking.create(req.body, getIncludes(req, {
        returning: true
    }))
        .then((response) => {
            res.status(201).send(handleResponse(response))
        })
        .catch((error) => {
            res.status(400).send({
                dbError: error,
            })
        })

}

