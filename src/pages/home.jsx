import '../css/Home.css';
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from '../services/api';

function Home () {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch(err) {
                console.log(err);
                setError("Failed to load");
            }
            finally {
                setLoading(false);
            }
        };

        loadPopularMovies()
    },[])

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!search.trim()) return
        if(loading) return
        setLoading(true)
        try {
            const searchRes = await searchMovies(search)
            setMovies(searchRes)
            setError(null)
            
        } catch (err) {
            setError("Failed to load movies...")
            console.log(err)
        }
        finally{
            setLoading(false)
        }

    };

    
    return ( 
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search form movies..." 
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                className="search-input"/>
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && <div className='error-message'>{error}</div>}
            {loading ? <div className='loading'>Loading...</div> : 
            
                <div className="movies-grid">
                    {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            }
        </div>
     );
}

export default Home ;