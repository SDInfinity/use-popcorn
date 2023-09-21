const ListMovie = ({ movie }) => {
  return (
    <li key={movie.imdbID}>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150"
        }
        alt={`${movie.Title} poster`}
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default ListMovie;
