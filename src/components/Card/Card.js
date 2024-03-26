import './Card.css'
import { NavLink } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

function Card({title, image, id, handleOpen}) {

    return (
        <>
            <figure className='card' >
                <NavLink to={`/${id}`}>
                    <img onClick={() => handleOpen(id)} className="poster" id={id} src={image} alt={`${title} poster`} height="250px" width="200px" />
                </NavLink>
            </figure>
        </>
    )
}

export default Card

