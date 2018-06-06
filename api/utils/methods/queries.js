const { capitalize } = require('lodash');
const { plural } = require('pluralize')

module.exports = {
    
    getIncludes: (req, others={}) => ({
        ...others,
        include: req.query && req.query.include ? req.query.include.split(',').map(e => ({
            model: capitalize(plural(e))
        })) : []
    })

};
