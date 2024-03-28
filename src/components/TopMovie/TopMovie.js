import './TopMovie.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function TopMovie({ topDescription, formatGenre, }) {

    return (
        <div className='overlay'>
            <figure className='top-movie'>
                <img className="top-movie-poster"src={topDescription.poster_path} alt={`${topDescription.title} poster`}></img>
                <div className='top-movie-info'>
                    <h1>{topDescription.title}</h1>
                    <h2>{topDescription.tagline}</h2>
                    <p>{topDescription.overview}</p>
                    {/* <p className='data'>{formatDate(topDescription.release_date)}</p> */}
                    <div className='genres-button'>
                        {topDescription.genres && (<p className='data'>{formatGenre(topDescription.genres)}</p>)}
                        <button><NavLink to={`/${topDescription.id}`}>More Details →</NavLink></button>
                    </div>
                </div>
            </figure>
            <img className='top-movie-img' src={topDescription.backdrop_path} alt={`${topDescription.title} backdrop`} width='100%'/>
        </div>
    )
}

TopMovie.propTypes = {
    topDescription: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        backdrop_path: PropTypes.string.isRequired,
      }).isRequired,
      formatGenre: PropTypes.func.isRequired,
}

export default TopMovie