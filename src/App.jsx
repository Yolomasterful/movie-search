/* ======================================================
    Lab 8 - App.jsx
====================================================== */

import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieGrid from "./components/MovieGrid.jsx";

export default function App() {
  // TODO 3: 
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [watchlist, setWatchlist] = useState([]);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;


  const fetchMovies = async (query) => {
    // TODO 4: 
    setIsLoading(true);
    setError("");

    if (!API_KEY || API_KEY === "ENTER_OMDB_API_KEY_HERE") {
      setMovies([]);
      setError("No API key. Please add your OMDb API key in App.jsx.");
      setIsLoading(false);
      return;
    }

    try {
      const url =
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      // TODO 5: 
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found");
      }

    } catch (err) {
      // TODO 6: 
      setError("Failed to fetch movies.");
      setMovies([]);
    } finally {
      // TODO 7: 
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // TODO 8: 
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (newSearchTerm) => {
    // TODO 9: 
    setSearchTerm(newSearchTerm);
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const alreadyExists = prevWatchlist.some(
        (item) => item.imdbID === movie.imdbID
      );
      if (alreadyExists) {
        return prevWatchlist;
      }
      return [...prevWatchlist, movie];
    });
  };

  return (
    <div className="page">
      <Header title="Movie Search" searchTerm={searchTerm} />

      {/* TODO 10: 
          Render SearchBar and pass handleSearch as onSearch
      */}
      <SearchBar onSearch={handleSearch} />

      <main className="panel">
        {/* TODO 11A: Conditional rendering for results*/}
        {isLoading ? (
            <p className="status">Loading...</p>
        ) : error ? (
            <p className="status error">{error}</p>
        ) : movies.length === 0 ? (
            <p className="status">No movies found.</p>
        ) : (
            <MovieGrid movies={movies} addToWatchlist={addToWatchlist} />
        )}

        {/* TODO 11B: Add a watchlist section below the search results.*/}
        <section className="watchlist">
          <h2>My Watchlist</h2>
          {watchlist.length === 0 ? (
              <p className="status">No movies in watchlist yet.</p>
          ) : (
              <ul className="watchlistList">
                {watchlist.map((movie) => (
                    <li key={movie.imdbID}>
                      {movie.Title} ({movie.Year})
                    </li>
                ))}
              </ul>
          )}
        </section>
      </main>
    </div>
  );
}