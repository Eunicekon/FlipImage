describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('see an image on the page', function () {
    cy.get('#imgage').should('contain', 'skyline')
  })
})