import { MovieList, MoviesWatched, Navbar } from "./components/index";
import "./App.css";
import { tempMovieData, tempWatchedData } from "./data";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <Navbar movies={movies} />
      <main className="main">
        <MovieList movies={movies} />
        <MoviesWatched watched={watched} setWatched={setWatched} />
      </main>
    </>
  );
}
