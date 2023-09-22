import { MovieList, MoviesWatched, Navbar } from "./components/index";
import "./App.css";
import { tempMovieData, tempWatchedData } from "./data";
import { useState, useEffect } from "react";

const KEY = "f19abece";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  useEffect(() => {
    fetch(` http://www.omdbapi.com/?
  i=tt3896198&apikey=${KEY}&s=the batman`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.Search.slice(0, 6));
      });
  }, []);

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
