// https://docs.cypress.io/api/introduction/api.html

describe('test a chart', () => {
  it('test canvas for a chart', () => {
    const siteId = '5f8475902b0be670555f1bb3'
    cy.viewport(1200, 1100)
    cy.visit('/analytics')
    cy.url().should('include', '/sign-in')
    cy.get('form')
    cy.get('input[name="site-id"]').type(siteId).should('have.value', siteId)
    cy.get('form').submit()
  })
})
