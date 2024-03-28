import './App.css'
import Home from '../Home/Home'
import Modal from '../Modal/Modal'
import { useState, useEffect } from 'react'
import { fetchData } from '../../apiCalls'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage'
import Nav from '../Nav/Nav'
import { formatDate, formatGenre } from '../../utils/utils'

function App() {
  const [movies, setMovies] = useState([])
  const [topDescription, setTopDescription] = useState([])
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
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rancid Tomatillos</title>
      </head>
      <body>
        <main className="App">
          <header>
            <Nav />
          </header>
          <Routes>
            <Route path='/' element={<Home movies={movies} topDescription={topDescription} formatDate={formatDate} formatGenre={formatGenre} />} />
            <Route path='/:movieId' element={<Modal formatDate={formatDate} formatGenre={formatGenre} />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='*' element={<ErrorPage error='*' />} />
          </Routes>
        </main>
      </body>
    </html>
  );
}

export default App
