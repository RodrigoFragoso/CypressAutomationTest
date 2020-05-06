// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
import LOC from '../support/locators/locatorsAdmin'

Cypress.Commands.add('login', () =>{
    cy.visit(Cypress.env('host'), { timeout: 6000 });
    localStorage.clear();
    cy.request({
        url: Cypress.env('host'),
        followRedirect: false // turn off following redirects
      })
        .then((resp) => {
          // redirect status code is 302
          expect(resp.status).to.eq(302)
          expect(resp.redirectedToUrl).to.eq('https://admin-demo.nopcommerce.com/admin/')
    })
    cy.get('h1').should('exist', LOC.LOGIN.TEXT_H1);
    cy.get('h2').should('exist', LOC.LOGIN.TEXT_H2);
    cy.get(LOC.LOGIN.INPUT_EMAIL).should('exist').clear().type(LOC.LOGIN.TEXT_EMAIL);
    // cy.get(LOC.LOGIN.INPUT_EMAIL).should('exist').type(Cypress.env('EMAIL'));
    cy.get(LOC.LOGIN.INPUT_PASSWORD).should('exist').clear().type(LOC.LOGIN.TEXT_PASSWORD);
    cy.get(LOC.LOGIN.BUTTON_LOGIN).should('exist').click();
});

Cypress.Commands.add('ContaQtdDeItems', () =>{
    cy.get('h1').should('exist', LOC.DASHBOARD.TEXT_H1);
    cy.get(LOC.DASHBOARD.BUTTON_CATALOG).should('exist').click();
    cy.get(LOC.DASHBOARD.BUTTON_CATEGORIES).should('exist').click();
    cy.wait(2000);
    cy.get('#categories-grid_info').invoke('text').then(pegaTexto =>{
        let regexPegaTotalDeItems = new RegExp("(of.)(.*[0-9])");
        let recebeQtdDeItems = Number(regexPegaTotalDeItems.exec(pegaTexto)[2]);
        Cypress.env('qtdDeItems', recebeQtdDeItems);
    });
});

Cypress.Commands.add('BuscaCategoria', (typeCategory) => {
    cy.get(LOC.CATEGORIES.INPUT_CATEGORY_NAME).should('exist').clear().type(typeCategory);
    cy.get(LOC.CATEGORIES.BUTTON_SEARCH).should('exist').click({ force: true });
    cy.get('.content').should('exist').and('have.contain', typeCategory);
});

Cypress.Commands.add('logout', (err, runnable) => {
    cy.contains('Logout').click();
});

// TODO tomar cuidado com essa merda aqui!
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});