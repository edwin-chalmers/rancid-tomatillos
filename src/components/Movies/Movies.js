
import './Movies.css'
import Card from '../Card/Card'
import PropTypes from "prop-types"

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

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        average_rating: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
    })).isRequired,
}

export default Movies;
