import './App.css'
// import movieData from '../../movieData'
import Home from '../Home/Home'
// import Movies from '../Movies/Movies'
// import TopMovie from '../TopMovie/TopMovie'
import Modal from '../Modal/Modal'
import { useState, useEffect } from 'react'
import { fetchData, fetchSingleMovie } from '../../apiCalls'
import rancidTomatilloLogo from '../../images/rancid-tomatillo.png';
import { Route, Routes, BrowserRouter } from 'react-router-dom'


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
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path='/' element={<Home movies={movies} topDescription={topDescription} formatDate={formatDate} formatGenre={formatGenre} handleOpen={handleOpen}/>}/>
          <Route path='/724495' element={<Modal handleClose={handleClose} open={open} movie={singleMovie} formatDate={formatDate} formatGenre={formatGenre} />}/>
          {/* <Home movies={movies} topDescription={topDescription} formatDate={formatDate} formatGenre={formatGenre} handleOpen={handleOpen}/> */}
          {/* <TopMovie movies={movies} topDescription={topDescription} formatDate={formatDate} formatGenre={formatGenre} />
          <Movies movies={movies} handleOpen={handleOpen} /> */}
          {/* <Modal handleClose={handleClose} open={open} movie={singleMovie} formatDate={formatDate} formatGenre={formatGenre} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
