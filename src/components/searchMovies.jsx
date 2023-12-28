import React, { useState } from "react";
import MovieCard from "./movieCard.jsx";
import { tmdbApiKey } from "./config.jsx";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();
    setError("");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.results.length > 0) {
        setMovies(data.results);
      } else {
        setError("No movies found matching your query."); // Setting error if no movies are found
      }
    } catch (err) {
      setError("Failed to fetch movies. Please try again later."); // Setting error on catch
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. The Matrix"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search for a movie"
        />
        <button className="button" type="submit" aria-label="Search button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
