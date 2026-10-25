import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import { useLocation } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {

    const loadPopularMovies = async () => {
      try {
        const popularmovies = await getPopularMovies();
        console.log(popularmovies);
        setMovies(popularmovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, [location.key]);


  async function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      return;
    }
    if (loading) return
    setLoading(true);

    try{
        const searchresults = await searchMovies(searchQuery);
        setMovies(searchresults);
        setError(null)
    }catch(err){
        console.log(err);
        setError("Failed to search movies");
    }
    finally{
        setLoading(false);
    }
    setSearchQuery("");
  }


  return (
    <>
      <div className="home">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map(
              (movie) =>

                (
                  <MovieCard key={movie.id} movie={movie} />
                )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
