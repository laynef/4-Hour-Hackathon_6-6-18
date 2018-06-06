const { each } = require('lodash')

const express = require('express');
const http = require('http')
const cors = require('cors')
const helmet = require('helmet')
const apiVersions = require('./routes')

const app = express();

app.use(cors())
app.use(helmet())

each(apiVersions, (value, key) => {
    app.use(`/api/${key}`, value)
})

const server = http.createServer(app)

server.listen(8080)
