
import './Movies.css'
import Card from '../Card/Card'

function Movies({ movies, fetchSelectedMovie, setMovie}) {

    const moviesCard = movies.map(movie => {
        return (
            <Card
                id={movie.id}
                title={movie.title}
                image={movie.poster_path}
                key={movie.id}
                fetchSelectedMovie={fetchSelectedMovie}
                setMovie={setMovie}
            />
        )
    })

    return (
        <div className='movies-container'>
            {moviesCard}
        </div>
    )
}

export default Movies;

// movies --> ids
// id --> genre list
// genre list --> list of all genres
// 