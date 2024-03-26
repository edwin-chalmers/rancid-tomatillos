import './Card.css'
import { NavLink } from 'react-router-dom'

function Card({title, image, id}) {

    return (
        <>
            <figure className='card' >
                <NavLink to={`/${id}`}>
                    <img className="poster" id={id} src={image} alt={`${title} poster`} height="250px" width="200px" />
                </NavLink>
            </figure>
        </>
    )
}

export default Card

