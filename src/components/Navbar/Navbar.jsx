import "./navbar.css";

const Navbar = ({ movies, query, setQuery }) => {
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
