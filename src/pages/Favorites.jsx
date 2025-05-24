import '../css/Favorites.css';
import { useMovieContext } from '../contexts/movieContext';
import MovieCard from '../components/MovieCard';


function Favorites() {

    const {favorites} = useMovieContext();

    if(favorites)
    {
        return(
            <div className="movies-grid">
                    {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                    ))}
            </div>
        )
    }
    else
    {return ( 
        <div className="favorites-empty">
            <h2>No Favorites Movies yet</h2>
            <p>Start adding movies to your favorites!</p>
        </div>
     );}
}

export default Favorites;