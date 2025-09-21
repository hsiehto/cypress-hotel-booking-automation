/// <reference types="cypress" />

describe('Booking Tests', () => {
  beforeEach(() => {
    cy.visitBookingPage();
  })
  it('display booking form', () => {
    cy.contains('Shady Meadows B&B').should('be.visible')
  })
  it('enter form details', () => {
    cy.enterFormDetails();
  })
})

