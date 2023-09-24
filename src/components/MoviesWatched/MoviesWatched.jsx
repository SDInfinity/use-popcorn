import { useState } from "react";
import WatchedMovie from "../WatchedMovie";
import WatchedMovieSummary from "../WatchedMovieSummary";
import ToggleButton from "../ToggleButton";
import "./moviesWatched.css";

const MoviesWatched = ({ watched, handleDeleteWatchedMovie }) => {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const [isOpen, setIsOpen] = useState(true);

  const avgImdbRating = average(
    watched.map((movie) => movie.imdbRating)
  ).toFixed(2);

  const avgUserRating = average(
    watched.map((movie) => movie.userRating)
  ).toFixed(2);

  const avgRuntime = average(watched.map((movie) => movie.runtime)).toFixed(2);

  return (
    <div className="box">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <>
          <WatchedMovieSummary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgRuntime={avgRuntime}
            avgUserRating={avgUserRating}
          />
          <ul className="list watched">
            {watched.map((movie) => (
              <WatchedMovie
                {...movie}
                key={movie.imdbID}
                handleDeleteWatchedMovie={handleDeleteWatchedMovie}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MoviesWatched;
