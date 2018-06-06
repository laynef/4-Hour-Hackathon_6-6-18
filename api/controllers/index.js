const fs = require('fs')
const path = require('path')

const index = fs.readdirSync(__dirname).reduce((acc, item) => {
    if (fs.statSync(`${__dirname}/${item}`).isDirectory()) {
        acc[item] = require(`${__dirname}/${item}`);
    }
    return acc;
}, {});

module.exports = index;
