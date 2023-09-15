import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StarRating from "./components/StarRating.jsx";
import { useState } from "react";

const Test = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setRating} />
      <p>Movie was rated {rating}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
