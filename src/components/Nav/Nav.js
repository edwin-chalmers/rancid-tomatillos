import "./Nav.css"
import rancidTomatilloLogo from '../../images/rancid-tomatillo-logo.png';
import { NavLink } from 'react-router-dom'
function Nav() {
    return (
        <header>
            <nav className="Nav-bar">
                <img className="rancid-tomatillo-logo" src={rancidTomatilloLogo} alt="Rancid Tomatillo icon" />
                <h1><NavLink to='/'>Rancid Tomatillos</NavLink></h1>
                {/* <NavLink to='/'>Home</NavLink> */}
            </nav>
        </header>
    )
}

export default Nav