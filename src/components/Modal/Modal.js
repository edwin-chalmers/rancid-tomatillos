import './Modal.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchSingleMovie } from '../../apiCalls'

function Modal({ formatDate, formatGenre }) {

    const [movie, setMovie] = useState({})
    const movieId = useParams().movieId
    console.log(movieId)
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
                    <dl className='deep-details'>
                        <div>
                            <dt className='details-title'>Rating:</dt>
                            <dd className='details-data'>{movie.average_rating}/10</dd>
                        </div>
                        <div>
                            <dt className='details-title'>Release Date:</dt>
                            {movie.release_date && (<dd className='details-data'>{formatDate(movie.release_date)}</dd>)}
                        </div>
                        <div>
                            <dt className='details-title'>Genre:</dt>
                            {movie.genres && (<dd className='details-data'>{formatGenre(movie.genres)}</dd>)}
                        </div>
                    </dl>
                </div>
                <button>⃪<Link to='/'>⃪ Back to home</Link></button>
            </div>
        </dialog>
    )
}

export default Modal
