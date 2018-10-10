const path = require('path')
const express = require('express')
const YAML = require('yamljs')
const swaggerUiExpress = require('swagger-ui-express')
const config = require('../config')

const options = {
  // Remove explorer bar at the top of the screen
  explorer: config.displayExplorerBar,
  // Passed into Swagger-UI itself
  swaggerOptions: {
    deepLinking: true,
    defaultModelsExpandDepth: config.displayModels,
    authAction: {
      defaultBearerAuth: {
        name: 'defaultBearerAuth',
        schema: {
          description: 'Default JWT Authorization',
          type: 'http',
          in: 'header',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        },
        value: config.swaggerDefaultJwt
      }
    }
  }
}

const openApiSchema = () => YAML.load(path.join(__dirname, './openapi-schema.yaml'))
swaggerUiExpress.generateHTML(openApiSchema(), options)

const DocumentationRouter = express.Router()
DocumentationRouter.use('/', swaggerUiExpress.serve)
DocumentationRouter.get('/', (req, res, next) => {
  const sendHtmlWithSchema = swaggerUiExpress.setup(openApiSchema(), options)
  sendHtmlWithSchema(req, res, next)
})

DocumentationRouter.use('/openapi', openApiSchema)

module.exports = DocumentationRouter
