import { useState } from "react";
import Movie from "../Movie";
import "./movieList.css";
import ToggleButton from "../ToggleButton";

const MovieList = ({ movies, handleSelectMovieID }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box list-movies">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <ul className="list list-movies">
          {movies?.map((movie, index) => (
            <Movie
              movie={movie}
              key={index}
              handleSelectMovieID={handleSelectMovieID}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
