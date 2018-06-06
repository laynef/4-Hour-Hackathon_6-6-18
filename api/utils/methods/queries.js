const { capitalize } = require('lodash');
const { singular } = require('pluralize')
const models = require('../../models')

module.exports = {
    
    getIncludes: (req, others={}) => {

        return {
            ...others,
            include: req.query && req.query.include ? req.query.include
                .split(',')
                .filter(e => !!models[capitalize(singular(e))])
                .map(e => {
                    return {
                        model: models[capitalize(singular(e))]
                    }
                }) : []
        }
    }

};
