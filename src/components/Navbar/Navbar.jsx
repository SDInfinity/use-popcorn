import "./navbar.css";
import { useRef, useEffect } from "react";

const Navbar = ({ movies, query, setQuery }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    function callback(event) {
      if (document.activeElement === inputRef.current) {
        return;
      }

      if (event.code === "Enter") {
        inputRef.current.focus();
        setQuery("");
      }
    }

    inputRef.current.focus();
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [setQuery]);

  return (
    <header className="navbar">
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>

        <input
          ref={inputRef}
          className="search search-bar"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <p className="num-results">
          {" "}
          {!query ? (
            `Movie results`
          ) : (
            <strong>
              {movies.length > 1
                ? `Found ${movies.length} movies.`
                : "Found 1 movie."}{" "}
            </strong>
          )}
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
