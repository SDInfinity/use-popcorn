import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
const KEY = "f19abece";

const MovieDetail = ({ selectedMovieId, handleCloseMovie }) => {
  const [movie, setMovie] = useState({});
  const [isloading, setIsLoading] = useState(false);

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

  async function getMovie() {
    setIsLoading(true);
    const response = await fetch(
      ` http://www.omdbapi.com/?&apikey=${KEY}&i=${selectedMovieId}`
    );
    const data = await response.json();
    setMovie(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, [selectedMovieId]);

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
                <StarRating maxRating={10} size={24} />
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
