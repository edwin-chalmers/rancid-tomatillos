
import "./ErrorPage.css"
import rancidTomatilloError from '../../images/rancid-tomatillo.png';
import PropTypes from 'prop-types'

function ErrorPage({ error }) {
    return (
    <div className="error-505">
        <img className="rancid-tomatillo-error" src={rancidTomatilloError} alt="Rancid Tomatillo broken icon"/>
        <h1>{error}</h1>
        <div className='error-message'>
        <p>There was a glitch in the matrix.. We now know about this issue and are working to fix it.</p>
        <p>In the meantime, here is what you can do:</p>
        <p>&nbsp;</p>
        <ul>
            <li><b>Refresh the page</b>(Sometimes this helps)</li>
            <li><b>Try again</b> in 30 minutes</li>
        </ul>
        </div>
    </div>
)}

ErrorPage.propTypes = {
    error: PropTypes.string.isRequired
}

export default ErrorPage