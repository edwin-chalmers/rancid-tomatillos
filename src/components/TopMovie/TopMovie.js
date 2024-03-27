import './TopMovie.css'

function TopMovie({ topDescription, formatDate, formatGenre, }) {

    return (
        <div className='overlay'>
            <figure className='top-movie'>
                <img className="top-movie-poster"src={topDescription.poster_path} alt={`${topDescription.title} poster`}></img>
                <div className='top-movie-info'>
                    <h1>{topDescription.title}</h1>
                    <h2>{topDescription.tagline}</h2>
                    <p>{topDescription.overview}</p>
                    <p>{formatDate(topDescription.release_date)}</p>
                    {topDescription.genres && (<p>{formatGenre(topDescription.genres)}</p>)}
                </div>
            </figure>
            <img className='top-movie-img' src={topDescription.backdrop_path} alt={`${topDescription.title} backdrop`} width='100%'/>
        </div>
    )
}

export default TopMovie