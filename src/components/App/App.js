import './App.css'
import Home from '../Home/Home'
import Modal from '../Modal/Modal'
import ErrorPage from '../ErrorPage/ErrorPage'
import Nav from '../Nav/Nav'
import { useState, useEffect } from 'react'
import { fetchData } from '../../apiCalls'
import { Route, Routes, useNavigate, NavLink } from 'react-router-dom'
import { formatDate, formatGenre } from '../../utils/utils'
import rancidTomatilloLogo from '../../images/rancid-tomatillo-logo.png';


function App() {
  const [movies, setMovies] = useState([])
  const [topDescription, setTopDescription] = useState({})
  // const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()


  useEffect(() => {
    fetchData('movies')
      .then(data => {
        if (data) {
          const sortedMovies = [...data.movies].sort((a, b) => b.average_rating - a.average_rating)
          const topMovie = sortedMovies[0]

          setMovies(data.movies) // Use the unsorted movies data to set state

          if (topMovie) {
            return fetchData(`movies/${topMovie.id}`)
          } else {
            // setErrorMessage("Can't fetch the movie :(") 
            navigate("/error", { replace: true })
          }

        }
      })
      .then(topMovieDescription => {
        setTopDescription(topMovieDescription.movie);
      })
      .catch(error => {
        navigate("/error", { replace: true })
        // setErrorMessage('404')
        console.log(error.message)
      });
  }, [navigate]);

  return (
    <>
      <header className="header">
        {/* <nav className="Nav-bar">
          <img className="rancid-tomatillo-logo" src={rancidTomatilloLogo} alt="Rancid Tomatillo icon" />
          <h1 className="nav-h1"><NavLink to='/' className="nav-link">Rancid Tomatillos</NavLink></h1>
        </nav> */}
      </header>
      <main className="App">
        <header>
            <Nav />
          </header>
        <Routes>
          <Route path='/' element={<Home movies={movies} topDescription={topDescription} formatGenre={formatGenre} />} />
          <Route path='/:movieId' element={<Modal formatDate={formatDate} formatGenre={formatGenre} />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='*' element={<ErrorPage error='*' />} />
        </Routes>
      </main>
    </>
  );
}

export default App
