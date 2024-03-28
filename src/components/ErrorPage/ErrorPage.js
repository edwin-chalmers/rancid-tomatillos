
import "./ErrorPage.css"
import rancidTomatilloError from '../../images/rancid-tomatillo.png';
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

function ErrorPage({ error }) {
    const errorState = useLocation().state.error
    console.log(errorState)
    return (
    <div className="error-505">
        <img className="rancid-tomatillo-error" src={rancidTomatilloError} alt="Rancid Tomatillo broken icon"/>
        <h1>{errorState}</h1>
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