import { useState } from "react";
import { tempWatchedData } from "../../data";
import WatchedMovie from "../WatchedMovie";
import WatchedMovieSummary from "../WatchedMovieSummary";
import "./moviesWatched.css";

const MoviesWatched = () => {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const [isOpen2, setIsOpen2] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedMovieSummary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgRuntime={avgRuntime}
            avgUserRating={avgUserRating}
          />
          <ul className="list">
            {watched.map((movie, index) => (
              <WatchedMovie movie={movie} key={index} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MoviesWatched;
