describe('clicking on navbar', () => {
  it('click on Premier League then title of matches should English Premier League and address should be /PremierLeague', () => {
    cy.visit('')
    cy.getDataTest('premier-league-link').click()

    cy.get('legend').contains(/English Premier League/i)

    cy.url().should('include', '/PremierLeague')
  })
})