/// <reference types="cypress" />

describe('Filter by category clothes', () => {
    it("TC-001: BE | Filter products by clothes", () => {
        cy.request('GET', 'http://www.testingyes.com/onlineshop/3-clothes').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.not.be.null;
        });
    });
    it("TC-002: BE | Filter products by accesories", () => {
        cy.request('GET', 'http://www.testingyes.com/onlineshop/6-accessories').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.not.be.null;
        });
    });
});