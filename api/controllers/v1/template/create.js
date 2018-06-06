const { capitalize } = require('lodash');
const { plural } = require('pluralize')
const { MODEL } = require('../../../models');


module.exports = () => {

    MODEL.create(req.body, { 
        include: req.query.include.split(',').map(e => ({
            model: capitalize(plural(e))
        }))
    })
    .then((response) => {
        res.status(201).send(response)
    })
    .catch((error) => {
        res.status(400).send({
            dbError: error,
        })
    })

}

