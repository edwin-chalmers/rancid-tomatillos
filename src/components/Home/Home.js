import './Home.css'
import Movies from '../Movies/Movies'
import TopMovie from '../TopMovie/TopMovie'

function Home({movies, setMovie, handleOpen, topDescription, formatDate, formatGenre,}) {
    const main =  (
        <>
            <nav className="Nav-bar">NAV</nav>
            <TopMovie
                topDescription={topDescription}
                formatDate={formatDate}
                formatGenre={formatGenre}
            />
            <Movies 
                movies={movies}
                setMovie={setMovie}
                handleOpen={handleOpen}
            />
        </>
      )
    
    return (
        <>
            {main}
        </>
    )
}
// topDescription, formatDate, formatGenre,
export default Home