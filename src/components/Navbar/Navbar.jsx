import { useState } from "react";
import "./navbar.css";

const Navbar = ({ movies }) => {
  const [query, setQuery] = useState("");

  return (
    <header className="navbar">
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>

        <input
          className="search search-bar"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
