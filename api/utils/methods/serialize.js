const { each } = require('lodash')

module.exports = {

    handleResponse: (response) => {
        if (response === null) return {};
        function fetchOneObject(data, collection, modelString='') {
            if (collection && collection.dataValues) {
                each(collection.dataValues, (value, key) => {
                    if (value && value.dataValues) {
                        fetchOneObject(data, value.dataValues, `${key}_`)
                    } else {
                        data[`${modelString.toLowerCase()}${key.toLowerCase()}`] = value;
                    }
                })
            } else if (collection && Array.isArray(collection) && collection.length > 0) {
                data[`${modelString.toLowerCase()}${key.toLowerCase()}`] = collection.map(e => {
                    return fetchOneObject({}, e);
                })
            } else {
                data[`${modelString.toLowerCase()}${key.toLowerCase()}`] = value;
            }

            return data;
        }
        return fetchOneObject({}, response)
    }
    
};