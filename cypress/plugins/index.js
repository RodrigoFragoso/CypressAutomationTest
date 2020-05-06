/// <reference types="cypress" />
 /**
 * Definição de ambientes para execução, por "default" esta  o ambiente de DEV
 * INF.: https://docs.cypress.io/api/plugins/configuration-api.html#Switch-between-multiple-configuration-files
 * Para executar em outro ambiente, na console de execução passe o seguinte parametro "--env configFile=qa"
  * Exemplo: cypress run --env configFile=qa
 */

 // promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile (file) {
  const pathToConfigFile = path.resolve('cypress/support/', 'environments', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

// plugins file
module.exports = (on, config) => {
  // accept a configFile value or use development by default
  const file = config.env.configFile || 'dev'
  return getConfigurationByFile(file)
}

// const dotenvPlugin = require('cypress-dotenv');
// module.exports = (on, config) => {
//   config = dotenvPlugin(config)
//   return config
// }