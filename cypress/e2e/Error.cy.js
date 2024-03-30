describe('Error page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      body: {}
    })
    
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/potatoes", {
      statusCode: 200,
      body: {}
    })


  })
  
  it('Should load error page', () => {
    cy.visit('http://localhost:3000/error')
    .get("div.error-505")
    .contains("h1", "There was a glitch in the matrix..")
  })
  
  it('Should load error page from a bad route', () => {
    cy.visit('http://localhost:3000/potatoes')
    .get("div.error-505")
    .contains("h1", "There was a glitch in the matrix..")
  })

})