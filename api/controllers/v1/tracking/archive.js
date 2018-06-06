const { Tracking } = require('../../../models');


module.exports = (req, res) => {

    Tracking.update({ 
        active: false 
    }, {
        where: req.params || {},
    })
    .then((response) => {
        res.status(203).send({
            archived: true,
        })
    })
    .catch((error) => {
        res.status(400).send({
            dbError: error,
        })
    })

}