import './Modal.css'

function Modal({ movie, handleClose }) {

    console.log('target Movie', movie)
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
                <h2>{movie.title}</h2>
                <p>{}</p>
                <button onClick={handleClose}>X</button>
            </div>
            {/* </figure> */}
            <div>
              
            </div>
        </dialog>
    )
}

export default Modal
