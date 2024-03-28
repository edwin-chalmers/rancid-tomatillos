
import './Movies.css'
import Card from '../Card/Card'

function Movies({ movies, setMovie}) {

    const moviesCard = movies.map(movie => {
        return (
            <Card
                movie={movie}
                key={movie.id}
                setMovie={setMovie}
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
