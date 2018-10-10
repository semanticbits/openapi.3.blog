const express = require('express')
const DocumentationRouter = require('./routes/documentation-router')
const ApiRouter = require('./routes/api-router')

const routes = express.Router()

routes.use('/docs', DocumentationRouter)
routes.use('/', ApiRouter)

module.exports = routes
