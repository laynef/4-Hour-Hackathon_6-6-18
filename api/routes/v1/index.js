const fs = require('fs')

const index = fs.readdirSync(__dirname).reduce((acc, item) => {
    acc[item] = require(`${__dirname}/${item}`);
    return acc;
}, {});


