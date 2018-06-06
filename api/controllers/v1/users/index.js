const fs = require('fs')
const path = require('path')

const index = fs.readdirSync(__dirname).reduce((acc, item) => {
    acc[item] = require(`${__dirname}/${item}`);
    return acc;
}, {});

module.exports = index;