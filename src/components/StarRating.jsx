import star from "../assets/star.svg";
import emptyStar from "../assets/empty-star.svg";
import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "10px",
  margin: "10px",
};

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  messages = [],
  defaultRating = 0,
  onSetRating = 0,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    color,
    fontSize: `${size / 1.5}px`,
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle} className="star-container">
        {Array.from({ length: maxRating }, (_, index) => (
          <img
            src={
              tempRating >= index + 1 || rating >= index + 1 ? star : emptyStar
            }
            key={index}
            width={size}
            height={size}
            style={{
              cursor: "pointer",
            }}
            onClick={() => handleRating(index + 1)}
            onMouseEnter={() => {
              setTempRating(index + 1);
            }}
            onMouseLeave={() => {
              setTempRating(0);
            }}
            className="star"
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
};

export default StarRating;
