import './Card.css'

function Card({title, image, id, handleOpen}) {
    
    return (
        <>
            {/* {movieModal} */}
            <figure className='card' onClick={() => handleOpen(id)}>
                <img className="poster" id={id} src={image} alt="" height="250px" width="200px" />
            </figure>
        </>
    )
}

export default Card

