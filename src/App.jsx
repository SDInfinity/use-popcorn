import {
  MovieList,
  MoviesWatched,
  Navbar,
  Loader,
  ErrorMessage,
  MovieDetail,
} from "./components/index";
import "./App.css";
import { useState, useEffect } from "react";

const KEY = "f19abece";

export default function App() {
  const [query, setQuery] = useState("");
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

  function handleWatchedMovie(movie) {
    setWatched([...watched, movie]);
  }

  function handleDeleteWatchedMovie(id) {
    setWatched(watched.filter((movie) => movie.imdbID !== id));
  }

  const controller = new AbortController();

  async function fetchMovies() {
    try {
      setIsLoading(true);
      setError(""); //reset error
      const response = await fetch(
        ` https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        { signal: controller.signal }
      );

      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();

      if (data.Response === "False") throw new Error("Movie not Found");

      setMovies(data.Search);
      setError(""); //reset error
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message);
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }

    handleCloseMovie();
  }

  useEffect(() => {
    fetchMovies();

    //cleaup data fetching
    return () => controller.abort();
  }, [query]);

  return (
    <>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <main className="main">
        {query ? (
          <>
            {isLoading && <Loader />}
            {!isLoading && !error && (
              <MovieList
                movies={movies}
                handleSelectMovieID={handleSelectMovieID}
              />
            )}
            {error && <ErrorMessage message={error} />}
          </>
        ) : (
          <>
            <div className="box initial-message">
              <p>Start for searching for movies</p>
            </div>
          </>
        )}

        {selectedMovieId ? (
          <MovieDetail
            selectedMovieId={selectedMovieId}
            handleCloseMovie={handleCloseMovie}
            handleWatchedMovie={handleWatchedMovie}
            watched={watched}
          />
        ) : (
          <MoviesWatched
            watched={watched}
            handleDeleteWatchedMovie={handleDeleteWatchedMovie}
          />
        )}
      </main>
    </>
  );
}
