const fs = require('fs')

const index = fs.readdirSync(__dirname)
    .map(e => e.replace(RegExp('.js', 'ig')))
    .reduce((acc, item) => {
        acc[item] = require(`${__dirname}/${item}`);
        return acc;
    }, {});

module.exports = index
