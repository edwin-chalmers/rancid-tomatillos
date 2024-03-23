import './Card.css'

function Card({title, image, id, fetchSelectedMovie}) {

    

    return (
        <figure className='card' onClick={() => fetchSelectedMovie(id, title)}>
            <img className="poster" id={id} src={image} alt="" height="250px" width="200px"/>
        </figure>
    )
}

export default Card