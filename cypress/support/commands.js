// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitBookingPage', () => {
    cy.visit('/')
})

Cypress.Commands.add('enterFormDetails', () => {
    cy.get('#name').type('John Doe')
    cy.get('#email').type('johndoe@email.com')
    cy.get('#phone').type('111-111-1111')
    cy.get('#subject').type('subject line')
    cy.get('#description').type('message box that contains over 20 characters')
    cy.contains('Submit').click()
    cy.contains('h3', 'Thanks for getting in touch').should('contain.text', 'Thanks for getting in touch')
})