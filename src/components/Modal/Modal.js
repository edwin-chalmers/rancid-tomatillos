import './Modal.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchSingleMovie } from '../../apiCalls'

function Modal({ formatDate, formatGenre }) {

    const [movie, setMovie] = useState({})
    const movieId = useParams().movieId

    useEffect(() => {
        fetchSingleMovie(movieId)
            .then(data => {
                setMovie(data.movie)
                console.log(data.movie.title)
            })
    }, [])
    const backdrop = movie.backdrop_path
    const figBackground = {
        backgroundImage: 'url(' + backdrop + ')',
    }

    return (
        <dialog>
            <div className='background-overlay'>
                <img style={figBackground} alt=''></img>
            </div>
            <div className='dialog-contents'>
                <div className='movie-details'>
                    <h1>{movie.title}</h1>
                    <p className='overview'>{movie.overview}</p>
                    <div className='deep-details'>
                        {/* change to sematic dl */}
                        <div>
                            <p className='details-title'>Rating:</p>
                            <p className='details-data'>{movie.average_rating}/10</p>
                        </div>
                        <div>
                            <p className='details-title'>Release Date:</p>
                            {movie.release_date && (<p className='details-data'>{formatDate(movie.release_date)}</p>)}
                        </div>
                        <div>
                            <p className='details-title'>Genre:</p>
                            {movie.genres && (<p className='details-data'>{formatGenre(movie.genres)}</p>)}
                        </div>
                    </div>
                </div>
                <button>⃪<Link to='/'>⃪Back to home</Link></button>
            </div>
        </dialog>
    )
}

export default Modal
