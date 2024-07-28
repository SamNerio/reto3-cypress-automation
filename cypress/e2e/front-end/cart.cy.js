/// <reference types="cypress" />

describe('Cart feature', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.get('#category-6 > a').click();
    cy.get('#js-product-list > div.products.row > article:nth-child(1) > div > a > img').click();
    cy.get('#add-to-cart-or-refresh > div.product-add-to-cart > div > div.add > button').click();
  })

  it('TC-004: FE | Add product to cart', () => {
    cy.get('#blockcart-modal > div > div > div.modal-body > div > div.col-md-5.divide-right > div').should('be.visible')
    cy.screenshot();
  })
  it('TC-005: FE | Delete product from cart', () => {
    cy.get('#blockcart-modal > div > div > div.modal-body > div > div.col-md-7 > div > div > a').click();
    cy.get('#main > div > div.cart-grid-body.col-xs-12.col-lg-8 > div > div.cart-overview.js-cart > ul > li > div > div.product-line-grid-left.col-md-3.col-xs-4 > span > img').should('not.exist');
    cy.screenshot();
  })
  
});