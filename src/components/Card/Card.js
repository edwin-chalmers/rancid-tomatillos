import './Card.css'
import { NavLink } from 'react-router-dom'

function Card({ movie }) {

    return (
            <figure className='card' >
                <NavLink to={`/${movie.id}`}>
                    <img className="poster" id={movie.id} src={movie.poster_path} alt={`${movie.title} poster`} height="350px" width="300px" />
                </NavLink>
            </figure>
    )
}

export default Card

