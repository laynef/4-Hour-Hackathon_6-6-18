const { MODEL } = require('../../../models');


module.exports = () => {

    MODEL.update({
        where: req.params,
    }, { 
        active: false 
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