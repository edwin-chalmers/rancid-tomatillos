
import './Movies.css'
import Card from './Card.js'

function Movies({ movies }) {
    const movieCards = movies.movies.map(movie => {
        return (
            <Card
                id={movie.id}
                title={movie.title}
                image={movie.poster_path}
            />
        )
    })

    return (
        <div className='movies-container'>
            {movieCards}
        </div>
    )
}

export default Movies;