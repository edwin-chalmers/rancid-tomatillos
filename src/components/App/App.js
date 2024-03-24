import './App.css'
// import movieData from '../../movieData'
import Movies from '../Movies/Movies'
import TopMovie from '../TopMovie/TopMovie'
import Modal from '../Modal/Modal'
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
        throw new Error('No top movie found')
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
      const targetMovie = data.movie
      setSingleMovieId(movieId)
      setSingleMovie(targetMovie)
    })
  }

  function handleOpen(movieId) {
    fetchSelectedMovie(movieId)
    setOpen(true)
  }

  console.log('open?', open)

  function handleClose() {
    setSingleMovieId(0)
    setOpen(false)
  }

  return (
    <main className="App">
      <nav className="Nav-bar"></nav>
      {movies.length > 0 ? (
        <>
        {singleMovieId !== 0 && <Modal handleClose={handleClose} open={open} movie={singleMovie}/>}
        {singleMovieId === 0 && <TopMovie movies={movies} topDescription={topDescription} />}
        {singleMovieId === 0 && <Movies movies={movies} handleOpen={handleOpen}/>}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}

export default App
