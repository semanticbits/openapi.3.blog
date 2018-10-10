const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./router')
const config = require('./config')

const app = express()

app.use(bodyParser.json())

// Add the API and Documentation routes
app.use('/api', routes)

// Handle errors thrown by endpoints
const errorHandler = (err, req, res, next) => {
  console.error('We have an error: ' + JSON.stringify(err))
  res.status(500)
  res.json({ error: err })
}

app.use(errorHandler)

app.listen(config.swaggerServerPort, () => console.log(`OpenAPI example server running on ${config.swaggerServerPort}...`));
