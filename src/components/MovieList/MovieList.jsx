import { useState } from "react";
import Movie from "../Movie";
import "./movieList.css";
import ToggleButton from "../ToggleButton";

const MovieList = ({ movies }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <ul className="list list-movies">
          {movies?.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
