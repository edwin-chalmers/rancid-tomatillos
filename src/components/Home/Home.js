import './Home.css'
import Movies from '../Movies/Movies'
import TopMovie from '../TopMovie/TopMovie'

function Home({movies, topDescription, formatGenre,}) {
    const main =  (
        <>
            <TopMovie topDescription={topDescription} formatGenre={formatGenre} />
            <Movies movies={movies} />
        </>
      )
    
    return (
        <>
            {main}
        </>
    )
}

export default Home