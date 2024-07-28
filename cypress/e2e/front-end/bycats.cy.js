/// <reference types="cypress" />

describe('Filter by category', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('TC-003: FE | Filter by clothes', () => {
        cy.get('#category-3 > a').click();
        cy.get('#js-product-list-header > div').should('be.visible');
        cy.screenshot();
    })
});