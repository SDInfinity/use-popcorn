import star from "../assets/star.svg";
import emptyStar from "../assets/empty-star.svg";
import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
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
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating = 0,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: 0,
    color,
    fontSize: `${size / 1.5}px`,
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <img
            src={
              tempRating >= index + 1 || rating >= index + 1 ? star : emptyStar
            }
            key={index}
            width={30}
            height={30}
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

export default StarRating;
