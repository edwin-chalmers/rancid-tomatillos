import './App.css'
import Home from '../Home/Home'
import Modal from '../Modal/Modal'
import ErrorPage from '../ErrorPage/ErrorPage'
import Nav from '../Nav/Nav'
import { useState, useEffect } from 'react'
import { fetchData } from '../../apiCalls'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { formatDate, formatGenre } from '../../utils/utils'

function App() {
  const [movies, setMovies] = useState([])
  const [topDescription, setTopDescription] = useState({
      title: '',
      tagline: '',
      overview: '',
      release_date: '',
      genres: [],
      backdrop_path: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    fetchData('movies')
      .then(data => {
        if (data) {
          const sortedMovies = [...data.movies].sort((a, b) => b.average_rating - a.average_rating)
          const topMovie = sortedMovies[0]

          setMovies(data.movies) 

          if (topMovie) {
            return fetchData(`movies/${topMovie.id}`)
          } else {
            navigate("/error", { replace: true })
          }

        }
      })
      .then(topMovieDescription => {
        setTopDescription(topMovieDescription.movie);
      })
      .catch(error => {
        navigate("/error", { replace: true })
        console.log(error.message)
      });
  }, [navigate]);

  return (
    <>
      <Nav />
      <main className="App">
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
