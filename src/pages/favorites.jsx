import '../css/Favorites.css'
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../context/MovieContext';
function Favorite(){
    const {favorites} = useMovieContext();
    console.log(favorites)
    if (favorites.length > 0){
        return(
            <>
            <div className="movies-grid">
            {favorites.map(
              (movie) =>
                (
                  <MovieCard key={movie.id} movie={movie} />
                )
            )}
          </div>
            </>
        )
    }

    return(
        <>

        <div className="favorites-empty">
            <h2>no favourites movies yet</h2>
            <p>test</p>
        </div>
        </>
    )
}

export default Favorite;