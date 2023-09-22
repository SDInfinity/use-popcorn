import {
  MovieList,
  MoviesWatched,
  Navbar,
  Loader,
  ErrorMessage,
} from "./components/index";
import "./App.css";
import { tempWatchedData } from "./data";
import { useState, useEffect } from "react";

const KEY = "f19abece";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchMovies() {
    try {
      setIsLoading(true);
      const response = await fetch(` http://www.omdbapi.com/?
    i=tt3896198&apikey=${KEY}&s=The Batman`);

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
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar movies={movies} />
      <main className="main">
        {isLoading && <Loader />}
        {!isLoading && !error && <MovieList movies={movies} />}
        {error && <ErrorMessage message={error} />}
        <MoviesWatched watched={watched} setWatched={setWatched} />
      </main>
    </>
  );
}
