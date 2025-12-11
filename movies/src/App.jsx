import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import ResetButton from "../components/ResetButton";
import { RiMovie2Fill } from "react-icons/ri";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const key = import.meta.env.VITE_TMDB_API_KEY;

  const fetchMovies = async (query = "popular") => {
    setLoading(true);
    let url = "";
    if (query === "popular") {
      url = "https://api.themoviedb.org/3/movie/popular";
      setIsSearching(false);
    } else {
      url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`;
      setIsSearching(true);
    }

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const data = await response.json();
      setMovies(data?.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 mb-12 mt-12">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold uppercase mb-6 flex justify-center items-center gap-1">
        M
        <span className="inline-flex items-center">
          <RiMovie2Fill className="text-[3rem] leading-none -mx-1 text-[#bd0606]" />
        </span>
        vie Search App
      </h1>

      <SearchBar onSearch={fetchMovies} />

      {isSearching && <ResetButton onReset={() => fetchMovies()} />}

      {loading && <p className="text-center text-lg mb-4">Loading...</p>}

      {!loading && movies.length === 0 && <p className="text-center text-lg mb-4">No results found.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default App;
