describe('Landing page', () => {
  beforeEach(() => {
    // cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    //   statusCode: 200,
	  //   body: [
    //     {
    //         "id": 436270,
    //         "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    //         "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    //         "title": "Black Adam",
    //         "average_rating": 4,
    //         "release_date": "2022-10-19"
    //     },
    //     {
    //         "id": 724495,
    //         "poster_path": "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
    //         "backdrop_path": "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
    //         "title": "The Woman King",
    //         "average_rating": 7,
    //         "release_date": "2022-09-15"
    //     },
    //     {
    //         "id": 1013860,
    //         "poster_path": "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
    //         "backdrop_path": "https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
    //         "title": "R.I.P.D. 2: Rise of the Damned",
    //         "average_rating": 7,
    //         "release_date": "2022-11-15"
    //     },
    //     {
    //         "id": 505642,
    //         "poster_path": "https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
    //         "backdrop_path": "https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    //         "title": "Black Panther: Wakanda Forever",
    //         "average_rating": 6.5,
    //         "release_date": "2022-11-09"
    //     },
    //     {
    //         "id": 934641,
    //         "poster_path": "https://image.tmdb.org/t/p/original//pUPwTbnAqfm95BZjNBnMMf39ChT.jpg",
    //         "backdrop_path": "https://image.tmdb.org/t/p/original//sP1ShE4BGLkHSRqG9ZeGHg6C76t.jpg",
    //         "title": "The Minute You Wake Up Dead",
    //         "average_rating": 5,
    //         "release_date": "2022-11-04"
    //     },
    //     {
    //         "id": 829799,
    //         "poster_path": "https://image.tmdb.org/t/p/original//xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
    //         "backdrop_path": "https://image.tmdb.org/t/p/original//au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
    //         "title": "Paradise City",
    //         "average_rating": 1,
    //         "release_date": "2022-11-11"
    //     },
    //   ]
    // })
    // .intercept("GET", "http://localhost:3000/436270", {
    //   statusCode: 200,
    //   body: {
    //     "movie": {
    //         "id": 436270,
    //         "title": "Black Adam",
    //         "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    //         "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    //         "release_date": "2022-10-19",
    //         "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    //         "genres": [
    //             "Action",
    //             "Fantasy",
    //             "Science Fiction"
    //         ],
    //         "budget": 200000000,
    //         "revenue": 384571691,
    //         "runtime": 125,
    //         "tagline": "The world needed a hero. It got Black Adam.",
    //         "average_rating": 4
    //     }
    //   }
    // })
   cy.visit('http://localhost:3000')
  })
  
  it('Should load the Top Movie Poster', () => {
    cy.get("header")
    .contains("h1", "Rancid Tomatillos")
    .get('figure.top-movie').within(() => {
      cy.get('h1').contains('The Lair') 
      cy.get('h2').contains('Unlocked. Unleashed.')
      cy.get('p').eq(1).contains('Action - Horror')
    });

  })
  
  it('Should load individual movie cards ', () => {
    cy.get('div.movies-container').within(() => {
      cy.get('figure').children()
    })
  })

  it('Should check if al the cards have images', () => {
    cy.get('figure.card').each(($figure, index, $list) => {
      cy.wrap($figure).find('img').should('exist');
    });
  });
  
  it('Should the first movie cards ', () => {
    cy.get('figure.card').each(($figure) => {
      cy.wrap($figure).find('img').should('exist')
    });
    cy.get('.card #436270').click()
    .url().should('include', '/436270')
    .get('dialog').within(() => {
      cy.get('h1').contains('Black Adam')
    })
  })
  
  it('Should the first movie cards ', () => {
    cy.get('figure.card').each(($figure) => {
      cy.wrap($figure).find('img').should('exist')
    });
    cy.get('.card #760104').click()
    .url().should('include', '/760104')
    .get('dialog').within(() => {
      cy.get('h1').contains('X')
    })
  })
  
})
