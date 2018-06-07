const { each } = require('lodash')

const { Router } = require('express')
const fs = require('fs')

const router = Router();

const index = fs.readdirSync(__dirname)
    .map(e => e.replace(RegExp('.js', 'ig'), ''))
    .reduce((acc, item) => {
        acc[item] = require(`${__dirname}/${item}`);
        return acc;
    }, {});

each(index, (routesArray, routeType) => {
    if (routesArray.length > 0) {
        routesArray.forEach((route) => {
            const middleware = route.middleware ? Object.values(route.middleware) : []
            router[routeType](route.route, ...middleware, route.controller)
        })
    }
})

module.exports = router

