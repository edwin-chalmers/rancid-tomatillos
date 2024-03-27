import "./Nav.css"
import rancidTomatilloLogo from '../../images/rancid-tomatillo-logo.png';

function Nav() {
    return (
        <>
            <nav className="Nav-bar">
                <img className="rancid-tomatillo-logo" src={rancidTomatilloLogo} alt="Rancid Tomatillo icon" />
                <p>Rancid Tomatillos</p>
            </nav>
        </>
    )
}

export default Nav