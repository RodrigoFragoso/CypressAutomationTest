/// <reference types="cypress" />

describe('Buscar uma Categoria no Ecommerce Admin', () => {
    
    before('Logar na plataforma', () => {
        cy.login();
    });

    it('Pega a quantidade de items do Catalog>>Category', () => {
        cy.ContaQtdDeItems();
    });
    
    it('Buscar Categorias:', () => {
        cy.BuscaCategoria('Computers');
    });

    it('Logout', () => {
        cy.logout();
    });

});