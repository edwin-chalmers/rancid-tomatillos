import './Modal.css'

function Modal({id, movies}) {

    const targetMovie = movies.find(movie => {
        console.log('movie find', movie)
        return movie.id === id
    })

    console.log('modal target movie', targetMovie)
    //targetMovie === undefined
    //console.log inside targetMovie not logging
    return (
        <dialog>
            <h2>{targetMovie}</h2>
        </dialog>
    )
}

export default Modal
