import './App.css';
import movieData from './movieData';
import Movies from './Movies'
import { useState } from 'react'

function App() {
  const [movies, setMovies] = useState(movieData);

  return (
    <main className="App">
      <nav className="Nav-bar"></nav>
      <Movies movies={movies}/>
    </main>
  );
}

export default App;
