// https://docs.cypress.io/api/introduction/api.html

describe('test auth user', () => {
  it('wrong auth', () => {
    const fakeId = 'fake id' // 5f8475902b0be670555f1bb3
    const siteId = '5f8475902b0be670555f1bb3'
    cy.viewport(1200, 1100)
    cy.visit('/analytics')
    cy.url().should('include', '/sign-in')
    cy.get('form')
    cy.get('input[name="site-id"]').type(fakeId).should('have.value', fakeId)
    cy.wait(1500)
    cy.get('form').submit()
    cy.get('.err-msg')
    cy.get('button').and('be.disabled')
    cy.wait(1500)
    cy.get('input[name="site-id"]').clear()
    cy.wait(1500)
    cy.get('input[name="site-id"]').type(siteId).should('have.value', siteId)
    cy.wait(1500)
    cy.get('.err-msg').and('be.empty')
    cy.get('button').and('not.be.disabled')
    cy.get('form').submit()
  })
})
