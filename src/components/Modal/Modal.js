import './Modal.css'
import { Link } from 'react-router-dom'

function Modal({ movie, handleClose, formatDate, formatGenre}) {
    console.log(movie.title)
    console.log(movie.id)
    //724495
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
                <button onClick={handleClose}>⃪ Back to home</button>
            </div>
        </dialog>
    )
}

export default Modal
