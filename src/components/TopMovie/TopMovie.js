import './TopMovie.css'

function TopMovie({ movies, topDescription }) {
    // console.log('TopMovie - fetchMovieInfo', fetchMovieInfo(movie))
    // console.log('TopMovie - movie', movie)
    // console.log('TopMovie - topDescription', topDescription)

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

    function formatGenre(genres) { 
        // if (!genres) {
        //     return
        // }
        return genres.join(" - ")
    }

    return (
        <div className='overlay'>
            <figure className='top-movie'>
                <img className="top-movie-poster"src={topDescription.poster_path}></img>
                <div className='top-movie-info'>
                    <h1>{topDescription.title}</h1>
                    <h2>{topDescription.tagline}</h2>
                    <p>{topDescription.overview}</p>
                    <p>{formatDate(topDescription.release_date)}</p>
                    {topDescription.genres && (<p>{formatGenre(topDescription.genres)}</p>)}
                </div>
            </figure>
            <img className='top-movie-img' src={topDescription.backdrop_path} alt='' width='100%'/>
        </div>
    )
}

export default TopMovie