const { MODEL } = require('../../../models');


module.exports = () => {

    MODEL.findAllAndCount({ 
        where: req.params
    })
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