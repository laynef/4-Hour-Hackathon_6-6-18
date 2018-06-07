const fs = require('fs')
const path = require('path')

const pathname = path.join(__dirname, 'methods')

const index = fs.readdirSync(pathname)
.reduce((acc, item) => {
    acc = { ...acc, ...require(path.join(pathname, item)) }
    return acc;
}, {})

module.exports = index

