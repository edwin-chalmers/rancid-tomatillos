
import './Movies.css'
import Card from '../Card/Card'

function Movies({ movies }) {

    const moviesCard = movies.map(movie => {
        return (
            <Card
                movie={movie}
                key={movie.id}
            />
        )
    })

    return (
        <div className='wrapper'>
            <h3>All movies:</h3>
            <div className='movies-container'>
                {moviesCard}
            </div>
        </div>
    )
}

export default Movies;
