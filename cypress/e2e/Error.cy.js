describe('Error page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      body: {}
    })


   .visit('http://localhost:3000/error')
  })

  it('Should load the Top Movie Poster', () => {
    cy.get("div.error-505")
    .contains("h1", "There was a glitch in the matrix..")
  })
  
})