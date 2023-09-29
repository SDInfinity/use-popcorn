import { useState, useEffect } from "react";

export const useMovies = (query, callback) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const KEY = "f19abece";

  const controller = new AbortController();

  async function fetchMovies() {
    try {
      setIsLoading(true);
      setError(""); //reset error
      const response = await fetch(
        ` https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        { signal: controller.signal }
      );

      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();

      if (data.Response === "False") throw new Error("Movie not Found");

      setMovies(data.Search);
      setError(""); //reset error
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message);
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }

    callback?.();
  }

  useEffect(() => {
    fetchMovies();
    //cleaup data fetching
    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };
};
