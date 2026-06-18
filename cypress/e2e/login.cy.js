describe('First Cypress Test', () => {

  it('opens login page', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')

  })

})