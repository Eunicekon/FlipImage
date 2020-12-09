
describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should tell me whats in h1', function () {
    cy.get('#checking').should('contain', 'Flip Image')
  })
})