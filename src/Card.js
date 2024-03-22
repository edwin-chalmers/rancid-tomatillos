import './Card.css'

function Card({title, image, id}) {
    return (
        <figure className='card'>
            <img className="poster" id={id} src={image} alt="" height="250px" width="200px"/>
        </figure>
    )
}

export default Card