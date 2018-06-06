const { MODEL } = require('../../../models');
const { getIncludes } = require('../../../utils');


module.exports = (req, res) => {

    MODEL.findOne(getIncludes({ 
        where: req.params || {}
    }))
    .then((response) => {
        res.status(200).send({
            archived: true,
        })
    })
    .catch((error) => {
        res.status(400).send({
            dbError: error,
        })
    })

}