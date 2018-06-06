const { User } = require('../../../models');
const { getIncludes, handleResponse } = require('../../../utils');


module.exports = (req, res) => {

    User.findOne(getIncludes(req, { 
        where: req.params || {}
    }))
    .then((response) => {
        console.log(response)
        res.status(200).send(handleResponse(response))
    })
    .catch((error) => {
        res.status(400).send({
            dbError: error,
        })
    })

}