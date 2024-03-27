import './App.css'

import Movies from '../Movies/Movies'
import TopMovie from '../TopMovie/TopMovie'
import Modal from '../Modal/Modal'
import ErrorPage from '../ErrorPage/ErrorPage'
import Nav from '../Nav/Nav'

import PropTypes from 'prop-types'

import { useState, useEffect} from 'react'
import { fetchData, fetchSingleMovie } from '../../apiCalls'

function App() {
  const [movies, setMovies] = useState([])
  const [topDescription, setTopDescription] = useState([])
  const [error, setError] = useState('')
  const [singleMovieId, setSingleMovieId] = useState(0)
  const [singleMovie, setSingleMovie] = useState({})
  const [open, setOpen] = useState(false)





  useEffect(() => {
    fetchData('movies')
      .then(data => {
        const sortedMovies = [...data.movies].sort((a, b) => b.average_rating - a.average_rating)
        const topMovie = sortedMovies[0]
        setMovies(data.movies) // Use the unsorted movies data to set state
        if (topMovie) {
          return fetchData(`movies/${topMovie.id}`)
        }
        // throw new Error('No top movie found')
        setError("Can't fetch the movie :(")
      })
      .then(topMovieDescription => {
        setTopDescription(topMovieDescription.movie);
      })
      .catch(error => {
        setError('Oops! Something broke.')
        console.log(error.message)
      });
  }, []);





  function fetchSelectedMovie(movieId) {
    fetchSingleMovie(movieId)
    .then(data => {
      setSingleMovie(data.movie)
    })
  }

  function handleOpen(movieId) {
    setSingleMovieId(movieId)
    fetchSelectedMovie(movieId)
    setOpen(true)
  }

  function handleClose() {
    setSingleMovieId(0)
    setOpen(false)
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }

function formatGenre(genres) { 
    return genres.join(" - ")
  }





  return (
    <main className="App">
      {!movies.length && (
        <ErrorPage error={error}/>
      )}
      <Nav />
      {movies.length && (
        <>
          {singleMovieId !== 0 
            ? <Modal handleClose={handleClose} open={open} movie={singleMovie} formatDate={formatDate} formatGenre={formatGenre}/>
            : (<><TopMovie topDescription={topDescription} formatDate={formatDate} formatGenre={formatGenre}/>
              <Movies movies={movies} handleOpen={handleOpen}/></>)}
        </>
      )}
    </main>
  );
}





ErrorPage.propTypes = {
  error: PropTypes.string.isRequired
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  movie: PropTypes.array.isRequired,
  formatDate: PropTypes.func.isRequired,
  formatGenre: PropTypes.func.isRequired,
};

TopMovie.propTypes = {
  topDescription: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  formatGenre: PropTypes.func.isRequired,
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  handleOpen: PropTypes.func.isRequired,
}

export default App
