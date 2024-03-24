import './Modal.css'

function Modal({ movie, handleOpen, handleClose, open }) {

    console.log('target Movie', movie)
    return (
        <dialog>
            <h2 className='modal-heading'>{movie.title}</h2>
            <p>{}</p>
            <button onClick={handleClose}>X</button>
        </dialog>
    )
}

export default Modal
