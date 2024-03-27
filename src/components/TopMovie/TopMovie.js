import './TopMovie.css'
import { NavLink } from 'react-router-dom'

function TopMovie({ topDescription, formatDate, formatGenre, }) {

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

export default TopMovie