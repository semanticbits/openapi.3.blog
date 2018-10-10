const config = {}

config.reload = () => {
  config.swaggerDefaultJWT = process.env.SWAGGER_DEFAULT_JWT || 'Some default JWT here...'
  config.swaggerServerPort = process.env.SWAGGER_SERVER_PORT || 3000
  config.displayExplorerBar = process.env.DISPLAY_EXPLORER_BAR === 'true'
  config.displayModels = process.env.DISPLAY_MODELS || 1
}

config.reload()

module.exports = config
