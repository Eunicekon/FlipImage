describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('see an image on the page', function () {
    cy.get('div').find('img').should('have.attr', 'src', 'https://thehustle.co/wp-content/uploads/2017/10/obamalaugh-1024x538.jpg')
  })
})