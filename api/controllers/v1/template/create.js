const { MODEL } = require('../../../models');
const { getIncludes } = require('../../../utils');


module.exports = (req, res) => {

    MODEL.create(req.body, getIncludes(req, {
        returning: true
    }))
        .then((response) => {
            res.status(201).send(response)
        })
        .catch((error) => {
            res.status(400).send({
                dbError: error,
            })
        })

}

