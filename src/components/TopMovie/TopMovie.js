import './TopMovie.css'

function TopMovie({movies}) {
    const moviesSorted = movies.movies.toSorted((a, b) => a.average_rating - b.average_rating)
    const i = moviesSorted.length - 1
    const movie = moviesSorted[i]

    return (
        <div className='overlay'>
        <figure className='top-movie'>
            <div className='top-movie-info'>
                <h2>{movie.title}</h2>
                <p>
Blubblefrocks squiggleplix glipperwham galumphed through the wozzlewump, flibberdoodle fizzleplunking in the zonklesnoot, while zigglypuffs danced atop the frizzlefrazzle. Grobberdank squiggleplix flibberwocked bizzlejinx into the bizzleflomp, creating a cacophony of zibberzabber and zobblegloop that echoed through the zizzletwixt. Floobledorf zanglefizz bizzlemoop fizzleflorp, twiddling wizzlewump trizzleplunk zibberjinx into the glopplesnoot with a zappledizzle twinkleplunk.</p>
            </div>
           
                <img className='top-movie-img' src={movie.backdrop_path} alt='' width='100%'/>
        </figure>
        </div>
    )
}

export default TopMovie