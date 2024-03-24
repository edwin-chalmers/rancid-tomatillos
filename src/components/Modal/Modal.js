import './Modal.css'

function Modal({ movie, handleClose}) {

    console.log('target Movie', movie)
    console.log('movie title', movie.title)

    const releaseDate = movie.release_date
    console.log('release date', releaseDate)
    // movie.release_date.replaceAll('-', ' ').split(' ').splice(0, 1)

    const backdrop = movie.backdrop_path
    const figBackground = {
        backgroundImage: 'url(' + backdrop + ')',
    }

    return (
        <dialog>
            {/* <figure style={figBackground}> */}
            <div className='background-overlay'>
                <img style={figBackground} alt=''></img>
            </div>
            <div className='dialog-contents'>
                <div className='movie-details'>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <div className='deep-details'>
                        {/* change to sematic dl */}
                        <div>
                            <p className='details-title'>Rating:</p>
                            <p>{movie.average_rating}/10</p>
                        </div>
                        <div>
                            <p className='details-title'>Release Date:</p>
                            <p>{movie.release_date}</p>
                        </div>
                        <div>
                            <p className='details-title'>Genre:</p>
                            <p>{movie.genres}</p>
                        </div>
                    </div>
                </div>
                <button onClick={handleClose}>⃪ Back to home</button>
            </div>
            {/* </figure> */}
            <div>
              
            </div>
        </dialog>
    )
}

export default Modal
