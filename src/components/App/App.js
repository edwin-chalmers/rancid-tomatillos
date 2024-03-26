import './App.css'
import Home from '../Home/Home'
import Modal from '../Modal/Modal'
import { useState, useEffect } from 'react'
import { fetchData, fetchSingleMovie } from '../../apiCalls'
import rancidTomatilloLogo from '../../images/rancid-tomatillo.png';
import { Route, Routes, BrowserRouter, Link, NavLink } from 'react-router-dom'


function App() {
  const [movies, setMovies] = useState([])
  const [topDescription, setTopDescription] = useState([])
  const [error, setError] = useState('')
  const [singleMovie, setSingleMovie] = useState({})

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
        console.log(data.movie.title)
      })
  }

  function handleOpen(movieId) {
    fetchSelectedMovie(movieId)
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
     {!movies.length && (
        <div className="error-505">
          <img className="rancid-tomatillo-logo" src={rancidTomatilloLogo} alt="Rancid Tomatillo" />
          <h1>There was a glitch in the matrix..</h1>
          <div className='error-message'>
            <p>{error}. We now know about this issue and are working to fix it.</p>
            <p>In the meantime, here is what you can do:</p>
            <p>&nbsp;</p>
            <ul>
              <li><b>Refresh the page</b>(Sometimes this helps)</li>
              <li><b>Try again</b> in 30 minutes</li>
            </ul>
          </div>
        </div>
      )}
    <header>
      <nav className="Nav-bar">
        <h1>Rancid Tomatillos</h1>
        <NavLink to='/'>Home</NavLink>
        {/* <NavLink to='/:id'>Modal</NavLink> */}
      </nav>
    </header>
      <main className="App">
        <Routes>
          <Route path='/' element={<Home movies={movies} topDescription={topDescription} formatDate={formatDate} formatGenre={formatGenre} handleOpen={handleOpen}/>}/>
          <Route path='/:movieId' element={<Modal movie={singleMovie} formatDate={formatDate} formatGenre={formatGenre}/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
