import './Home.css'
import Movies from '../Movies/Movies'
import TopMovie from '../TopMovie/TopMovie'
import PropTypes from 'prop-types'

function Home({movies, setMovie, handleOpen, topDescription, formatDate, formatGenre,}) {
    const main =  (
        <>
            <TopMovie
                topDescription={topDescription}
                formatDate={formatDate}
                formatGenre={formatGenre}
            />
            <Movies 
                movies={movies}
                setMovie={setMovie}
                handleOpen={handleOpen}
            />
        </>
      )
    
    return (
        <>
            {main}
        </>
    )
}

TopMovie.propTypes = {
  topDescription: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  formatGenre: PropTypes.func.isRequired,
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  handleOpen: PropTypes.func.isRequired,
}

export default Home