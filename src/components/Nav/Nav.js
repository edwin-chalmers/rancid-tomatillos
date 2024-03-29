import "./Nav.css"
import rancidTomatilloLogo from '../../images/rancid-tomatillo-logo.png';
import { NavLink } from 'react-router-dom'
function Nav() {
    return (
        <header className="header">
            <nav className="Nav-bar">
                <img className="rancid-tomatillo-logo" src={rancidTomatilloLogo} alt="Rancid Tomatillo icon" />
                <h1 className="nav-h1"><NavLink to='/' className="nav-link">Rancid Tomatillos</NavLink></h1>
            </nav>
        </header>
    )
}

export default Nav