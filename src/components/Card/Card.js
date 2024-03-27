import './Card.css'
import { NavLink } from 'react-router-dom'

function Card({ title, image, id }) {

    return (
        <>
            <figure className='card' >
                <NavLink to={`/${id}`}>
                    <img className="poster" id={id} src={image} alt={`${title} poster`} height="350px" width="300px" />
                </NavLink>
            </figure>
        </>
    )
}

export default Card

