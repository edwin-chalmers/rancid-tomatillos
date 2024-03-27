import './App.css'
import Home from '../Home/Home'
import Modal from '../Modal/Modal'
import { useState, useEffect } from 'react'
import { fetchData } from '../../apiCalls'
import rancidTomatilloLogo from '../../images/rancid-tomatillo.png';
import { Route, Routes, NavLink } from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage'
import Nav from '../Nav/Nav'
import PropTypes from 'prop-types'

function App() {
  const [movies, setMovies] = useState([])
  const [topDescription, setTopDescription] = useState([])
  const [error, setError] = useState('')

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
      <header>
        <nav className="Nav-bar">
          <h1>Rancid Tomatillos</h1>
          <NavLink to='/'>Home</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home movies={movies} topDescription={topDescription} formatDate={formatDate} formatGenre={formatGenre} />} />
        <Route path='/:movieId' element={<Modal formatDate={formatDate} formatGenre={formatGenre} />} />
      </Routes>

      {!movies.length && (
        <ErrorPage error={error}/>
      )}
      <Nav />

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
