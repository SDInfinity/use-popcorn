import {
  MovieList,
  MoviesWatched,
  Navbar,
  Loader,
  ErrorMessage,
  MovieDetail,
} from "./components/index";
import "./App.css";
// import { tempWatchedData } from "./data";
import { useState, useEffect } from "react";

const KEY = "f19abece";

export default function App() {
  const [query, setQuery] = useState("the batman");
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSelectMovieID(id) {
    setSelectedMovieId(selectedMovieId === id ? null : id);
  }

  function handleCloseMovie() {
    setSelectedMovieId(null);
  }

  async function fetchMovies() {
    try {
      setIsLoading(true);
      setError(""); //reset error
      const response = await fetch(` http://www.omdbapi.com/?
      i=tt3896198&apikey=${KEY}&s=${query}`);

      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();

      if (data.Response === "False") throw new Error("Movie not Found");

      setMovies(data.Search.slice(0, 6));
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }

    if (query.length < 2) {
      setMovies([]);
      setError("");
      return;
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <main className="main">
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <MovieList
            movies={movies}
            handleSelectMovieID={handleSelectMovieID}
          />
        )}
        {error && <ErrorMessage message={error} />}
        {selectedMovieId ? (
          <MovieDetail
            selectedMovieId={selectedMovieId}
            handleCloseMovie={handleCloseMovie}
          />
        ) : (
          <MoviesWatched watched={watched} setWatched={setWatched} />
        )}
      </main>
    </>
  );
}
