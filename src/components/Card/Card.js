import './Card.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Card({ movie }) {
    // console.log('CARD', movie)

    return (
            <figure className='card' >
                <NavLink to={`/${movie.id}`}>
                    <img className="poster" id={movie.id} src={movie.poster_path} alt={`${movie.title} poster`} />
                </NavLink>
            </figure>
    )
}


Card.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        average_rating: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
      }).isRequired,
}

export default Card

