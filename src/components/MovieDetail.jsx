import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
const KEY = "f19abece";

const MovieDetail = ({
  selectedMovieId,
  handleCloseMovie,
  handleWatchedMovie,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const isWatched = watched
    .map((movie) => movie.imdbID)
    .includes(selectedMovieId);

  const rating = watched.find(
    (movie) => selectedMovieId === movie.imdbID
  )?.userRating;

  async function getMovie() {
    setIsLoading(true);
    const response = await fetch(
      ` http://www.omdbapi.com/?&apikey=${KEY}&i=${selectedMovieId}`
    );
    const data = await response.json();
    setMovie(data);
    setIsLoading(false);
  }

  function AddWatchedMovie() {
    const newMovie = {
      imdbID: selectedMovieId,
      title,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    handleWatchedMovie(newMovie);

    handleCloseMovie();
  }

  useEffect(() => {
    getMovie();
  }, [selectedMovieId]);

  useEffect(() => {
    if (!title) {
      return;
    }
    document.title = `Movie | ${title}`;
    return () => (document.title = "usePopcorn 🍿");
  }, [title]);

  return (
    <div className="box">
      {isloading ? (
        <Loader />
      ) : (
        <>
          <div className="details">
            <header>
              <div className="btn-back">
                <button onClick={handleCloseMovie}>&larr;</button>
              </div>
              <img
                src={`${
                  poster !== "N/A" ? poster : "https://via.placeholder.com/120"
                }`}
                alt={`Poster of ${movie} movie`}
              />
              <div className="details-overview">
                <h2>{title}</h2>
                <p>
                  {released} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>
                  <span>⭐</span>
                  {imdbRating} IMDB rating
                </p>
              </div>
            </header>

            <section>
              <div className="rating">
                {!isWatched ? (
                  <>
                    <StarRating
                      maxRating={10}
                      size={20}
                      onSetRating={setUserRating}
                    />
                    {userRating > 0 && (
                      <button className="btn-add" onClick={AddWatchedMovie}>
                        + Add to List
                      </button>
                    )}
                  </>
                ) : (
                  <p>
                    You already rated this movie {rating} <span>⭐</span>
                  </p>
                )}
              </div>

              <div className="plot">
                <p>
                  <em>{plot}</em>
                </p>
              </div>

              <p>Starring: {actors} .</p>
              <p>Directed by {director} .</p>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
