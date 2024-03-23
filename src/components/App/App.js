import './App.css';
import movieData from '../../movieData';
import Movies from '../Movies/Movies'
import TopMovie from '../TopMovie/TopMovie';
import { useState, useEffect } from 'react'
import { fetchData } from '../../apiCalls';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   fetchData('movies')
  //     .then(data => setMovies(data))
  //     .catch(error => {
  //       setError('Oops! Something broke.')
  //       console.log(error.message)
  //     })
  // },[])

  // console.log('movies',movies)

  function displaySelectedMovie(movieName) {
    console.log(`${movieName}`)
  }

  return (
    <main className="App">
      <nav className="Nav-bar"></nav>
      <TopMovie className="hidden" movies={movies}/>
      <Movies className="hidden" movies={movies} displaySelectedMovie={displaySelectedMovie}/>
    </main>
  );
}

export default App;
