import './commands'
require('./commands')
// require('./commands-common/commands')

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-cy', 'data-test', 'data-testid', 'id', 'class', 'tag', 'attributes', 'nth-child']
})