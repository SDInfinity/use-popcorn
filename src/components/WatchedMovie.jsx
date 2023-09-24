const WatchedMovie = ({
  imdbID,
  poster,
  title,
  imdbRating,
  userRating,
  runtime,
  handleDeleteWatchedMovie,
}) => {
  return (
    <li key={imdbID}>
      <img src={poster} alt={`${title} poster`} />
      <div>
        <h3>{title}</h3>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => handleDeleteWatchedMovie(imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;
