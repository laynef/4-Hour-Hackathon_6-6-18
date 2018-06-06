const { MODEL } = require('../../../models');


module.exports = (req, res) => {

    MODEL.update(req.body, {
        where: req.params || {},
    })
    .then((response) => {
        res.status(203).send({
            deleted: true,
        })
    })
    .catch((error) => {
        res.status(400).send({
            dbError: error,
        })
    })

}