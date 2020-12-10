describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('see an image on the page', function () {
    cy.get('div').find('img').should('have.attr', 'src', 'image/obamalaugh.jpg')
  })
})