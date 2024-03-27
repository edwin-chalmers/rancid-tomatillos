
import './Movies.css'
import Card from '../Card/Card'

function Movies({ movies, setMovie, handleOpen}) {

    const moviesCard = movies.map(movie => {
        return (
            <Card
                id={movie.id}
                title={movie.title}
                image={movie.poster_path}
                key={movie.id}
                setMovie={setMovie}
                handleOpen={handleOpen}
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
