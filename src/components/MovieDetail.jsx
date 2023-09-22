const MovieDetail = ({ selectedMovieId, handleCloseMovie }) => {
  return (
    <div className="box">
      <div className="details">
        <button className="btn-back" onClick={handleCloseMovie}>
          &larr;
        </button>
        {selectedMovieId}
      </div>
    </div>
  );
};

export default MovieDetail;
