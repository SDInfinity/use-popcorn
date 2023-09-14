import { MovieList, MoviesWatched, Navbar } from "./components/index";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <MovieList />
        <MoviesWatched />
      </main>
    </>
  );
}
