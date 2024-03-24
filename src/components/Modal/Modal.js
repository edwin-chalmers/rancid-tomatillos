import './Modal.css'

function Modal({ movie }) {

    console.log('target Movie', movie)
    return (
        <dialog>
            <h2 className='modal-heading'>{movie.title}</h2>
            <p>{}</p>
        </dialog>
    )
}

export default Modal
