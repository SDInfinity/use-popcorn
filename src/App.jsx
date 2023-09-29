import {
  MovieList,
  MoviesWatched,
  Navbar,
  Loader,
  ErrorMessage,
  MovieDetail,
} from "./components/index";
import "./App.css";
import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useLocaleStorage } from "./hooks/useLocaleStorage";

export default function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie); //custom hook
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  //lazy evaluation
  const [watched, setWatched] = useLocaleStorage("watched");

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
              <p>Start searching for movies</p>
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
