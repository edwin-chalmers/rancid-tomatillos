import './Modal.css'

function Modal({id, movies}) {
console.log('singleMovieId inside Modal', id)
    const targetMovie = movies.find(movie => {
        return movie.id === id
    })

    console.log('target Movie', targetMovie)
    return (
        <dialog>
            <h2>{targetMovie.title}</h2>
        </dialog>
    )
}

export default Modal
