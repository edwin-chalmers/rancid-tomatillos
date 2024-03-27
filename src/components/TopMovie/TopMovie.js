import './TopMovie.css'
import PropTypes from 'prop-types'

function TopMovie({ topDescription, formatDate, formatGenre, }) {

    return (
        <div className='overlay'>
            <figure className='top-movie'>
                <img className="top-movie-poster"src={topDescription.poster_path} alt={`${topDescription.title} poster`}></img>
                <div className='top-movie-info'>
                    <h1>{topDescription.title}</h1>
                    <h2>{topDescription.tagline}</h2>
                    <p>{topDescription.overview}</p>
                    <p>{formatDate(topDescription.release_date)}</p>
                    {topDescription.genres && (<p>{formatGenre(topDescription.genres)}</p>)}
                </div>
            </figure>
            <img className='top-movie-img' src={topDescription.backdrop_path} alt={`${topDescription.title} backdrop`} width='100%'/>
        </div>
    )
}

TopMovie.propTypes = {
  topDescription: PropTypes.object.isRequired,
  topDescription: {
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  },
  formatDate: PropTypes.func.isRequired,
  formatGenre: PropTypes.func.isRequired,
}

export default TopMovie