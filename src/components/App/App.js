import './App.css';
import movieData from '../../movieData';
import Movies from '../Movies/Movies'
import TopMovie from '../TopMovie/TopMovie';
import { useState, useEffect } from 'react'
import { fetchData } from '../../apiCalls';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData('movies')
      .then(data => {
        console.log('useEffect', data);
        setMovies(data); // Now data is defined, and this will work
      })
      .catch(error => {
        setError('Oops! Something broke.')
        console.log(error.message);
      });
}, []);

  console.log('movies', movies)

  function displaySelectedMovie(movieName) {
    console.log(`${movieName}`)
  }

  return (
    <main className="App">
      <nav className="Nav-bar"></nav>
      {movies.movies.length > 0 ? (
        <>
          <TopMovie movies={movies}/>
          <Movies movies={movies} displaySelectedMovie={displaySelectedMovie}/>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}

export default App
